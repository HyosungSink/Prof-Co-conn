const companyNames = new Map(survey.companies.map(([name, aliases]) => [name, aliases]));
const schoolNames = new Map(survey.schools.map(([name, aliases]) => [name, aliases]));
const paperIndex = buildPaperIndex(survey.records, paperLeads, new Map(facultyMetrics.profiles));
const recordById = new Map(paperIndex.records.map((record) => [record.id, record]));
const numberConfirmed = (records) => records.filter((record) => !record.gap).length;
const state = { query: get('query'), company: get('company'), school: get('school'), status: get('status') };
const detail = get('detail');

function badge(record) {
  return record.gap ? element('span', '待核验', 'badge candidate') : element('span', '已确认', 'badge');
}

function recordButton(record, text, label) {
  const button = element('button', text, 'row-link');
  button.type = 'button';
  button.setAttribute('aria-label', label || `查看 ${record.short} 的证据`);
  button.addEventListener('click', () => openRecord(record.id));
  return button;
}

function attributionFor(record) {
  const section = element('section', '', 'attribution');
  section.append(element('h3', '论文归属'), element('p', `Google 学术 · 总 H 指数 · ${facultyMetrics.checked} 核验`));
  const list = element('ul');
  for (const { record: entry, metric } of record.attribution) {
    const item = element('li');
    const affiliation = `${entry.school} · ${entry.company}`;
    item.append(element('strong', `${entry.faculty[0]} · ${affiliation}`));
    if (entry.id === record.id && !record.gap) item.append(element('span', '归属教师', 'badge'));
    const label = Number.isInteger(metric?.[0]) ? `H 指数 ${metric[0]}` : 'H 指数待核验';
    item.append(metric?.[1] ? source(`${label} ↗`, `https://scholar.google.com/citations?user=${metric[1]}&hl=en`) : element('span', label));
    if (entry.id !== record.id || record.attributionPending) item.append(source('指导关系依据 ↗', entry.advising[2]));
    list.append(item);
  }
  section.append(list);
  return section;
}

function openRecord(id) {
  const record = recordById.get(id);
  if (!record) return;
  get('detail-status').replaceChildren(badge(record));
  const heading = element('h2', record.title);
  heading.id = 'detail-title';
  const affiliation = record.attributionPending ? '' : `${record.company} · ${record.team} / `;
  const meta = element('p', `${affiliation}${record.venue} · ${record.date}`, 'detail-meta');
  const sources = element('div', '', 'sources');
  sources.append(source('论文原文 ↗', record.paper));
  for (const [label, url] of record.extra || []) sources.append(source(`${label} ↗`, url));
  const body = get('detail-body');
  body.replaceChildren(heading, meta);
  if (record.gap) body.append(element('p', record.gap, 'detail-gap'));
  if (!record.attributionPending) body.append(...relationshipEvidence(record));
  if (record.attribution.length) body.append(attributionFor(record));
  if (record.attributionPending) {
    for (const { record: entry } of record.attribution) {
      const comparison = element('details', '', 'comparison');
      comparison.append(element('summary', `${entry.faculty[0]} · ${entry.company} · 作者与指导依据`), ...relationshipEvidence(entry));
      body.append(comparison);
    }
  }
  body.append(sources);
  if (!detail.open) detail.showModal();
}

function relationshipEvidence(record) {
  const evidence = element('p', record.evidence, 'detail-evidence');
  const roles = element('dl', '', 'role-list');
  for (const [key, label, person, affiliation] of [
    ['faculty', '高校指导教师', record.faculty, record.school],
    ['employee', '企业正式员工', record.employee, record.company],
    ['student', '联合培养学生', record.student, record.studentSchool],
  ]) {
    const row = element('div');
    const value = element('dd');
    value.append(element('strong', `${person[0]}  ·  ${affiliation}`), element('p', person[1]));
    if (person[2]) value.append(source('身份依据 ↗', person[2]));
    if (key === 'faculty' && record.advising) {
      const [kind, description, url] = record.advising;
      const supervision = element('div', '', 'supervision');
      supervision.append(element('strong', kind), element('p', description), source('指导关系依据 ↗', url));
      value.append(supervision);
    }
    const term = element('dt', label);
    if (record.pendingRoles?.includes(key)) term.append(element('span', '待核验', 'role-pending'));
    row.append(term, value);
    roles.append(row);
  }
  return [evidence, roles];
}

