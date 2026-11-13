const { records } = buildPaperIndex(survey.records, paperLeads, new Map(facultyMetrics.profiles));
const attributed = records.filter((record) => !record.attributionPending);

function distribution(dimension, institutions) {
  const groups = new Map(institutions.map(([name]) => [name, { name, known: 0, pending: 0 }]));
  for (const record of attributed) {
    const group = groups.get(record[dimension]);
    if (group) group[record.gap ? 'pending' : 'known'] += 1;
  }
  return [...groups.values()];
}

function plotLink(dimension, { name, known, pending }) {
  const link = element('a', '', 'plot-cell');
  link.href = `connections.html?${new URLSearchParams({ [dimension]: name })}`;
  link.setAttribute('aria-label', `查看${name}：${known} 条已确认，${pending} 条待核验`);
  link.append(element('span', name, 'plot-label'));
  return link;
}

get('confirmed-count').textContent = records.filter((record) => !record.gap).length;
get('company-count').textContent = survey.companies.length;
get('school-count').textContent = survey.schools.length;

for (const group of distribution('company', survey.companies)) {
  const link = plotLink('company', group);
  const dots = element('span', '', 'dots');
  dots.setAttribute('aria-hidden', 'true');
  for (let i = 0; i < group.known + group.pending; i += 1) {
    dots.append(element('i', '', i < group.known ? 'dot' : 'dot candidate'));
  }
  link.append(dots);
  get('company-plot').append(link);
}

const schools = distribution('school', survey.schools);
schools.sort((a, b) => b.known - a.known || b.pending - a.pending);
const maxSchoolTotal = Math.max(1, ...schools.map(({ known, pending }) => known + pending));
for (const group of schools) {
  const link = plotLink('school', group);
  const bar = element('span', '', 'school-bar');
  bar.setAttribute('aria-hidden', 'true');
  for (const [key, className] of [['known', 'bar-known'], ['pending', 'bar-pending']]) {
    if (!group[key]) continue;
    const segment = element('span', '', className);
    segment.style.width = `${100 * group[key] / maxSchoolTotal}%`;
    bar.append(segment);
  }
  const count = element('span', String(group.known), 'plot-count');
  if (group.pending) count.append(element('span', `+${group.pending}`, 'plot-pending'));
  link.append(bar, count);
  get('school-plot').append(link);
}
