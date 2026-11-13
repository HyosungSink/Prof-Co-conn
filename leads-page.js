const { unmatched: unmatchedLeads } = partitionPapers(survey.records, paperLeads);

const pageSize = 15;
let visibleLeads = pageSize;

function leadPost(paper) {
  const post = element('article', '', 'lead-post');
  const header = element('header');
  const title = element('h2', paper.title);
  title.tabIndex = -1;
  const affiliations = element('div', '', 'lead-affiliations');
  for (const [names, label, style] of [
    [paper.companies, '相关企业', 'lead-company-tag'],
    [paper.schools, '相关高校', 'lead-school-tag'],
  ]) {
    if (!names.length) continue;
    const tags = element('ul', '', 'lead-tags');
    tags.setAttribute('aria-label', label);
    tags.setAttribute('role', 'list');
    for (const name of names) tags.append(element('li', name, style));
    affiliations.append(tags);
  }
  header.append(element('p', `${paper.venue || 'arXiv'} · ${paper.month}`, 'lead-meta'), title, affiliations);

  const note = element('div', '', 'lead-note');
  note.append(element('strong', '核验提示'),
    element('p', paper.note || (paper.internship ? '原文含实习说明' : '作者身份待查')));

  const footer = element('footer');
  const link = source('阅读论文', paper.url);
  link.className = 'lead-source';
  link.setAttribute('aria-label', `阅读论文：${paper.title}（在新标签页打开）`);
  const arrow = element('span', '↗');
  arrow.setAttribute('aria-hidden', 'true');
  link.append(arrow);
  footer.append(link);
  post.append(header, note, footer);
  return post;
}

function renderLeadResults(append = false) {
  const query = get('lead-query').value.trim().toLocaleLowerCase();
  const company = get('lead-company').value;
  const school = get('lead-school').value;
  const matches = unmatchedLeads.filter((paper) => (
    (!query || paper.title.toLocaleLowerCase().includes(query))
    && (!company || paper.companies.includes(company))
    && (!school || paper.schools.includes(school))
  ));
  const feed = get('lead-posts');
  const start = append ? feed.childElementCount : 0;
  const posts = matches.slice(start, visibleLeads).map(leadPost);
  if (append) feed.append(...posts);
  else feed.replaceChildren(...posts);
  get('lead-count').textContent = `${matches.length} 篇合著线索 · 当前显示 ${feed.childElementCount} 篇`;
  get('lead-empty').hidden = matches.length > 0;
  get('more-leads').hidden = matches.length <= visibleLeads;
  if (append) posts[0]?.querySelector('h2').focus();
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
  renderLeadResults(true);
});
renderLeadResults();
