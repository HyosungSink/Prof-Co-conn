const { unmatched: unmatchedLeads } = partitionPapers(survey.records, paperLeads);

const pageSize = 15;
let visibleLeads = pageSize;

function renderLeadResults() {
  const query = get('lead-query').value.trim().toLocaleLowerCase();
  const company = get('lead-company').value;
  const school = get('lead-school').value;
  const matches = unmatchedLeads.filter((paper) => (
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

addOptions(get('lead-company'), survey.companies);
addOptions(get('lead-school'), survey.schools);
get('lead-filters').addEventListener('submit', (event) => event.preventDefault());
get('lead-query').addEventListener('input', resetLeadResults);
for (const id of ['lead-company', 'lead-school']) get(id).addEventListener('change', resetLeadResults);
get('more-leads').addEventListener('click', () => {
  visibleLeads += pageSize;
  renderLeadResults();
});
renderLeadResults();
