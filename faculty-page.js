const facultyQuery = get('faculty-query');
const facultySchool = get('faculty-school');
const facultyTitle = get('faculty-title-filter');
const directoryPage = document.querySelector('[data-faculty-page]').dataset.facultyPage;
const facultyDepartment = get('faculty-department');
const facultyRoot = get('faculty-rosters');
const facultyCount = get('faculty-count');
const snapshot = buildFacultyCatalog();
const countFormat = new Intl.NumberFormat('zh-CN');

function setTitleOptions(selected = facultyTitle.value) {
  const titles = new Set();
  const schools = facultySchool.value ? [facultySchool.value] : survey.schools.map(([name]) => name);
  for (const school of schools) {
    for (const { people } of directoryDepartments(school)) {
      for (const person of people) for (const value of facultyTitleValues(person)) titles.add(value);
    }
  }
  const levels = facultyTitleLevels;
  const regular = facultyTitleOptions.map(([label]) => label);
  const other = [...titles].filter(label => !regular.includes(label) && !levels.includes(label) && label !== '待核实')
    .sort((a, b) => a.localeCompare(b, 'zh-CN'));
  facultyTitle.replaceChildren(new Option('全部职称', ''),
    ...[...regular, ...other].filter(label => titles.has(label)).map(label => new Option(label, label)));
  const group = element('optgroup');
  group.label = '仅有职称层级';
  group.append(...levels.filter(label => titles.has(label)).map(label => new Option(label, label)));
  if (group.childElementCount) facultyTitle.append(group);
  if (titles.has('待核实')) facultyTitle.append(new Option('职称待核实', '待核实'));
  facultyTitle.disabled = !titles.size;
  facultyTitle.value = titles.has(selected) ? selected : '';
}

function facultyUnitId(schoolIndex, department) {
  return department.slug ? `faculty-institute-${department.slug}` : `faculty-unit-${schoolIndex + 1}-${department.index + 1}`;
}

function directoryDepartments(school) {
  return (snapshot[school] || []).filter(unit => facultyDirectoryForUnit(school, unit.name) === directoryPage);
}

