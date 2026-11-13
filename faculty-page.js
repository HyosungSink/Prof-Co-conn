const facultyQuery = get('faculty-query');
const facultySchool = get('faculty-school');
const facultyDepartment = get('faculty-department');
const facultyRoot = get('faculty-rosters');
const facultyCount = get('faculty-count');
const snapshot = buildFacultyCatalog();
const countFormat = new Intl.NumberFormat('zh-CN');
const facultyPlotButtons = new Map();

function facultyUnitId(schoolIndex, department) {
  return department.slug ? `faculty-institute-${department.slug}` : `faculty-unit-${schoolIndex + 1}-${department.index + 1}`;
}

function facultyPlotButton(name) {
  const button = element('button');
  button.type = 'button';
  button.setAttribute('aria-controls', 'faculty-rosters');
  button.addEventListener('click', () => {
    facultySchool.value = facultySchool.value === name ? '' : name;
    setDepartmentOptions();
    applyFacultyFilters();
    if (facultyCount.getBoundingClientRect().bottom > window.innerHeight) {
      facultyCount.focus({ preventScroll: true });
      facultyCount.scrollIntoView({ block: 'start' });
    }
  });
  facultyPlotButtons.set(name, button);
  return button;
}

function setDepartmentOptions(selected = '') {
  const school = facultySchool.value;
  const departments = new Set((snapshot[school] || []).map(department => department.name));
  const label = school === ucasSchool ? '研究所' : '院系';
  get('faculty-department-label').textContent = label;
  const placeholder = school ? `全部${label}` : '请先选择高校';
  facultyDepartment.replaceChildren(new Option(placeholder, ''),
    ...Array.from(departments, name => new Option(name, name)));
  facultyDepartment.disabled = !school;
  facultyDepartment.value = departments.has(selected) ? selected : '';
}

