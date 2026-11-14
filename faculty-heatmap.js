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

function layoutFacultyTiles(groups, width, height, school) {
  const box = { x: 0, y: 0, width, height };
  const ideal = [];
  const categories = [];
  const units = school?.units.filter(unit => unit.entries.length)
    .sort((a, b) => b.entries.length - a.entries.length);
  const place = ({ entries }, rect) => ideal.push({ entries, rect });
  const pack = (parts, area) => layoutWeightedRectangles(parts, area, part => part.entries.length, place);
  if (school) pack(units, box);
  else layoutSchoolGroups(groups, width, height, 0, ({ entries }, area) => {
    categories.push(area);
    pack(entries, area);
  });

  const count = ideal.reduce((sum, { entries }) => sum + entries.length, 0);
  const snap = (rect, columns, rows) => {
    const left = Math.round(rect.x / width * columns);
    const right = Math.round((rect.x + rect.width) / width * columns);
    const top = Math.round(rect.y / height * rows);
    const bottom = Math.round((rect.y + rect.height) / height * rows);
    return { left, top, right, bottom };
  };
  const capacity = ({ left, top, right, bottom }) => (right - left) * (bottom - top);
  let columns = 0, rows = 0;
  let bestCost = Infinity;
  const idealRows = Math.sqrt(count * height / width);
  // Share grid lines across rectangles. Find a grid with near-square tiles,
  // few empty slots, and enough whole cells in every snapped rectangle.
  if (count) for (let scale = 1; !rows; scale *= 2) {
    for (let r = Math.max(1, Math.floor(idealRows * scale / 2)); r <= Math.ceil(idealRows * scale * 2); r += 1) {
      for (let c = Math.max(1, Math.ceil(count / r)); c <= Math.ceil(count / r * scale * 1.4); c += 1) {
        const cost = Math.log((width / c) / (height / r)) ** 2 + 4 * (c * r - count) / count;
        if (cost >= bestCost || ideal.some(({ entries, rect }) => capacity(snap(rect, c, r)) < entries.length)) continue;
        columns = c;
        rows = r;
        bestCost = cost;
      }
    }
  }

  const cellWidth = columns ? width / columns : 0;
  const cellHeight = rows ? height / rows : 0;
  const cells = new Array(columns * rows);
  const tiles = [];
  const positions = new Map();
  const blocks = ideal.map(({ entries, rect }) => {
    const block = snap(rect, columns, rows);
    const w = block.right - block.left;
    const h = block.bottom - block.top;
    const path = facultyGridPath(w, h);
    entries.forEach((entry, index) => {
      const [x, y] = path[index];
      // Reflect the walk so unused cells sit near the bottom-right of the block.
      const col = w >= h ? block.left + x : block.right - 1 - x;
      const row = w >= h ? block.bottom - 1 - y : block.top + y;
      const tile = { entry, x: col * cellWidth, y: row * cellHeight };
      cells[row * columns + col] = entry;
      tiles.push(tile);
      positions.set(entry, tile);
    });
    return block;
  });
  const bands = categories.map(rect => snap(rect, columns, rows));
  return { width, height, columns, rows, cellWidth, cellHeight, cells, tiles, positions, blocks, bands };
}

function renderFacultyUnits() {
  const schoolPicker = get('unit-school');
  const groupPicker = get('unit-group');
  const plot = get('unit-plot');
  const canvas = get('unit-canvas');
  const context = canvas.getContext('2d');
  const description = get('unit-description');
  const readout = get('unit-summary');
  const link = get('unit-directory-link');
  const swatch = get('unit-swatch');
  const legend = [...document.querySelectorAll('.unit-map-key i')];
  const format = new Intl.NumberFormat('zh-CN');
  const colors = new Map(survey.schools.map(([name], index) => [name, facultyVerificationShades(facultySchoolColors[index])]));
  const defaultLegend = facultyVerificationShades('#626b7e');
  const categoryBySchool = new Map(survey.schools.map(([name, , category]) => [name, category]));
  const schools = facultyPlotStats.map(([name, count, , rows]) => ({
    name, count, color: colors.get(name), units: rows.map(([name, rows]) => ({ name, rows }))
  }));
  for (const school of schools) {
    for (const [index, unit] of school.units.entries()) {
      unit.color = facultyVerificationShades(facultyUnitColors[index % facultyUnitColors.length]);
      unit.entries = unit.rows.map(([name, score]) => ({ name, score, school, unit }));
    }
    school.entries = school.units.flatMap(unit => unit.entries);
  }
  const groups = schoolChartGroups.flatMap(([category]) => {
    const entries = schools.filter(school => categoryBySchool.get(school.name) === category && school.count)
      .sort((a, b) => b.count - a.count);
    return entries.length ? [{ entries, weight: entries.reduce((sum, school) => sum + school.count, 0) }] : [];
  });
  const allEntries = groups.flatMap(group => group.entries.flatMap(school => school.entries));
  const unitCount = schools.reduce((sum, school) => sum + school.units.length, 0);
  const instituteSchool = '中国科学院大学';
  addOptions(schoolPicker, survey.schools);
  let selectedSchool = null;
  let selectedUnit = null;
  let inspected = null;
  let currentLayout = null;

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
    link.href = params.size ? `faculty.html?${params}#faculty-rosters` : 'faculty.html';
    link.textContent = inspected ? '查看该教师 ↗' : unit ? '查看该单位名录 ↗' : '查看名录 ↗';
    readout.textContent = inspected
      ? `${inspected.name} · ${school.name} · ${unit.name} · 已核实 ${inspected.score}/3 项`
      : unit ? `${unit.name} · ${format.format(unit.rows.length)} 条记录`
      : school ? `${school.name} · ${school.units.length} 个单位分组 · ${format.format(school.count)} 条记录`
      : `${schools.length} 所高校 · ${unitCount} 个单位分组 · ${format.format(allEntries.length)} 块瓷砖`;
    readout.title = readout.textContent;
  }

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
    const { width, height, cellWidth, cellHeight, tiles, positions, blocks, bands } = currentLayout;
    const gap = Math.min(.8, cellWidth * .15, cellHeight * .15);
    context.clearRect(0, 0, width, height);
    for (const { entry, x, y } of tiles) {
      context.globalAlpha = matchesSelection(entry) ? 1 : .2;
      context.fillStyle = chartColors(entry.school, entry.unit)[entry.score];
      context.fillRect(x + gap / 2, y + gap / 2, cellWidth - gap, cellHeight - gap);
    }
    context.globalAlpha = 1;
    drawBoundaries(blocks, 1.45);
    if (bands.length) drawBoundaries(bands, 2.6);
    const marked = positions.get(inspected);
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
    currentLayout = layoutFacultyTiles(groups, width, height, selectedSchool);
    paint();
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
      ? `每条记录一格，每个${unitType}一种颜色。同一分区内颜色越深，已核实项数越多。`
      : '每条记录一格，每校一种颜色。选择高校可展开院系或研究所；同一分区内颜色越深，已核实项数越多。';
    const scope = selectedSchool
      ? `${selectedSchool.name}教师热力图，每条记录一格，每个${unitType}一种颜色。`
      : '全部高校教师热力图，每条记录一格，每所学校一种颜色。';
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
    const entries = selectedUnit?.entries || selectedSchool?.entries || allEntries;
    const index = entries.indexOf(inspected);
    const direction = event.key === 'ArrowDown' ? 1 : -1;
    if (entries.length) inspect(entries[index < 0 ? 0 : (index + direction + entries.length) % entries.length]);
  });
  updateReadout();
  new ResizeObserver(resize).observe(plot);
  resize();
}
