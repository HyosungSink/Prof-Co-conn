const { records } = buildPaperIndex(survey.records, paperLeads, new Map(facultyMetrics.profiles));

function distribution(dimension, institutions) {
  const groups = new Map(institutions.map(([name, english, category]) => [name, { name, english, category, known: 0, pending: 0 }]));
  for (const record of records) {
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

for (const group of distribution('attributedCompany', survey.companies)) {
  const link = plotLink('company', group);
  const dots = element('span', '', 'dots');
  dots.setAttribute('aria-hidden', 'true');
  for (let i = 0; i < group.known + group.pending; i += 1) {
    dots.append(element('i', '', i < group.known ? 'dot' : 'dot candidate'));
  }
  const count = element('strong', String(group.known + group.pending), 'company-plot-count');
  count.setAttribute('aria-hidden', 'true');
  link.append(dots, count);
  get('company-plot').append(link);
}

const schoolChartGroups = [
  ['C9', 'C9 Universities', 'C9', 'red'],
  ['新增高校', 'Other Mainland Universities', 'Other Mainland', 'blue'],
  ['港五', 'Hong Kong Universities', 'Hong Kong', 'orange'],
  ['合作大学', 'HK Universities’ Mainland Campuses', 'HK Campuses', 'purple'],
];

// Pack weighted rectangles into strips, keeping each strip's worst aspect ratio small.
function layoutWeightedRectangles(entries, box, weight, place) {
  const areaPerRecord = box.width * box.height / entries.reduce((sum, entry) => sum + weight(entry), 0);
  const ratio = (area, min, max, side) => {
    const thickness = area / side;
    return Math.max(thickness ** 2 / min, max / thickness ** 2);
  };
  let { x, y, width, height } = box;
  for (let i = 0; i < entries.length;) {
    const vertical = width >= height;
    const side = vertical ? height : width;
    const first = weight(entries[i]) * areaPerRecord;
    let area = first;
    let end = i + 1;
    while (end < entries.length) {
      const next = weight(entries[end]) * areaPerRecord;
      const min = weight(entries[end - 1]) * areaPerRecord;
      if (ratio(area + next, next, first, side) > ratio(area, min, first, side)) break;
      area += next;
      end += 1;
    }
    const thickness = area / side;
    let offset = 0;
    for (; i < end; i += 1) {
      const length = weight(entries[i]) * areaPerRecord / thickness;
      const tile = vertical
        ? { x, y: y + offset, width: thickness, height: length }
        : { x: x + offset, y, width: length, height: thickness };
      place(entries[i], tile);
      offset += length;
    }
    if (vertical) {
      x += thickness;
      width -= thickness;
    } else {
      y += thickness;
      height -= thickness;
    }
  }
}

function layoutSchoolGroups(groups, width, height, band, place) {
  const total = groups.reduce((sum, group) => sum + group.weight, 0);
  const draw = (group, x, y, width, height) => place(group, { x, y, width, height });
  if (width < 590 || groups.length !== 4) {
    let y = 0;
    for (const group of groups) {
      const size = band + (height - groups.length * band) * group.weight / total;
      draw(group, 0, y, width, size);
      y += size;
    }
    return;
  }
  const [c9, mainland, hk, campuses] = groups;
  const sideBySide = width >= 880;
  const rightBands = sideBySide ? 2 : 3;
  const share = c9.weight / total;
  // Leave room for heading bands while keeping the area below them proportional.
  const leftWidth = share * width * (height - rightBands * band)
    / (height - band - share * (rightBands - 1) * band);
  const rightWidth = width - leftWidth;
  const area = leftWidth * (height - band) / share;
  const mainlandHeight = band + area * mainland.weight / total / rightWidth;
  draw(c9, 0, 0, leftWidth, height);
  draw(mainland, leftWidth, 0, rightWidth, mainlandHeight);
  if (sideBySide) {
    const hkWidth = rightWidth * hk.weight / (hk.weight + campuses.weight);
    draw(hk, leftWidth, mainlandHeight, hkWidth, height - mainlandHeight);
    draw(campuses, leftWidth + hkWidth, mainlandHeight, rightWidth - hkWidth, height - mainlandHeight);
  } else {
    const hkHeight = band + area * hk.weight / total / rightWidth;
    draw(hk, leftWidth, mainlandHeight, rightWidth, hkHeight);
    draw(campuses, leftWidth, mainlandHeight + hkHeight, rightWidth, height - mainlandHeight - hkHeight);
  }
}

function schoolLabels(school) {
  const [full, alias] = school.english.split(' · ');
  const short = {
    '清华大学': 'Tsinghua', '复旦大学': 'Fudan', '西安电子科技大学': 'Xidian',
  }[school.name] || alias || full;
  return { full, short };
}

function renderSchoolChart() {
  const schools = distribution('attributedSchool', survey.schools);
  const total = schools.reduce((sum, school) => sum + school.known, 0);
  const pending = records.filter((record) => !record.gap && !record.attributedSchool).length;
  if (pending) {
    const note = get('school-chart-note');
    note.textContent = `另有 ${pending} 篇已确认合作的论文尚未确定高校归属。`;
    note.hidden = false;
  }
  const percent = (known) => `${(100 * known / total).toFixed(1)}%`;
  const chart = get('school-plot');
  const groups = schoolChartGroups.flatMap(([category, title, shortTitle, color]) => {
    const entries = schools.filter((school) => school.category === category && school.known)
      .sort((a, b) => b.known - a.known);
    const known = entries.reduce((sum, school) => sum + school.known, 0);
    if (!known) return [];

    const section = element('div', '', `school-map-group school-tone-${color}`);
    section.setAttribute('role', 'group');
    section.setAttribute('aria-label', `${title} · ${percent(known)}`);
    section.lang = 'en';

    const heading = element('div', '', 'school-group-band');
    heading.append(element('span', title, 'school-group-full'), element('span', shortTitle, 'school-group-short'),
      element('strong', percent(known), 'school-group-share'));
    const body = element('div', '', 'school-group-tiles');
    section.append(heading, body);

    const tiles = new Map();
    for (const school of entries) {
      const tile = plotLink('school', school);
      tile.className = 'school-tile';
      const { full, short } = schoolLabels(school);
      tile.title = `${full} · ${school.name} · ${percent(school.known)}（${school.known} 对）`;
      const name = tile.firstElementChild;
      name.className = 'school-tile-name';
      name.textContent = full;
      const caption = element('span', '', 'school-tile-caption');
      caption.append(element('span', percent(school.known), 'school-tile-share'),
        element('span', String(school.known), 'plot-count'));
      tile.append(element('span', short, 'school-tile-short'), caption);
      tiles.set(school, { tile, full, short });
      body.append(tile);
    }
    chart.append(section);
    return [{ section, entries, tiles, weight: known }];
  });

  function position(node, { x, y, width, height }) {
    Object.assign(node.style, { left: `${x}px`, top: `${y}px`, width: `${width}px`, height: `${height}px` });
  }

  function drawGroup(group, box, band) {
    const { width, height } = box;
    position(group.section, box);
    group.section.style.setProperty('--school-band-size', `${band}px`);
    group.section.classList.toggle('school-group-narrow', width < 330);
    group.section.classList.toggle('school-group-mini', width < 185);
    layoutWeightedRectangles(group.entries, { x: 0, y: 0, width, height: height - band }, school => school.known, (school, rect) => {
      const { tile, full, short } = group.tiles.get(school);
      position(tile, rect);
      const compact = rect.width < 112 || rect.height < 60 || full.length > 34 || full.length > rect.width * .25;
      const longestWord = Math.max(...full.split(/\s+/).map((word) => word.length));
      const font = Math.max(10, Math.min(35, rect.height * (compact ? .27 : .23), rect.width * .16,
        compact ? rect.width / (short.length * .65 + 1.1) : rect.width / (longestWord * .65 + 1.5)));
      tile.style.setProperty('--school-name-size', `${font}px`);
      tile.classList.toggle('school-tile-compact', compact);
      tile.classList.toggle('school-tile-dense', rect.width < 78 || rect.height < 47);
    });
  }

  if (groups.length) new ResizeObserver(([{ contentRect: { width, height } }]) => {
    if (!width || !height) return;
    const band = Math.min(width < 500 || height < 320 ? 22 : 32, height / (groups.length + 1));
    layoutSchoolGroups(groups, width, height, band, (group, rect) => drawGroup(group, rect, band));
  }).observe(chart);

  const empty = schools.filter((school) => !school.known);
  if (empty.length) {
    const remainder = get('school-zero');
    remainder.append('暂无已确认关系：', ...empty.map((school) => {
      const link = plotLink('school', school);
      link.firstElementChild.textContent = schoolLabels(school).full;
      link.lang = 'en';
      return link;
    }));
    remainder.hidden = false;
  }
}

function facultyChartSchools(scope) {
  return facultyPlotStats.flatMap(([name, , , units]) => {
    const included = units.filter(([unit]) => facultyDirectoryForUnit(name, unit) === scope);
    let count = 0, complete = 0;
    for (const [, teachers] of included) {
      count += teachers.length;
      complete += teachers.filter(([, score]) => score === 3).length;
    }
    return count ? [{ name, count, complete, units: included }] : [];
  }).sort((a, b) => b.count - a.count);
}

function setupHomeCharts() {
  const slides = [...document.querySelectorAll('.home-slide')];
  const prev = get('chart-prev');
  const next = get('chart-next');
  const number = index => String(index).padStart(2, '0');
  const initialized = new Set([0]);
  let active = 0;
  const facultyStats = new Map();

  function initSlide(slide) {
    if (slide.classList.contains('home-school-slide')) return renderSchoolChart();
    const scope = slide.dataset.facultyScope;
    if (!facultyStats.has(scope)) facultyStats.set(scope, facultyChartSchools(scope));
    const schools = facultyStats.get(scope);
    const directory = facultyDirectoryPages[scope];
    if (slide.classList.contains('home-faculty-slide')) {
      renderFacultyPlot(slide, schools, directory);
    } else {
      renderFacultyUnits(slide, schools, directory);
    }
  }

  function showChart(nextIndex, focusTarget = next) {
    if (nextIndex === active) return;
    const oldSlide = slides[active];
    const newSlide = slides[nextIndex];
    if (oldSlide.contains(document.activeElement)) focusTarget.focus();
    oldSlide.hidden = true;
    newSlide.hidden = false;
    if (!initialized.has(nextIndex)) {
      initSlide(newSlide);
      initialized.add(nextIndex);
    }
    active = nextIndex;
    get('chart-position').textContent = `${number(active + 1)} / ${number(slides.length)}`;
    get('chart-announcement').textContent = `第 ${active + 1} 张，共 ${slides.length} 张：${newSlide.querySelector('h2').textContent}`;
  }

  function moveChart(direction) {
    showChart((active + direction + slides.length) % slides.length, direction < 0 ? prev : next);
  }

  prev.addEventListener('click', () => moveChart(-1));
  next.addEventListener('click', () => moveChart(1));
  document.addEventListener('keydown', event => {
    if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey ||
      event.target.closest('input, textarea, select, [contenteditable]')) return;
    const direction = event.key === 'ArrowLeft' ? -1 : event.key === 'ArrowRight' ? 1 : 0;
    if (!direction) return;
    event.preventDefault();
    moveChart(direction);
  });
  function showLinkedChart() {
    const index = slides.findIndex(slide => slide.id && location.hash === `#${slide.id}`);
    if (index >= 0) showChart(index);
  }
  addEventListener('hashchange', showLinkedChart);
  showLinkedChart();
}

setupHomeCharts();
