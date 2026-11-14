const facultySchoolColors = [
  '#6842ad', '#dc5f4b', '#338fc0', '#4da16c', '#cf8a2a', '#a34b8f', '#44a69c',
  '#adbd52', '#4f68b8', '#d183ab', '#887454', '#65b5d1', '#637a36', '#e7ad42',
  '#9771c0', '#c34355', '#207f88', '#ee926b', '#5262a2', '#a05876', '#25693c',
  '#975a35', '#8c9fd7', '#b26156', '#1873a2', '#d2b85f'
];

// Use the strongest hue contrasts for the largest units.
const facultyUnitColors = [
  '#327dc0', '#d88a24', '#8452af', '#368752', '#cb526a', '#279599', '#a26d41',
  '#5460ad', '#8e981f', '#bb5941', '#398bb0', '#8a4491', '#557b42', '#dbab35',
  '#535f8c', '#d17598', '#137d6d', '#a05d2f', '#657cc6', '#ae3d4c', '#339a80',
  '#8a779e', '#747537', '#b97426', '#576f99', '#99616f'
];

// Mix toward white or black to show the four verification levels for any base color.
function facultyVerificationShades(color) {
  const channels = color.slice(1).match(/../g).map(channel => parseInt(channel, 16));
  return [.55, .28, 0, -.24].map(lightness => '#' + channels.map(channel => {
    const target = lightness < 0 ? 0 : 255;
    return Math.round(channel + (target - channel) * Math.abs(lightness)).toString(16).padStart(2, '0');
  }).join(''));
}

