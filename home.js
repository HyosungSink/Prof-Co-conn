const { records } = buildPaperIndex(survey.records, paperLeads, new Map(facultyMetrics.profiles));
const attributed = records.filter((record) => !record.attributionPending);

function distribution(dimension, institutions) {
  const groups = new Map(institutions.map(([name, , category]) => [name, { name, category, known: 0, pending: 0 }]));
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

// Split roughly equal areas along the longer side to keep the tiles readable.
function tileLayout(entries, box, place) {
  if (entries.length === 1) {
    place(entries[0], box);
    return;
  }
  const total = entries.reduce((sum, entry) => sum + entry.known, 0);
  let split = 1;
  let weight = entries[0].known;
  while (split < entries.length - 1 && weight + entries[split].known / 2 < total / 2) {
    weight += entries[split++].known;
  }
  const { x, y, width, height } = box;
  const fraction = weight / total;
  const horizontal = width >= height;
  const cut = fraction * (horizontal ? width : height);
  const first = horizontal ? { x, y, width: cut, height } : { x, y, width, height: cut };
  const rest = horizontal
    ? { x: x + cut, y, width: width - cut, height }
    : { x, y: y + cut, width, height: height - cut };
  tileLayout(entries.slice(0, split), first, place);
  tileLayout(entries.slice(split), rest, place);
}

const shortSchoolNames = {
  '清华大学': '清华大学', '北京大学': '北京大学', '复旦大学': '复旦大学',
  '上海交通大学': '上海交大', '中国科学技术大学': '中国科大', '哈尔滨工业大学': '哈工大',
  '西安交通大学': '西安交大', '香港大学': '港大', '香港中文大学': '港中大',
  '香港科技大学': '港科大', '香港城市大学': '港城大', '香港理工大学': '港理工',
  '香港中文大学（深圳）': '港中大·深圳', '香港科技大学（广州）': '港科大·广州',
  '北京航空航天大学': '北航', '北京邮电大学': '北邮', '中国科学院大学': '国科大',
  '中国人民大学': '人大', '华中科技大学': '华中科大', '电子科技大学': '电子科大',
  '西安电子科技大学': '西电', '西北工业大学': '西工大',
};

function renderSchoolChart() {
  const schools = distribution('school', survey.schools);
  const panels = [
    ['C9', 'C9 高校', 'red'],
    ['港五', '港五高校', 'orange'],
    ['合作大学', '港校内地校区', 'purple'],
    ['新增高校', '其他纳入高校', 'blue'],
  ].map(([category, title, color]) => {
    const entries = schools.filter((school) => school.category === category && school.known)
      .sort((a, b) => b.known - a.known);
    return { title, color, entries, known: entries.reduce((sum, school) => sum + school.known, 0) };
  });
  const summary = get('school-summary');
  const chart = get('school-plot');
  const groups = [];
  for (const panel of panels) {
    const tone = `school-tone-${panel.color}`;
    const key = element('li', '', tone);
    key.append(element('i', '', 'school-swatch'), element('span', panel.title), element('strong', String(panel.known)));
    summary.append(key);
    if (!panel.known) continue;

    const section = element('div', '', `school-map-group ${tone}`);
    section.setAttribute('role', 'group');
    section.setAttribute('aria-label', panel.title);
    const tiles = new Map();
    for (const school of panel.entries) {
      const tile = plotLink('school', school);
      tile.className = 'school-tile';
      tile.title = `${school.name} · ${school.known} 对已确认关系`;
      const name = tile.firstElementChild;
      name.className = 'school-tile-name';
      const shortName = shortSchoolNames[school.name] || school.name;
      if (school.category === '合作大学') name.textContent = shortName;
      const short = element('span', shortName, 'school-tile-short');
      tile.append(short, element('strong', String(school.known), 'plot-count'));
      tiles.set(school, tile);
      section.append(tile);
    }
    chart.append(section);
    groups.push({ ...panel, section, tiles });
  }

  function position(node, box, width, height) {
    node.style.left = `${100 * box.x / width}%`;
    node.style.top = `${100 * box.y / height}%`;
    node.style.width = `${100 * box.width / width}%`;
    node.style.height = `${100 * box.height / height}%`;
  }
  new ResizeObserver(([{ contentRect: { width, height } }]) => {
    if (!groups.length || !width || !height) return;
    tileLayout(groups, { x: 0, y: 0, width, height }, (group, box) => {
      position(group.section, box, width, height);
      tileLayout(group.entries, { x: 0, y: 0, width: box.width, height: box.height }, (school, rect) => {
        const tile = group.tiles.get(school);
        position(tile, rect, box.width, box.height);
        tile.classList.toggle('school-tile-compact', rect.width < 150 || rect.height < 100);
        tile.classList.toggle('school-tile-tight', rect.width < 55 || rect.height < 56);
        tile.classList.toggle('school-tile-shallow', rect.height < 38);
      });
    });
  }).observe(chart);

  const empty = schools.filter((school) => !school.known);
  if (empty.length) {
    const remainder = get('school-zero');
    remainder.append('暂无已确认关系：', ...empty.map((school) => plotLink('school', school)));
    remainder.hidden = false;
  }
}

renderSchoolChart();
