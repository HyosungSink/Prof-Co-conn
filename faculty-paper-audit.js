const facultyPaperAuditTitles = new Set(['教授', '副教授', '研究员', '助理教授']);
const facultyPaperAuditLabels = {
  confirmed: '本轮确认', existing: '已有确认', lead: '证据不足', 'no-evidence': '未见符合口径的证据',
};

function facultyPaperAuditFor(person, school, department) {
  if (facultyVerification(person, school, department) !== 3 ||
      ![...facultyTitleValues(person)].some(title => facultyPaperAuditTitles.has(title))) return null;
  const [[scholarId]] = facultyBibliographyFor(person, school, department);
  const audit = facultyPaperAudits[scholarId];
  const complete = audit?.exhausted && audit.from === survey.from && audit.through === survey.through;
  return { state: complete ? 'complete' : audit ? 'partial' : 'unstarted', audit };
}