function setDepartmentOptions(selected = '') {
  const school = facultySchool.value;
  const departments = directoryDepartments(school);
  const label = school === ucasSchool ? '研究所' : '院系';
  get('faculty-department-label').textContent = label;
  const placeholder = !school ? '请先选择高校' : departments.length ? `全部${label}` : '当前页面暂无收录';
  facultyDepartment.replaceChildren(new Option(placeholder, ''), ...departments.map(({ name }) => new Option(name, name)));
  facultyDepartment.disabled = !departments.length;
  facultyDepartment.value = departments.some(({ name }) => name === selected) ? selected : '';
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
  const title = facultyTitle.value;
  const isSearch = Boolean(words.length || title);
  const schools = [];
  let matches = 0;

  for (const [schoolIndex, [name, english, group]] of survey.schools.entries()) {
    if (facultySchool.value && facultySchool.value !== name) continue;
    const units = directoryDepartments(name).flatMap(department => {
      if (facultyDepartment.value && department.name !== facultyDepartment.value) return [];
      const context = facultySearchKey([name, english, department.name].join(' '));
      const people = department.people.filter(person => (!title || facultyTitleValues(person).has(title)) && words.every(word =>
        context.includes(word) || person.searchKey.includes(word)));
      const matchesSource = !title && department.sources?.some(unit => {
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
        const index = element('nav', '', 'faculty-unit-index');
        index.setAttribute('aria-label', `${name}名录索引`);
        const list = element('ul');
        for (const { department, id } of units) {
          const item = element('li');
          const link = element('a', department.name);
          link.href = `#${id}`;
          item.append(link);
          list.append(item);
        }
        index.append(list);
        body.append(index);
      }
      for (const unit of units) body.append(renderFacultyUnit(unit, name, isSearch));
    }
    fill();
    card.addEventListener('toggle', fill);
    return card;
  });

  const noMatches = !isSearch && facultySchool.value
    ? '这所学校在本页暂未收录院系或研究机构。'
    : `没有找到符合条件的教师或${facultySchool.value === ucasSchool ? '研究所' : '院系'}。`;
  facultyRoot.replaceChildren(...(cards.length ? cards : [element('p', noMatches, 'empty')]));
  facultyCount.textContent = `${schools.length} 所高校 · ${countFormat.format(matches)} 条${isSearch ? '匹配记录' : '名录记录'} · 采集日期 ${facultyDirectory.checked}`;
}

function renderFacultyUnit({ department, people, id }, name, isSearch) {
  const section = element('section', '', 'faculty-unit');
  section.id = id;
  const top = element('div', '', 'faculty-unit-head');
  const label = element('div');
  const count = `${countFormat.format(people.length)} ${isSearch ? '条匹配' : '位教师'}`;
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
  return section;
}

function updateDirectoryLinks() {
  const params = new URLSearchParams();
  if (facultySchool.value) params.set('school', facultySchool.value);
  if (facultyTitle.value) params.set('title', facultyTitle.value);
  if (facultyQuery.value.trim()) params.set('q', facultyQuery.value.trim());
  for (const link of document.querySelectorAll('.faculty-directory-nav [data-directory]')) {
    link.href = facultyDirectoryPages[link.dataset.directory] + (params.size ? `?${params}` : '');
  }
}

function applyFacultyFilters() {
  const url = new URL(location.href);
  if (facultySchool.value) url.searchParams.set('school', facultySchool.value);
  else url.searchParams.delete('school');
  if (facultyTitle.value) url.searchParams.set('title', facultyTitle.value);
  else url.searchParams.delete('title');
  url.searchParams.delete('department');
  url.searchParams.delete('institute');
  if (facultyQuery.value.trim()) url.searchParams.set('q', facultyQuery.value.trim());
  else url.searchParams.delete('q');
  if (facultyDepartment.value) {
    url.searchParams.set(facultySchool.value === ucasSchool ? 'institute' : 'department', facultyDepartment.value);
  }
  url.hash = '';
  history.replaceState(null, '', url);
  updateDirectoryLinks();
  renderFaculty();
}

function setupFacultyDirectory() {
  const url = new URL(location.href);
  const params = url.searchParams;
  const unitAnchor = url.hash.match(/^#faculty-unit-(\d+)-(\d+)$/);
  const instituteAnchor = snapshot[ucasSchool].find(({ slug }) => url.hash === `#faculty-institute-${slug}`);
  const linkedSchool = instituteAnchor ? ucasSchool : unitAnchor && survey.schools[Number(unitAnchor[1]) - 1]?.[0];
  const requestedSchool = params.get('school');
  const school = Object.hasOwn(snapshot, requestedSchool) ? requestedSchool : linkedSchool || '';
  const departments = snapshot[school] || [];
  const aliases = {
    '上海交通大学': { '网络空间安全学院': '计算机学院（网络空间安全学院、密码学院）' },
    '哈尔滨工业大学': Object.fromEntries([
      '计算机科学与技术系', '软件工程系', '网络空间安全系', '人工智能系', '计算机基础系'
    ].map(name => [`${name}（威海）`, '计算机科学与技术学院']))
  };
  const requestedDepartment = school === ucasSchool ? params.get('institute') ?? params.get('department') : params.get('department');
  const selectedDepartment = aliases[school]?.[requestedDepartment] ?? requestedDepartment;
  let linkedUnit;
  if (school === linkedSchool) {
    linkedUnit = school === ucasSchool ? instituteAnchor : departments.find(unit =>
      unit.unitIndexes.includes(Number(unitAnchor[2]) - 1));
    if (linkedUnit) url.hash = facultyUnitId(survey.schools.findIndex(([name]) => name === school), linkedUnit);
    else if (school === ucasSchool && unitAnchor) {
      params.set('school', ucasSchool);
      params.delete('department');
      url.hash = 'faculty-rosters';
    }
  }
  const selectedUnit = departments.find(unit => unit.name === selectedDepartment);
  const destination = linkedUnit || selectedUnit
    ? facultyDirectoryForUnit(school, (linkedUnit || selectedUnit).name)
    : params.get('scope') === 'related' ? 'related' : params.get('scope') === 'core' ? 'core' : directoryPage;
  params.delete('scope');
  if (destination !== directoryPage) {
    location.replace(facultyDirectoryPages[destination] + url.search + url.hash);
    return;
  }
  addOptions(facultySchool, survey.schools);
  facultySchool.value = school;
  facultyQuery.value = params.get('q') || '';
  setTitleOptions(params.get('title'));
  if (!facultyTitle.value) params.delete('title');
  if (url.href !== location.href) history.replaceState(null, '', url);
  setDepartmentOptions(linkedUnit && selectedUnit !== linkedUnit ? '' : selectedDepartment);
  updateDirectoryLinks();
  get('faculty-filters').addEventListener('submit', event => event.preventDefault());
  facultyQuery.addEventListener('input', () => {
    updateDirectoryLinks();
    renderFaculty();
  });
  facultySchool.addEventListener('change', () => {
    setDepartmentOptions();
    setTitleOptions();
    applyFacultyFilters();
  });
  facultyDepartment.addEventListener('change', applyFacultyFilters);
  facultyTitle.addEventListener('change', applyFacultyFilters);
  renderFaculty();
  if (url.hash === '#faculty-rosters' || linkedUnit) {
    const target = get(url.hash.slice(1));
    if (target) requestAnimationFrame(() => target.scrollIntoView());
  }
}

setupFacultyDirectory();