function appendFacultySources(section, top, department) {
  if (department.slug) {
    if (department.url) top.append(source('机构官网 ↗', department.url));
    return;
  }
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

function appendFacultyBibliography(item, person, school, department) {
  const { name } = person;
  const [scholar, paper] = facultyBibliographyFor(person, school, department);
  const block = element('div', '', 'faculty-bibliography');
  const scholarRow = element('small', 'Google 学术：');
  if (scholar) {
    const [id, identity] = scholar;
    const link = source('查看主页 ↗', `https://scholar.google.com/citations?user=${id}`);
    link.setAttribute('aria-label', `查看 ${name} 的 Google 学术主页`);
    scholarRow.append(link);
    if (identity && identity !== link.href) scholarRow.append(' · ', source('身份来源', identity));
  } else {
    scholarRow.append('未核实');
  }
  const paperRow = element('small', 'CCF 论文：');
  if (paper) {
    const [title, year, venue, grade, url, publicationSource] = paper;
    paperRow.append(element('span', `已核实 · ${grade} 类`, 'faculty-paper-grade'));
    const details = element('details', '', 'faculty-paper');
    const summary = element('summary', '查看代表作');
    summary.setAttribute('aria-label', `查看 ${name} 的 CCF 代表作`);
    details.append(summary);
    const reference = element('div');
    reference.append(source(`${title} ↗`, url), element('small', `${venue} · ${year}`));
    if (publicationSource && publicationSource !== url) {
      const verification = element('small');
      verification.append(source('作者核对来源 ↗', publicationSource));
      reference.append(verification);
    }
    details.append(reference);
    block.append(scholarRow, paperRow, details);
  } else {
    paperRow.append('未核实');
    block.append(scholarRow, paperRow);
  }
  item.append(block);
}

function renderFaculty() {
  const words = facultyQuery.value.trim().split(/\s+/).map(facultySearchKey).filter(Boolean);
  const schools = [];
  let matches = 0;

  for (const [name, button] of facultyPlotButtons) {
    button.setAttribute('aria-pressed', String(name === facultySchool.value));
  }

  for (const [schoolIndex, [name, english, group]] of survey.schools.entries()) {
    if (facultySchool.value && facultySchool.value !== name) continue;
    const units = (snapshot[name] || []).flatMap(department => {
      if (facultyDepartment.value && department.name !== facultyDepartment.value) return [];
      const context = facultySearchKey([name, english, department.name].join(' '));
      const people = department.people.filter(person => words.every(word =>
        context.includes(word) || person.searchKey.includes(word)));
      const matchesSource = department.sources?.some(unit => {
        const key = facultySearchKey([unit.name, ...(unit.aliases || [])].join(' '));
        return words.every(word => context.includes(word) || key.includes(word));
      });
      const id = facultyUnitId(schoolIndex, department);
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
        index.setAttribute('aria-label', `${name}的${name === ucasSchool ? '研究所' : '院系'}名录`);
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
        const count = `${countFormat.format(people.length)} ${words.length ? '条匹配' : '位教师'}`;
        const units = department.sources || [];
        const incomplete = units.length && (units.every(unit => unit.status === 'partial' || !unit.people.length) ||
          units.some(unit => !unit.people.length));
        label.append(element('h2', department.name), element('p', [
          department.people.length ? count : '未收录逐人名单',
          department.people.length > 0 && incomplete && '部分名单',
          units.length === 1 && units[0].note,
          department.slug === 'unverified' && '公开资料暂未确认所属研究所',
          department.slug === 'campus' && '公开档案列为国科大校部人员，未列独立研究所'
        ].filter(Boolean).join(' · ')));
        top.append(label);
        section.append(top);
        appendFacultySources(section, top, department);
        if (people.length) {
          const list = element('ul', '', 'faculty-people');
          for (const teacher of people) {
            const { name: person, titles, tiers, titleLabels, appointments, profile, aliases } = teacher;
            const item = element('li');
            item.append(profile ? source(person, profile) : element('strong', person));
            const ranks = titles.length ? titles : tiers;
            const title = element('small', titles.length ? '职称：' : tiers.length ? '职称层级：' : '职称：待核实', 'faculty-person-title');
            if (!ranks.length) title.classList.add('faculty-person-title-pending');
            for (const [index, rank] of ranks.entries()) {
              if (index) title.append(' · ');
              title.append(rank.url ? source(rank.label, rank.url) : rank.label);
            }
            item.append(title);
            if (titleLabels.length) {
              const labels = element('small', '英文主页：');
              for (const [index, { label, url }] of titleLabels.entries()) {
                if (index) labels.append(' · ');
                labels.append(source(label, url));
              }
              item.append(labels);
            }
            if (aliases.length) item.append(element('small', aliases.join(' · ')));
            if (appointments.length) item.append(element('small', `任职信息：${appointments.join(' · ')}`));
            if (teacher.instituteSource) {
              const reference = element('small');
              reference.append(source('所属研究所来源 ↗', teacher.instituteSource));
              item.append(reference);
            }
            appendFacultyBibliography(item, teacher, name, department.name);
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

  facultyRoot.replaceChildren(...(cards.length ? cards : [
    element('p', `没有找到符合条件的教师或${facultySchool.value === ucasSchool ? '研究所' : '院系'}。`, 'empty')
  ]));
  facultyCount.textContent = `${schools.length} 所高校 · ${countFormat.format(matches)} 条${words.length ? '匹配记录' : '名录记录'} · 采集日期 ${facultyDirectory.checked}`;
}

addOptions(facultySchool, survey.schools);
const facultyParams = new URLSearchParams(location.search);
const selectedFacultySchool = facultyParams.get('school');
const selectedDepartment = facultyParams.get('department');
facultyQuery.value = facultyParams.get('q') || '';
const facultyTarget = location.hash.match(/^#faculty-unit-(\d+)-(\d+)$/);
const instituteTarget = snapshot[ucasSchool].find(({ slug }) => location.hash === `#faculty-institute-${slug}`);
const linkedSchool = instituteTarget ? ucasSchool : facultyTarget && survey.schools[Number(facultyTarget[1]) - 1]?.[0];
if (survey.schools.some(([school]) => school === selectedFacultySchool)) facultySchool.value = selectedFacultySchool;
else if (linkedSchool) facultySchool.value = linkedSchool;
const previousDepartment = {
  '上海交通大学': { '网络空间安全学院': '计算机学院（网络空间安全学院、密码学院）' },
  '哈尔滨工业大学': Object.fromEntries([
    '计算机科学与技术系', '软件工程系', '网络空间安全系', '人工智能系', '计算机基础系'
  ].map(name => [`${name}（威海）`, '计算机科学与技术学院']))
};
setDepartmentOptions(facultySchool.value === ucasSchool
  ? facultyParams.get('institute') ?? selectedDepartment
  : previousDepartment[facultySchool.value]?.[selectedDepartment] ?? selectedDepartment);
get('faculty-filters').addEventListener('submit', event => event.preventDefault());
facultyQuery.addEventListener('input', renderFaculty);
function applyFacultyFilters() {
  const url = new URL(location.href);
  if (facultySchool.value) url.searchParams.set('school', facultySchool.value);
  else url.searchParams.delete('school');
  url.searchParams.delete('department');
  url.searchParams.delete('institute');
  url.searchParams.delete('q');
  if (facultyDepartment.value) {
    url.searchParams.set(facultySchool.value === ucasSchool ? 'institute' : 'department', facultyDepartment.value);
  }
  url.hash = '';
  history.replaceState(null, '', url);
  renderFaculty();
}
facultySchool.addEventListener('change', () => {
  setDepartmentOptions();
  applyFacultyFilters();
});
facultyDepartment.addEventListener('change', applyFacultyFilters);
renderFacultyPlot(summarizeFaculty(snapshot), facultyPlotButton);
get('faculty-distribution').hidden = false;
renderFaculty();
if (instituteTarget && facultySchool.value === ucasSchool) {
  const section = get(facultyUnitId(0, instituteTarget));
  if (section) requestAnimationFrame(() => section.scrollIntoView());
} else if (facultyTarget && linkedSchool === ucasSchool && facultySchool.value === ucasSchool) {
  const url = new URL(location.href);
  url.searchParams.set('school', ucasSchool);
  url.searchParams.delete('department');
  url.hash = 'faculty-rosters';
  history.replaceState(null, '', url);
  requestAnimationFrame(() => facultyRoot.scrollIntoView());
} else if (facultyTarget && linkedSchool) {
  const index = Number(facultyTarget[2]) - 1;
  const department = snapshot[linkedSchool].find(item => item.unitIndexes.includes(index));
  const section = department && get(`faculty-unit-${facultyTarget[1]}-${department.index + 1}`);
  if (section) {
    if (location.hash !== `#${section.id}`) history.replaceState(null, '', `#${section.id}`);
    requestAnimationFrame(() => section.scrollIntoView());
  }
}