function rowFor(record) {
  const row = element('tr');
  const company = element('td');
  const school = element('td');
  if (record.attributionPending) {
    const institutions = (key) => [...new Set(record.attribution.map(({ record: entry }) => entry[key]))].join('、');
    company.append(element('strong', institutions('company')));
    school.append(element('strong', institutions('school')), element('small', '归属教师待核验'));
  } else {
    company.append(element('strong', record.company), element('small', record.team));
    school.append(element('strong', record.school), element('small', record.faculty[0]));
  }
  const paper = element('td');
  paper.append(recordButton(record, record.short), element('small', `${record.venue} · ${record.date}`));
  const status = element('td');
  status.append(badge(record));
  const action = element('td', '', 'open-detail');
  action.append(recordButton(record, '↗'));
  row.append(company, school, paper, status, action);
  return row;
}

function searchText(record) {
  return [
    record.company, record.team, companyNames.get(record.company),
    record.school, record.studentSchool, schoolNames.get(record.school), schoolNames.get(record.studentSchool),
    record.title, record.short, record.area, record.venue, record.date,
    record.faculty[0], record.employee[0], record.student[0], record.advising?.[0],
    ...record.attribution.map(({ record: entry }) => [entry.faculty[0], entry.company, entry.team, entry.school].join(' ')),
  ].join(' ').normalize('NFKC').toLocaleLowerCase();
}

const indexedRecords = paperIndex.records.map((record) => [record, searchText(record)]);

function renderResults() {
  const terms = state.query.value.trim().normalize('NFKC').toLocaleLowerCase().split(/\s+/).filter(Boolean);
  const company = state.company.value;
  const school = state.school.value;
  const status = state.status.value;
  const records = indexedRecords.filter(([record, haystack]) => (
    (record.attributionPending
      ? !company && (!school || record.attribution.some(({ record: entry }) => entry.school === school))
      : (!company || record.company === company) && (!school || record.school === school))
    && (!status || (record.gap ? status === 'candidate' : status === 'confirmed'))
    && terms.every((term) => haystack.includes(term))
  )).map(([record]) => record);
  const sort = get('sort').value;
  records.sort((left, right) => {
    if (sort === 'evidence' && Boolean(left.gap) !== Boolean(right.gap)) return Number(Boolean(left.gap)) - Number(Boolean(right.gap));
    return sort === 'oldest' ? left.date.localeCompare(right.date) : right.date.localeCompare(left.date);
  });
  get('rows').replaceChildren(...records.map(rowFor));
  get('empty').hidden = records.length > 0;
  const confirmed = numberConfirmed(records);
  get('result-count').textContent = `${records.length} 篇论文 · ${confirmed} 对已确认`
    + (confirmed < records.length ? ` · ${records.length - confirmed} 篇待核验` : '');
  get('clear-filters').hidden = !(terms.length || company || school || status);
}

function resetFilters() {
  for (const input of Object.values(state)) input.value = '';
  syncInstitutionUrl();
  renderResults();
}

function syncInstitutionUrl() {
  if (location.protocol === 'file:') return;
  const url = new URL(location.href);
  for (const key of ['company', 'school']) {
    if (state[key].value) url.searchParams.set(key, state[key].value);
    else url.searchParams.delete(key);
  }
  if (url.href !== location.href) history.replaceState(null, '', url);
}

addOptions(state.company, survey.companies);
addOptions(state.school, survey.schools);
const linkedFilters = new URLSearchParams(location.search);
for (const [key, names] of [['company', companyNames], ['school', schoolNames]]) {
  const linked = linkedFilters.get(key);
  if (names.has(linked)) state[key].value = linked;
  state[key].addEventListener('change', syncInstitutionUrl);
}
get('filters').addEventListener('submit', (event) => event.preventDefault());
state.query.addEventListener('input', renderResults);
for (const input of [state.company, state.school, state.status, get('sort')]) input.addEventListener('change', renderResults);
for (const id of ['clear-filters', 'empty-reset']) get(id).addEventListener('click', resetFilters);
detail.addEventListener('click', (event) => {
  if (event.target === detail) {
    const box = detail.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) detail.close();
  }
});
renderResults();
