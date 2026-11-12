const get = (id) => document.getElementById(id);
const companyNames = new Map(survey.companies.map(([name, aliases]) => [name, aliases]));
const schoolNames = new Map(survey.schools.map(([name, aliases]) => [name, aliases]));
for (const record of survey.records) {
  const [kind, description, url] = record.advising || [];
  if (!kind || !description || !/^https?:\/\//.test(url || '')) {
    record.gap ||= '需核对高校教师与在读作者之间的具名指导关系。';
  }
}
const recordById = new Map(survey.records.map((record) => [record.id, record]));
const numberConfirmed = (records) => records.filter((record) => !record.gap).length;
const confirmed = new Set(survey.records.filter((record) => !record.gap).map(relationKey)).size;
const companyRecords = new Map(survey.companies.map(([company]) => [
  company, survey.records.filter((record) => record.company === company),
]));
const state = { query: get('query'), company: get('company'), school: get('school'), status: get('status') };
const plotButtons = new Map();
const detail = get('detail');

function relationKey(record) {
  return [record.company, record.team, record.school, record.faculty[0]].join('|');
}

function relationCounts(records) {
  const confirmedKeys = new Set(records.filter((record) => !record.gap).map(relationKey));
  const pendingKeys = new Set(records.filter((record) => record.gap).map(relationKey));
  return {
    known: confirmedKeys.size,
    pending: [...pendingKeys].filter((key) => !confirmedKeys.has(key)).length,
  };
}

function element(tag, content, className) {
  const result = document.createElement(tag);
  if (content) result.textContent = content;
  if (className) result.className = className;
  return result;
}

function source(label, url) {
  const link = element('a', label);
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  return link;
}

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

function openRecord(id) {
  const record = recordById.get(id);
  if (!record) return;
  get('detail-status').replaceChildren(badge(record));
  const heading = element('h2', record.title);
  heading.id = 'detail-title';
  const meta = element('p', `${record.company} · ${record.team} / ${record.venue} · ${record.date}`, 'detail-meta');
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
  const sources = element('div', '', 'sources');
  sources.append(source('论文原文 ↗', record.paper));
  for (const [label, url] of record.extra || []) sources.append(source(`${label} ↗`, url));
  const body = get('detail-body');
  body.replaceChildren(heading, meta, evidence);
  if (record.gap) body.append(element('p', record.gap, 'detail-gap'));
  body.append(roles, sources);
  if (!detail.open) detail.showModal();
}

function rowFor(record) {
  const row = element('tr');
  const company = element('td');
  company.append(element('strong', record.company), element('small', record.team));
  const school = element('td');
  school.append(element('strong', record.school), element('small', record.faculty[0]));
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
  ].join(' ').normalize('NFKC').toLocaleLowerCase();
}

const indexedRecords = survey.records.map((record) => [record, searchText(record)]);

function renderResults() {
  const terms = state.query.value.trim().normalize('NFKC').toLocaleLowerCase().split(/\s+/).filter(Boolean);
  const company = state.company.value;
  const school = state.school.value;
  const status = state.status.value;
  const records = indexedRecords.filter(([record, haystack]) => (
    (!company || record.company === company)
    && (!school || record.school === school || record.studentSchool === school)
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
  get('result-count').textContent = `${records.length} 条关系 · ${numberConfirmed(records)} 条已确认`;
  get('clear-filters').hidden = !(terms.length || company || school || status);
  for (const [name, button] of plotButtons) button.setAttribute('aria-pressed', String(company === name));
}

function resetFilters() {
  for (const input of Object.values(state)) input.value = '';
  renderResults();
}

function renderCompanyPlot() {
  for (const [name] of survey.companies) {
    const records = companyRecords.get(name);
    const { known, pending } = relationCounts(records);
    const button = element('button', '', 'plot-cell');
    button.type = 'button';
    const dots = element('span', '', 'dots');
    dots.setAttribute('aria-hidden', 'true');
    for (const record of records) dots.append(element('i', '', record.gap ? 'dot candidate' : 'dot'));
    button.append(element('span', name), dots);
    button.setAttribute('aria-label', `${name}，${known} 条已确认，${pending} 条待核验`);
    button.addEventListener('click', () => {
      state.company.value = state.company.value === name ? '' : name;
      renderResults();
      get('connections').scrollIntoView();
      state.company.focus({ preventScroll: true });
    });
    plotButtons.set(name, button);
    get('company-plot').append(button);
  }
}

function addOptions(input, entries) {
  for (const [name] of entries) input.add(new Option(name, name));
}

const pageSize = 15;
let visibleLeads = pageSize;

function renderLeadResults() {
  const query = get('lead-query').value.trim().toLocaleLowerCase();
  const company = get('lead-company').value;
  const school = get('lead-school').value;
  const matches = paperLeads.filter((paper) => (
    (!query || paper.title.toLocaleLowerCase().includes(query))
    && (!company || paper.companies.includes(company))
    && (!school || paper.schools.includes(school))
  ));
  const rows = matches.slice(0, visibleLeads).map((paper) => {
    const row = element('tr');
    const title = element('td');
    title.append(source(paper.title, paper.url), element('small', `${paper.venue || 'arXiv'} · ${paper.month}`));
    row.append(
      title,
      element('td', paper.companies.join('、')),
      element('td', paper.schools.join('、')),
      element('td', paper.note || (paper.internship ? '原文含实习说明' : '作者身份待查')),
    );
    return row;
  });
  get('lead-rows').replaceChildren(...rows);
  get('lead-count').textContent = `${matches.length} 篇合著线索 · 当前显示 ${rows.length} 篇`;
  get('lead-empty').hidden = matches.length > 0;
  get('more-leads').hidden = matches.length <= visibleLeads;
}

function resetLeadResults() {
  visibleLeads = pageSize;
  renderLeadResults();
}

get('confirmed-count').textContent = confirmed;
get('company-count').textContent = survey.companies.length;
get('school-count').textContent = survey.schools.length;
addOptions(state.company, survey.companies);
addOptions(state.school, survey.schools);
for (const [name, aliases, group] of survey.schools) get('school-list').append(element('li', `${name} · ${aliases} · ${group}`));
get('filters').addEventListener('submit', (event) => event.preventDefault());
state.query.addEventListener('input', renderResults);
for (const input of [state.company, state.school, state.status, get('sort')]) input.addEventListener('change', renderResults);
for (const id of ['clear-filters', 'empty-reset']) get(id).addEventListener('click', resetFilters);
addOptions(get('lead-company'), survey.companies);
addOptions(get('lead-school'), survey.schools);
get('lead-filters').addEventListener('submit', (event) => event.preventDefault());
get('lead-query').addEventListener('input', resetLeadResults);
for (const id of ['lead-company', 'lead-school']) get(id).addEventListener('change', resetLeadResults);
get('more-leads').addEventListener('click', () => {
  visibleLeads += pageSize;
  renderLeadResults();
});
detail.addEventListener('click', (event) => {
  if (event.target === detail) {
    const box = detail.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) detail.close();
  }
});
renderCompanyPlot();
renderResults();
renderLeadResults();
