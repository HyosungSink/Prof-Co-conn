const facultyQuery = get('faculty-query');
const facultySchool = get('faculty-school');
const facultyDepartment = get('faculty-department');
const facultyRoot = get('faculty-rosters');
const snapshot = facultyDirectory.schools;
const countFormat = new Intl.NumberFormat('zh-CN');

function facultySearchKey(value) {
  return value.normalize('NFKD').toLowerCase().replace(/[\p{M}\p{P}\p{Z}]/gu, '');
}

function departmentOf(unit) {
  return unit.department ?? unit.name.split(' · ', 1)[0];
}

function setDepartmentOptions(selected = '') {
  const school = facultySchool.value;
  const departments = new Set((snapshot[school] || []).map(departmentOf));
  const placeholder = school ? '全部院系' : '请先选择高校';
  facultyDepartment.replaceChildren(new Option(placeholder, ''),
    ...Array.from(departments, name => new Option(name, name)));
  facultyDepartment.disabled = !school;
  facultyDepartment.value = departments.has(selected) ? selected : '';
}

function renderFaculty() {
  const words = facultyQuery.value.trim().split(/\s+/).map(facultySearchKey).filter(Boolean);
  const schools = [];
  let matches = 0;

  for (const [schoolIndex, [name, english, group]] of survey.schools.entries()) {
    if (facultySchool.value && facultySchool.value !== name) continue;
    const units = (snapshot[name] || []).flatMap((unit, unitIndex) => {
      const department = departmentOf(unit);
      if (facultyDepartment.value && department !== facultyDepartment.value) return [];
      const context = facultySearchKey([name, english, unit.name, department, ...(unit.aliases || [])].join(' '));
      const matchUnit = words.every(word => context.includes(word));
      const people = unit.people.filter(([person, role, , alias]) => {
        const key = context + facultySearchKey([person, alias || '', role].join(' '));
        return words.every(word => key.includes(word));
      });
      return matchUnit || people.length ? [{ unit, people, id: `faculty-unit-${schoolIndex + 1}-${unitIndex + 1}` }] : [];
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
        for (const { unit, id } of units) {
          const item = element('li');
          const link = element('a', unit.name);
          link.href = `#${id}`;
          item.append(link);
          index.append(item);
        }
        body.append(index);
      }
      for (const { unit, people, id } of units) {
        const section = element('section', '', 'faculty-unit');
        section.id = id;
        const top = element('div', '', 'faculty-unit-head');
        const label = element('div');
        label.append(element('h2', unit.name), element('p', [
          unit.people.length ? `${countFormat.format(people.length)} ${words.length ? '条匹配' : '条名录记录'}` : '未收录逐人名单',
          unit.status === 'partial' && '部分名单',
          unit.note
        ].filter(Boolean).join(' · ')));
        top.append(label, source(unit.people.length ? '官方名录 ↗' : '院系官网 ↗', unit.url));
        section.append(top);
        if (people.length) {
          const list = element('ul', '', 'faculty-people');
          for (const [person, role, profile, alias] of people) {
            const item = element('li');
            item.append(profile ? source(person, profile) : element('strong', person));
            if (alias || role) item.append(element('small', [alias, role].filter(Boolean).join(' · ')));
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
  get('faculty-count').textContent = `${schools.length} 所高校 · ${countFormat.format(matches)} 条${words.length ? '匹配记录' : '名录记录'} · 采集日期 ${facultyDirectory.checked}`;
}

addOptions(facultySchool, survey.schools);
const facultyParams = new URLSearchParams(location.search);
const selectedFacultySchool = facultyParams.get('school');
const facultyTarget = location.hash.match(/^#faculty-unit-(\d+)-\d+$/);
const linkedSchool = facultyTarget && survey.schools[Number(facultyTarget[1]) - 1]?.[0];
if (survey.schools.some(([school]) => school === selectedFacultySchool)) facultySchool.value = selectedFacultySchool;
else if (linkedSchool) facultySchool.value = linkedSchool;
setDepartmentOptions(facultyParams.get('department'));
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
if (facultyTarget) document.getElementById(location.hash.slice(1))?.scrollIntoView();
