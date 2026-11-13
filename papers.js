function paperKeys(record) {
  const keys = [`title:${record.title.normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}]/gu, '')}`];
  if (record.paperId) keys.push(`id:${record.paperId}`);
  try {
    const url = new URL(record.paper || record.url);
    const host = url.hostname.replace(/^www\./, '');
    const path = decodeURIComponent(url.pathname).replace(/\/$/, '');
    const arxiv = host === 'arxiv.org' && path.match(/^\/(?:abs|html|pdf)\/((?:\d{4}\.\d{4,5}|[a-z-]+\/\d{7}))(?:v\d+)?(?:\.pdf)?$/i);
    const acl = host === 'aclanthology.org' && path.match(/^\/((?:\d{4}\.[\w-]+\.[\w-]+\.\d+|[A-Z]\d{2}-\d{4}))(?:v\d+)?(?:\.pdf)?$/i);
    const openReview = host === 'openreview.net' && /^\/(?:forum|pdf)$/.test(path) && url.searchParams.get('id');
    if (arxiv) keys.push(`id:arxiv:${arxiv[1].toLowerCase()}`);
    if (acl) keys.push(`id:acl:${acl[1].toLowerCase()}`);
    if (openReview) keys.push(`id:openreview:${openReview}`);
    if (host === 'doi.org' && /^\/10\.\d+\//.test(path)) {
      const doi = path.slice(1).toLowerCase();
      keys.push(`id:doi:${doi}`);
      if (doi.startsWith('10.48550/arxiv.')) keys.push(`id:arxiv:${doi.slice(15).replace(/v\d+$/, '')}`);
      if (doi.startsWith('10.18653/v1/')) keys.push(`id:acl:${doi.slice(12)}`);
    }
  } catch {
    // The title is still usable when a paper has no recognized identifier.
  }
  return keys;
}

function groupPapers(records) {
  const roots = records.map((_, index) => index);
  function root(index) {
    while (roots[index] !== index) {
      roots[index] = roots[roots[index]];
      index = roots[index];
    }
    return index;
  }
  const owners = new Map();
  records.forEach((record, index) => {
    for (const key of paperKeys(record)) {
      if (owners.has(key)) roots[root(index)] = root(owners.get(key));
      else owners.set(key, index);
    }
  });
  const groups = new Map();
  records.forEach((record, index) => {
    const key = root(index);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(record);
  });
  return [...groups.values()];
}

function partitionPapers(records, leads) {
  const groups = [];
  const unmatched = [];
  const leadSet = new Set(leads);
  for (const entries of groupPapers([...records, ...leads])) {
    const group = entries.filter((entry) => !leadSet.has(entry));
    if (group.length) groups.push(group);
    else {
      unmatched.push({
        ...entries[0],
        companies: [...new Set(entries.flatMap((paper) => paper.companies))],
        schools: [...new Set(entries.flatMap((paper) => paper.schools))],
        internship: entries.some((paper) => paper.internship),
        note: [...new Set(entries.map((paper) => paper.note).filter(Boolean))].join(' '),
      });
    }
  }
  return { groups, unmatched };
}

function buildPaperIndex(records, leads, metrics) {
  const { groups, unmatched } = partitionPapers(records, leads);
  const index = groups.map((entries) => {
    const group = entries.map((record) => {
      const [kind, description, url] = record.advising || [];
      return kind && description && /^https?:\/\//.test(url || '') ? record : {
        ...record, gap: record.gap || '需核对高校教师与在读作者之间的具名指导关系。',
      };
    });
    const eligible = group.filter((record) => !record.gap);
    const profiles = new Map();
    for (const record of eligible) {
      const name = record.faculty[0];
      const metric = metrics.get(name);
      const key = metric?.[1] || name;
      if (!profiles.has(key)) profiles.set(key, { record, metric });
    }
    const choices = [...profiles.values()];
    choices.sort((left, right) => ((right.metric?.[0] ?? -1) - (left.metric?.[0] ?? -1))
      || left.record.faculty[0].split(' · ').at(-1).localeCompare(right.record.faculty[0].split(' · ').at(-1), 'en'));
    const attribution = choices.length > 1 ? choices : [];
    const attributionPending = attribution.some(({ metric }) => !Number.isInteger(metric?.[0]));
    const primary = choices[0]?.record || group[0];
    const gap = attributionPending ? '部分指导教师的 Google 学术总 H 指数待核验，论文归属尚未确定。' : primary.gap;
    const extra = new Map([[primary.paper, '论文原文']]);
    for (const record of group) {
      if (!extra.has(record.paper)) extra.set(record.paper, '论文其他版本');
      for (const [label, url] of record.extra || []) {
        if (!extra.has(url)) extra.set(url, label);
      }
    }
    extra.delete(primary.paper);
    return { ...primary, gap, attribution, attributionPending, extra: [...extra].map(([url, label]) => [label, url]) };
  });
  return { records: index, leads: unmatched };
}