/* Grid traversal adapted from https://github.com/jakubcerveny/gilbert

BSD 2-Clause License

Copyright (c) 2018, Jakub Červený
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

// Walk a rectangular grid in a space-filling order so related entries stay close.
function facultyGridPath(columns, rows) {
  const cells = [];
  function walk(x, y, ax, ay, bx, by) {
    const width = Math.abs(ax + ay);
    const height = Math.abs(bx + by);
    const da = Math.sign(ax), ea = Math.sign(ay);
    const db = Math.sign(bx), eb = Math.sign(by);
    if (height === 1 || width === 1) {
      for (let i = 0; i < Math.max(width, height); i += 1) {
        cells.push([x, y]);
        x += height === 1 ? da : db;
        y += height === 1 ? ea : eb;
      }
      return;
    }
    let ax2 = Math.floor(ax / 2), ay2 = Math.floor(ay / 2);
    let bx2 = Math.floor(bx / 2), by2 = Math.floor(by / 2);
    if (2 * width > 3 * height) {
      if (Math.abs(ax2 + ay2) % 2 && width > 2) { ax2 += da; ay2 += ea; }
      walk(x, y, ax2, ay2, bx, by);
      walk(x + ax2, y + ay2, ax - ax2, ay - ay2, bx, by);
    } else {
      if (Math.abs(bx2 + by2) % 2 && height > 2) { bx2 += db; by2 += eb; }
      walk(x, y, bx2, by2, ax2, ay2);
      walk(x + bx2, y + by2, ax, ay, bx - bx2, by - by2);
      walk(x + ax - da + bx2 - db, y + ay - ea + by2 - eb, -bx2, -by2, ax2 - ax, ay2 - ay);
    }
  }
  if (columns >= rows) walk(0, 0, columns, 0, 0, rows);
  else walk(0, 0, 0, rows, columns, 0);
  return cells;
}

// The treemap is built from straight cuts. Keep that structure, but let adjacent
// blocks share the rounding error when their dimensions must be whole cells.
function facultyPartitionTree(parts) {
  if (parts.length < 2) return parts[0];
  const count = parts.reduce((sum, part) => sum + part.count, 0);
  const tolerance = 1e-6;
  let best = null;
  for (const [axis, size] of [['x', 'width'], ['y', 'height']]) {
    const ordered = [...parts].sort((a, b) => a.rect[axis] - b.rect[axis]);
    let edge = -Infinity, used = 0;
    for (let i = 1; i < ordered.length; i += 1) {
      const { rect, count: n } = ordered[i - 1];
      edge = Math.max(edge, rect[axis] + rect[size]);
      used += n;
      if (edge > ordered[i].rect[axis] + tolerance) continue;
      const imbalance = Math.abs(count - 2 * used);
      if (!best || imbalance < best.imbalance) best = { axis, ordered, i, imbalance };
    }
  }
  const { axis, ordered, i } = best;
  return {
    count, axis,
    first: facultyPartitionTree(ordered.slice(0, i)),
    second: facultyPartitionTree(ordered.slice(i)),
  };
}

// Fill whole rows or columns first so the unfilled cells form one connected area.
function facultyBlockPath(w, h, count) {
  if (w >= h) {
    const full = Math.floor(count / w), rest = count % w;
    const path = full ? facultyGridPath(w, full) : [];
    for (let x = 0; x < rest; x += 1) path.push([x, full]);
    return path;
  }
  const full = Math.floor(count / h), rest = count % h;
  const path = full ? facultyGridPath(full, h) : [];
  for (let y = 0; y < rest; y += 1) path.push([full, y]);
  return path;
}

function layoutFacultyTiles(groups, width, height, units) {
  const box = { x: 0, y: 0, width, height };
  function pack(parts, area) {
    const leaves = [];
    layoutWeightedRectangles(parts, area, part => part.entries.length, ({ entries, label }, rect) => {
      leaves.push({ entries, label, rect, count: entries.length });
    });
    return facultyPartitionTree(leaves);
  }
  let tree;
  if (units) tree = pack(units.filter(unit => unit.entries.length).sort((a, b) => b.entries.length - a.entries.length), box);
  else {
    const categories = [];
    layoutSchoolGroups(groups, width, height, 0, ({ entries }, rect) => {
      categories.push({ ...pack(entries, rect), rect, band: true });
    });
    tree = facultyPartitionTree(categories);
  }

  const count = tree?.count || 0;
  const cuts = new WeakMap();
  const fit = (node, w, h) => {
    if (w * h < node.count) return false;
    if (!node.axis) return w * h - node.count <= Math.max(w, h);
    if (!cuts.has(node)) cuts.set(node, new Map());
    const cache = cuts.get(node);
    const key = `${w},${h}`;
    if (cache.has(key)) return Boolean(cache.get(key));
    const vertical = node.axis === 'x';
    const span = vertical ? w : h, cross = vertical ? h : w;
    const low = Math.ceil(node.first.count / cross);
    const high = span - Math.ceil(node.second.count / cross);
    const goal = span * node.first.count / node.count;
    // Move the shared edge just far enough for both sides to fit.
    let left = Math.min(Math.floor(goal), high), right = Math.max(Math.floor(goal) + 1, low);
    while (left >= low || right <= high) {
      const cut = left >= low && (right > high || goal - left <= right - goal) ? left-- : right++;
      if (fit(node.first, vertical ? cut : w, vertical ? h : cut) &&
        fit(node.second, vertical ? w - cut : w, vertical ? h : h - cut)) {
        cache.set(key, cut);
        return true;
      }
    }
    cache.set(key, 0);
    return false;
  };
  let columns = 0, rows = 0;
  let bestCost = Infinity;
  const idealRows = Math.sqrt(count * height / width);
  const costOf = (c, r) => Math.log((width / c) / (height / r)) ** 2 + 4 * (c * r - count) / count;
  // Search for near-square cells, keeping each rectangle to at most one spare row or column.
  if (count) for (let r = Math.max(1, Math.floor(idealRows / 2)); r <= Math.ceil(idealRows * 2); r += 1) {
    for (let c = Math.ceil(count / r); c <= Math.ceil(count / r * 1.4); c += 1) {
      const cost = costOf(c, r);
      if (cost >= bestCost || !fit(tree, c, r)) continue;
      columns = c;
      rows = r;
      bestCost = cost;
    }
  }
  if (tree && !rows) {
    // A row of strips always fits if the preferred arrangement is too tight.
    const stripe = (node, axis) => node.axis
      ? { ...node, axis, first: stripe(node.first, axis), second: stripe(node.second, axis) }
      : node;
    const span = (node, cross) => node.axis
      ? span(node.first, cross) + span(node.second, cross)
      : Math.ceil(node.count / cross);
    tree = stripe(tree, width >= height ? 'x' : 'y');
    const vertical = width >= height;
    const idealCross = Math.sqrt(count * Math.min(width, height) / Math.max(width, height));
    for (let cross = Math.max(1, Math.floor(idealCross / 2)); cross <= Math.ceil(idealCross * 2); cross += 1) {
      const length = span(tree, cross);
      const [c, r] = vertical ? [length, cross] : [cross, length];
      const cost = costOf(c, r);
      if (cost >= bestCost) continue;
      columns = c;
      rows = r;
      bestCost = cost;
    }
    fit(tree, columns, rows);
  }

  const cellWidth = columns ? width / columns : 0;
  const cellHeight = rows ? height / rows : 0;
  const cells = new Array(columns * rows);
  const tiles = [];
  const positions = new Map();
  const blocks = [];
  const bands = [];
  function place(node, block) {
    const w = block.right - block.left;
    const h = block.bottom - block.top;
    if (node.band) bands.push(block);
    if (node.axis) {
      const cut = cuts.get(node).get(`${w},${h}`);
      if (node.axis === 'x') {
        place(node.first, { ...block, right: block.left + cut });
        place(node.second, { ...block, left: block.left + cut });
      } else {
        place(node.first, { ...block, bottom: block.top + cut });
        place(node.second, { ...block, top: block.top + cut });
      }
      return;
    }
    // Exempt lecturers contribute to the block's area, but must not interrupt the colored tiles.
    const visible = node.entries.filter(({ score }) => score !== null);
    const path = facultyBlockPath(w, h, visible.length);
    visible.forEach((entry, index) => {
      const [x, y] = path[index];
      const col = block.left + x;
      const row = block.top + y;
      const tile = { entry, x: col * cellWidth, y: row * cellHeight };
      cells[row * columns + col] = entry;
      tiles.push(tile);
      positions.set(entry, tile);
    });
    blocks.push({ ...block, label: node.label });
  }
  if (tree) place(tree, { left: 0, top: 0, right: columns, bottom: rows });
  return { width, height, columns, rows, cellWidth, cellHeight, cells, tiles, positions, blocks, bands };
}

function attachFacultyHeatmap(field, { layoutAt, colorsFor, matchesSelection, inspect, getInspected, keyboardEntries }) {
  const plot = field('plot');
  const canvas = field('canvas');
  const context = canvas.getContext('2d');
  const emptyColor = getComputedStyle(field('empty-chip')).backgroundColor;
  let currentLayout = null;

  function drawBoundaries(blocks, weight) {
    const { cellWidth, cellHeight } = currentLayout;
    context.beginPath();
    for (const { left, top, right, bottom } of blocks) {
      context.rect(left * cellWidth, top * cellHeight, (right - left) * cellWidth, (bottom - top) * cellHeight);
    }
    context.strokeStyle = '#241d2d';
    context.lineWidth = Math.min(weight, cellWidth * .35, cellHeight * .35);
    context.stroke();
  }

  function paint() {
    if (!currentLayout) return;
    const { width, height, columns, cells, cellWidth, cellHeight, tiles, positions, blocks, bands } = currentLayout;
    const gap = Math.min(.8, cellWidth * .15, cellHeight * .15);
    context.clearRect(0, 0, width, height);
    context.fillStyle = emptyColor;
    for (let i = 0; i < cells.length; i += 1) {
      if (cells[i]) continue;
      const x = i % columns * cellWidth;
      const y = Math.floor(i / columns) * cellHeight;
      context.fillRect(x + gap / 2, y + gap / 2, cellWidth - gap, cellHeight - gap);
    }
    for (const { entry, x, y } of tiles) {
      context.globalAlpha = matchesSelection(entry) ? 1 : .2;
      context.fillStyle = colorsFor(entry)[entry.score];
      context.fillRect(x + gap / 2, y + gap / 2, cellWidth - gap, cellHeight - gap);
    }
    context.globalAlpha = 1;
    drawBoundaries(blocks, 1.45);
    if (bands.length) drawBoundaries(bands, 2.6);
    context.font = '600 12px system-ui, sans-serif';
    context.textBaseline = 'middle';
    for (const { label, left, right, top, bottom } of blocks) {
      if (!label) continue;
      const textWidth = Math.ceil(context.measureText(label).width);
      if ((right - left) * cellWidth < textWidth + 22 || (bottom - top) * cellHeight < 28) continue;
      const x = left * cellWidth + 5, y = top * cellHeight + 5;
      context.fillStyle = 'rgba(255, 255, 255, .94)';
      context.fillRect(x, y, textWidth + 12, 18);
      context.fillStyle = '#241d2d';
      context.fillText(label, x + 6, y + 9);
    }
    const marked = positions.get(getInspected());
    if (marked) {
      context.strokeStyle = '#251c32';
      context.lineWidth = 1;
      context.strokeRect(marked.x + .5, marked.y + .5, Math.max(0, cellWidth - 1), Math.max(0, cellHeight - 1));
    }
  }

  function resize() {
    const { width, height } = plot.getBoundingClientRect();
    if (!width || !height) return;
    const density = Math.max(2, window.devicePixelRatio);
    canvas.width = Math.ceil(width * density);
    canvas.height = Math.ceil(height * density);
    context.setTransform(canvas.width / width, 0, 0, canvas.height / height, 0, 0);
    currentLayout = layoutAt(width, height);
    paint();
  }

  function inspectTile(event) {
    if (!currentLayout) return;
    const bounds = canvas.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const { width, height, columns, cellWidth, cellHeight, cells } = currentLayout;
    if (!columns || x < 0 || x >= width || y < 0 || y >= height) return;
    const column = Math.floor(x / cellWidth);
    const row = Math.floor(y / cellHeight);
    const entry = cells[row * columns + column];
    if (entry) inspect(entry);
  }

  canvas.addEventListener('click', inspectTile);
  canvas.addEventListener('keydown', event => {
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
    event.preventDefault();
    const entries = keyboardEntries();
    const index = entries.indexOf(getInspected());
    const direction = event.key === 'ArrowDown' ? 1 : -1;
    if (entries.length) inspect(entries[index < 0 ? 0 : (index + direction + entries.length) % entries.length]);
  });
  new ResizeObserver(resize).observe(plot);
  resize();
  return { paint, resize };
}

function renderFacultyUnits(slide, scopeSchools, directory) {
  slide.append(get('faculty-heatmap-template').content.cloneNode(true));
  const field = name => slide.querySelector(`[data-unit-${name}]`);
  const schoolPicker = field('school');
  const groupPicker = field('group');
  const canvas = field('canvas');
  const description = field('description');
  const readout = field('summary');
  const link = field('directory-link');
  const swatch = field('swatch');
  const legend = [...slide.querySelectorAll('[data-verification-level]')];
  const format = new Intl.NumberFormat('zh-CN');
  const colors = new Map(survey.schools.map(([name], index) => [name, facultyVerificationShades(facultySchoolColors[index])]));
  const defaultLegend = facultyVerificationShades('#626b7e');
  const categoryBySchool = new Map(survey.schools.map(([name, , category]) => [name, category]));
  const schools = scopeSchools.map(({ name, count, units }) => ({
    name, count, color: colors.get(name), units: units.map(([name, rows]) => ({ name, rows }))
  }));
  for (const school of schools) {
    for (const [index, unit] of school.units.entries()) {
      unit.color = facultyVerificationShades(facultyUnitColors[index % facultyUnitColors.length]);
      unit.entries = unit.rows.map(([name, score]) => ({ name, score, school, unit }));
      unit.count = unit.entries.filter(({ score }) => score !== null).length;
    }
    school.entries = school.units.flatMap(unit => unit.entries);
    school.unitCount = school.units.filter(unit => unit.count).length;
  }
  const groups = schoolChartGroups.flatMap(([category]) => {
    const entries = schools.filter(school => categoryBySchool.get(school.name) === category && school.entries.length)
      .sort((a, b) => b.entries.length - a.entries.length);
    return entries.length ? [{ entries, weight: entries.reduce((sum, school) => sum + school.entries.length, 0) }] : [];
  });
  const allEntries = schools.flatMap(school => school.entries);
  const schoolCount = schools.filter(school => school.count).length;
  const unitCount = schools.reduce((sum, school) => sum + school.unitCount, 0);
  const recordCount = schools.reduce((sum, school) => sum + school.count, 0);
  const instituteSchool = '中国科学院大学';
  const includedSchools = new Set(schools.map(({ name }) => name));
  addOptions(schoolPicker, survey.schools.filter(([name]) => includedSchools.has(name)));
  let selectedSchool = null;
  let selectedUnit = null;
  let inspected = null;

  function matchesSelection(entry) {
    return !selectedUnit?.entries.length || entry.unit === selectedUnit;
  }

  function chartColors(school, unit) {
    return selectedSchool ? unit?.color : school?.color;
  }

  function updateReadout() {
    const school = inspected?.school || selectedSchool;
    const unit = inspected?.unit || selectedUnit;
    const params = new URLSearchParams();
    const currentColors = chartColors(school, unit);
    swatch.hidden = !currentColors;
    swatch.style.background = currentColors?.[inspected?.score ?? 2] || '';
    const legendColors = currentColors || defaultLegend;
    legend.forEach((chip, score) => { chip.style.background = legendColors[score]; });
    if (school) params.set('school', school.name);
    if (unit) params.set(school.name === instituteSchool ? 'institute' : 'department', unit.name);
    if (inspected) params.set('q', inspected.name);
    link.href = params.size ? `${directory}?${params}#faculty-rosters` : directory;
    link.textContent = inspected ? '查看该教师 ↗' : unit ? '查看该单位名录 ↗' : '查看名录 ↗';
    readout.textContent = inspected
      ? `${inspected.name} · ${school.name} · ${unit.name} · 已核实 ${inspected.score}/3 项`
      : unit ? `${unit.name} · ${format.format(unit.count)} 条纳入核验的记录`
      : school ? `${school.name} · ${school.unitCount} 个单位分组 · ${format.format(school.count)} 条纳入核验的记录`
      : `${schoolCount} 所高校 · ${unitCount} 个单位分组 · ${format.format(recordCount)} 条纳入核验的记录`;
    readout.title = readout.textContent;
  }

  function inspect(entry) {
    if (entry === inspected) return;
    inspected = entry;
    updateReadout();
    paint();
  }

  schoolPicker.addEventListener('change', () => {
    selectedSchool = schools.find(school => school.name === schoolPicker.value) || null;
    selectedUnit = null;
    inspected = null;
    groupPicker.replaceChildren(new Option(selectedSchool?.name === instituteSchool ? '全部研究所' : '全部院系／研究所', ''));
    if (selectedSchool) for (const unit of selectedSchool.units) groupPicker.add(new Option(unit.name, unit.name));
    groupPicker.disabled = !selectedSchool;
    const unitType = selectedSchool?.name === instituteSchool ? '研究所' : '院系';
    description.textContent = selectedSchool
      ? `每个${unitType}一种颜色，颜色越深，已核实项数越多。讲师显示为淡灰空格。`
      : '每校一种颜色，选择高校可展开院系或研究所。颜色越深，已核实项数越多。讲师显示为淡灰空格。';
    const scope = selectedSchool
      ? `${selectedSchool.name}教师热力图，每个${unitType}一种颜色。`
      : '全部高校教师热力图，每所学校一种颜色。';
    canvas.setAttribute('aria-label', `${scope}用上下键查看教师。`);
    updateReadout();
    resize();
  });
  groupPicker.addEventListener('change', () => {
    selectedUnit = selectedSchool?.units.find(unit => unit.name === groupPicker.value) || null;
    inspected = null;
    updateReadout();
    paint();
  });
  const { paint, resize } = attachFacultyHeatmap(field, {
    layoutAt: (width, height) => layoutFacultyTiles(groups, width, height, selectedSchool?.units),
    colorsFor: entry => chartColors(entry.school, entry.unit),
    matchesSelection, inspect,
    getInspected: () => inspected,
    keyboardEntries: () => (selectedUnit?.entries || selectedSchool?.entries || allEntries).filter(({ score }) => score !== null),
  });
  updateReadout();
}

function renderFacultyTitles(slide) {
  slide.append(get('faculty-heatmap-template').content.cloneNode(true));
  const field = name => slide.querySelector(`[data-unit-${name}]`);
  field('school').closest('label').remove();
  const picker = field('group');
  picker.previousElementSibling.textContent = '高亮职称';
  picker.disabled = false;
  picker.options[0].textContent = '全部职称';
  field('canvas').setAttribute('aria-label', '按职称分区的教师热力图。用上下键查看教师。');

  const readout = field('summary');
  const swatch = field('swatch');
  const legend = [...slide.querySelectorAll('[data-verification-level]')];
  const links = document.createElement('span');
  links.className = 'unit-directory-links';
  field('directory-link').replaceWith(links);
  const format = new Intl.NumberFormat('zh-CN');
  const defaultLegend = facultyVerificationShades('#626b7e');
  let colorIndex = 0;
  const groups = facultyPlotTitles.map(name => {
    const label = name === '待核实' ? '职称待核实' : facultyTitleLevels.includes(name) ? `仅知${name}` : name;
    const shades = facultyVerificationShades(name === '待核实' ? '#747982' : facultyUnitColors[colorIndex++ % facultyUnitColors.length]);
    return { name, label, shades, entries: [], scopes: new Set() };
  });
  for (const [school, , , units] of facultyPlotStats) {
    for (const [unit, people] of units) {
      const scope = facultyDirectoryForUnit(school, unit);
      for (const [name, score, title] of people) {
        const group = groups[title];
        group.entries.push({ name, score, school, unit, scope, group });
        if (score !== null) group.scopes.add(scope);
      }
    }
  }
  groups.sort((a, b) => b.entries.length - a.entries.length);
  const countedGroups = groups.filter(group => group.scopes.size);
  for (const group of countedGroups) {
    group.inspectable = group.entries.filter(({ score }) => score !== null).sort((a, b) => b.score - a.score);
    picker.add(new Option(`${group.label}（${format.format(group.inspectable.length)}）`, group.name));
  }
  const allEntries = countedGroups.flatMap(group => group.inspectable);
  const layoutGroups = groups.map(group => group.scopes.size ? group : { entries: group.entries });
  let selected = null;
  let inspected = null;

  function updateReadout() {
    const group = inspected?.group || selected;
    const shades = group?.shades || defaultLegend;
    swatch.hidden = !group;
    swatch.style.background = shades[inspected?.score ?? 2];
    legend.forEach((chip, score) => { chip.style.background = shades[score]; });
    readout.textContent = inspected
      ? `${inspected.name} · ${group.label} · ${inspected.school} · ${inspected.unit} · 已核实 ${inspected.score}/3 项`
      : group ? `${group.label} · ${format.format(group.inspectable.length)} 条记录`
      : `${countedGroups.length} 个职称分组 · ${format.format(allEntries.length)} 条纳入核验的记录`;
    readout.title = readout.textContent;
    const params = new URLSearchParams();
    if (group) params.set('title', group.name);
    if (inspected) {
      params.set('school', inspected.school);
      params.set(inspected.school === '中国科学院大学' ? 'institute' : 'department', inspected.unit);
      params.set('q', inspected.name);
    }
    links.replaceChildren(...[['core', '主要院系名录'], ['related', '交叉院系名录']]
      .filter(([scope]) => inspected ? scope === inspected.scope : !group || group.scopes.has(scope))
      .map(([scope, label]) => {
        const link = element('a', inspected ? '查看该教师 ↗' : `${label} ↗`);
        link.href = facultyDirectoryPages[scope] + (params.size ? `?${params}#faculty-rosters` : '');
        return link;
      }));
  }

  const { paint } = attachFacultyHeatmap(field, {
    layoutAt: (width, height) => layoutFacultyTiles([], width, height, layoutGroups),
    colorsFor: entry => entry.group.shades,
    matchesSelection: entry => !selected || entry.group === selected,
    inspect: entry => {
      if (entry === inspected) return;
      inspected = entry;
      updateReadout();
      paint();
    },
    getInspected: () => inspected,
    keyboardEntries: () => selected?.inspectable || allEntries,
  });
  picker.addEventListener('change', () => {
    selected = countedGroups.find(group => group.name === picker.value) || null;
    inspected = null;
    updateReadout();
    paint();
  });
  updateReadout();
}
