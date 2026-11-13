const facultyQuery = get('faculty-query');
const facultySchool = get('faculty-school');
const facultyDepartment = get('faculty-department');
const facultyRoot = get('faculty-rosters');
const snapshot = mergeFacultyRosters(facultyDirectory.schools);
const countFormat = new Intl.NumberFormat('zh-CN');

function setDepartmentOptions(selected = '') {
  const school = facultySchool.value;
  const departments = new Set((snapshot[school] || []).map(department => department.name));
  const placeholder = school ? '全部院系' : '请先选择高校';
  facultyDepartment.replaceChildren(new Option(placeholder, ''),
    ...Array.from(departments, name => new Option(name, name)));
  facultyDepartment.disabled = !school;
  facultyDepartment.value = departments.has(selected) ? selected : '';
}

function appendFacultySources(section, top, department) {
  const [first, ...rest] = department.sources;
  if (!rest.length) {
    top.append(source(first.people.length ? '官方名录 ↗' : '院系官网 ↗', first.url));
    return;
  }
  const details = element('details', '', 'faculty-sources');
  details.append(element('summary', '官方来源'));
  const list = element('ul');
  for (const unit of department.sources) {
    const item = element('li');
    item.append(source(`${unit.name} ↗`, unit.url));
    if (unit.note) item.append(element('small', unit.note));
    list.append(item);
  }
  details.append(list);
  section.append(details);
}

function renderFaculty() {
  const words = facultyQuery.value.trim().split(/\s+/).map(facultySearchKey).filter(Boolean);
  const schools = [];
  let matches = 0;

  for (const [schoolIndex, [name, english, group]] of survey.schools.entries()) {
    if (facultySchool.value && facultySchool.value !== name) continue;
    const units = (snapshot[name] || []).flatMap(department => {
      if (facultyDepartment.value && department.name !== facultyDepartment.value) return [];
      const context = facultySearchKey([name, english, department.name].join(' '));
      const people = department.people.filter(person => words.every(word =>
        context.includes(word) || person.searchKey.includes(word)));
      const matchesSource = department.sources.some(unit => {
        const key = facultySearchKey([unit.name, ...(unit.aliases || [])].join(' '));
        return words.every(word => context.includes(word) || key.includes(word));
      });
      const id = `faculty-unit-${schoolIndex + 1}-${department.index + 1}`;
      return matchesSource || people.length ? [{ department, people, id }] : [];
    });

    if (units.length) {
      matches += units.reduce((sum, { people }) => sum + people.length, 0);
      schools.push({ name, english, group, units });
    }
  }

  const cards = schools.map(({ name, english, group, units }) => {
    const card = element('details', '', 'faculty-school-card');
    card.open = Boolean(facultySchool.value || words.length);
    const summary = element('summary', '', 'faculty-school-head');
    const heading = element('span', '', 'faculty-school-name');
    heading.append(element('strong', name), element('small', english));
    const meta = element('span', '', 'faculty-school-meta');
    const schoolCount = units.reduce((sum, { people }) => sum + people.length, 0);
    meta.append(element('span', `${countFormat.format(schoolCount)} 条`, 'faculty-school-count'), element('span', group, 'faculty-school-group'));
    summary.append(heading, meta);
    const body = element('div', '', 'faculty-school-body');
    card.append(summary, body);
    function fill() {
      if (!card.open || body.childNodes.length) return;
      if (units.length > 1) {
        const index = element('ul', '', 'faculty-unit-index');
        index.setAttribute('aria-label', `${name}的院系名录`);
        for (const { department, id } of units) {
          const item = element('li');
          const link = element('a', department.name);
          link.href = `#${id}`;
          item.append(link);
          index.append(item);
        }
        body.append(index);
      }
      for (const { department, people, id } of units) {
        const section = element('section', '', 'faculty-unit');
        section.id = id;
        const top = element('div', '', 'faculty-unit-head');
        const label = element('div');
        const incomplete = department.sources.every(unit => unit.status === 'partial' || !unit.people.length) ||
          department.sources.some(unit => !unit.people.length);
        label.append(element('h2', department.name), element('p', [
          department.people.length ? `${countFormat.format(people.length)} ${words.length ? '条匹配' : '位教师'}` : '未收录逐人名单',
          department.people.length > 0 && incomplete && '部分名单',
          department.sources.length === 1 && department.sources[0].note
        ].filter(Boolean).join(' · ')));
        top.append(label);
        section.append(top);
        appendFacultySources(section, top, department);
        if (people.length) {
          const list = element('ul', '', 'faculty-people');
          for (const { name: person, roles, profile, aliases } of people) {
            const item = element('li');
            item.append(profile ? source(person, profile) : element('strong', person));
            if (aliases.length || roles.length) item.append(element('small', [...aliases, ...roles].join(' · ')));
            list.append(item);
          }
          section.append(list);
        }
        body.append(section);
      }
    }
    fill();
    card.addEventListener('toggle', fill);
    return card;
  });

  facultyRoot.replaceChildren(...(cards.length ? cards : [element('p', '没有找到符合条件的教师或院系。', 'empty')]));
  get('faculty-count').textContent = `${schools.length} 所高校 · ${countFormat.format(matches)} 条${words.length ? '匹配记录' : '院系名录记录'} · 采集日期 ${facultyDirectory.checked}`;
}

addOptions(facultySchool, survey.schools);
const facultyParams = new URLSearchParams(location.search);
const selectedFacultySchool = facultyParams.get('school');
const selectedDepartment = facultyParams.get('department');
const facultyTarget = location.hash.match(/^#faculty-unit-(\d+)-(\d+)$/);
const linkedSchool = facultyTarget && survey.schools[Number(facultyTarget[1]) - 1]?.[0];
if (survey.schools.some(([school]) => school === selectedFacultySchool)) facultySchool.value = selectedFacultySchool;
else if (linkedSchool) facultySchool.value = linkedSchool;
const previousDepartment = {
  '上海交通大学': { '网络空间安全学院': '计算机学院（网络空间安全学院、密码学院）' },
  '哈尔滨工业大学': Object.fromEntries([
    '计算机科学与技术系', '软件工程系', '网络空间安全系', '人工智能系', '计算机基础系'
  ].map(name => [`${name}（威海）`, '计算机科学与技术学院']))
};
setDepartmentOptions(previousDepartment[facultySchool.value]?.[selectedDepartment] ?? selectedDepartment);
get('faculty-filters').addEventListener('submit', event => event.preventDefault());
facultyQuery.addEventListener('input', renderFaculty);
function applyFacultyFilters() {
  const url = new URL(location.href);
  if (facultySchool.value) url.searchParams.set('school', facultySchool.value);
  else url.searchParams.delete('school');
  if (facultyDepartment.value) url.searchParams.set('department', facultyDepartment.value);
  else url.searchParams.delete('department');
  url.hash = '';
  history.replaceState(null, '', url);
  renderFaculty();
}
facultySchool.addEventListener('change', () => {
  setDepartmentOptions();
  applyFacultyFilters();
});
facultyDepartment.addEventListener('change', applyFacultyFilters);
renderFaculty();
if (linkedSchool) {
  const index = Number(facultyTarget[2]) - 1;
  const department = snapshot[linkedSchool].find(item => item.unitIndexes.includes(index));
  const section = department && get(`faculty-unit-${facultyTarget[1]}-${department.index + 1}`);
  if (section) {
    if (location.hash !== `#${section.id}`) history.replaceState(null, '', `#${section.id}`);
    requestAnimationFrame(() => section.scrollIntoView());
  }
}
