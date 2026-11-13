const { records } = buildPaperIndex(survey.records, paperLeads, new Map(facultyMetrics.profiles));
const companyRecords = new Map(survey.companies.map(([name]) => [name, []]));
for (const record of records) {
  if (!record.attributionPending) companyRecords.get(record.company).push(record);
}

get('confirmed-count').textContent = records.filter((record) => !record.gap).length;
get('company-count').textContent = survey.companies.length;
get('school-count').textContent = survey.schools.length;

for (const [name, entries] of companyRecords) {
  const known = entries.filter((record) => !record.gap).length;
  const pending = entries.length - known;
  const link = element('a', '', 'plot-cell');
  link.href = `connections.html?${new URLSearchParams({ company: name })}`;
  link.setAttribute('aria-label', `查看${name}：${known} 条已确认，${pending} 条待核验`);
  const dots = element('span', '', 'dots');
  dots.setAttribute('aria-hidden', 'true');
  for (const record of entries) dots.append(element('i', '', record.gap ? 'dot candidate' : 'dot'));
  link.append(element('span', name, 'plot-label'), dots);
  get('company-plot').append(link);
}
