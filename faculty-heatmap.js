const facultySchoolColors = [
  '#6842ad', '#dc5f4b', '#338fc0', '#4da16c', '#cf8a2a', '#a34b8f', '#44a69c',
  '#adbd52', '#4f68b8', '#d183ab', '#887454', '#65b5d1', '#637a36', '#e7ad42',
  '#9771c0', '#c34355', '#207f88', '#ee926b', '#5262a2', '#a05876', '#25693c',
  '#975a35', '#8c9fd7', '#b26156', '#1873a2', '#d2b85f'
];

// Mix toward white or black without changing the school's hue.
function facultySchoolShades(color) {
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

// Walk a rectangular grid in a space-filling order. Consecutive records stay
// close together so schools and units form compact areas in one shared grid.
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

function renderFacultyUnits() {
  const schoolPicker = get('unit-school');
  const groupPicker = get('unit-group');
  const plot = get('unit-plot');
  const canvas = get('unit-canvas');
  const context = canvas.getContext('2d');
  const readout = get('unit-summary');
  const link = get('unit-directory-link');
  const swatch = get('unit-school-swatch');
  const legend = [...document.querySelectorAll('.unit-map-key i')];
  const format = new Intl.NumberFormat('zh-CN');
  const colors = new Map(survey.schools.map(([name], index) => [name, facultySchoolShades(facultySchoolColors[index])]));
  const schools = facultyPlotStats.map(([name, count, , rows]) => ({
    name, count, color: colors.get(name), units: rows.map(([name, rows]) => ({ name, rows }))
  }));
  for (const school of schools) {
    for (const unit of school.units) {
      unit.entries = unit.rows.map(([name, score]) => ({ name, score, school, unit }));
    }
  }
  const allEntries = schools.flatMap(school => school.units.flatMap(unit => unit.entries));
  const unitCount = schools.reduce((sum, school) => sum + school.units.length, 0);
  const instituteSchool = '中国科学院大学';
  addOptions(schoolPicker, survey.schools);
  let selectedSchool = null;
  let selectedUnit = null;
  let inspected = null;
  let currentLayout = null;

  function matchesSelection(entry) {
    return (!selectedSchool || entry.school === selectedSchool) && (!selectedUnit || entry.unit === selectedUnit);
  }

  function updateReadout() {
    const school = inspected?.school || selectedSchool;
    const unit = inspected?.unit || selectedUnit;
    const params = new URLSearchParams();
    swatch.hidden = !school;
    swatch.style.background = school?.color[inspected?.score ?? 2] || '';
    const legendColors = school?.color || colors.values().next().value;
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

  function calculateLayout(width, height) {
    const columns = Math.ceil(Math.sqrt(allEntries.length * width / height));
    const rows = Math.ceil(allEntries.length / columns);
    const step = Math.min(width / columns, height / rows);
    const insetX = Math.max(0, (width - columns * step) / 2);
    const insetY = Math.max(0, (height - rows * step) / 2);
    const positions = new Map();
    const byCell = new Map();
    const tiles = facultyGridPath(columns, rows).slice(0, allEntries.length).map(([column, row], index) => {
      const entry = allEntries[index];
      const tile = { entry, x: insetX + column * step, y: insetY + row * step };
      positions.set(entry, tile);
      byCell.set(row * columns + column, tile);
      return tile;
    });
    return { width, height, columns, insetX, insetY, step, tiles, positions, byCell };
  }

  function paint() {
    if (!currentLayout) return;
    const { width, height, tiles, step, positions } = currentLayout;
    context.clearRect(0, 0, width, height);
    const size = step - Math.min(.95, step * .16);
    for (const { entry, x, y } of tiles) {
      context.globalAlpha = matchesSelection(entry) ? 1 : .2;
      context.fillStyle = entry.school.color[entry.score];
      context.fillRect(x, y, size, size);
    }
    context.globalAlpha = 1;
    const marked = positions.get(inspected);
    if (marked) {
      context.strokeStyle = '#251c32';
      context.strokeRect(marked.x - 1.25, marked.y - 1.25, size + 2.5, size + 2.5);
    }
  }

  function resize() {
    const { width, height } = plot.getBoundingClientRect();
    if (!width || !height) return;
    const density = Math.max(2, window.devicePixelRatio);
    canvas.width = Math.ceil(width * density);
    canvas.height = Math.ceil(height * density);
    context.setTransform(density, 0, 0, density, 0, 0);
    currentLayout = calculateLayout(width, height);
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
    updateReadout();
    paint();
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
    const { step, tiles, columns, insetX, insetY, byCell } = currentLayout;
    const column = Math.floor((x - insetX) / step);
    const row = Math.floor((y - insetY) / step);
    let tile = column < 0 || column >= columns ? null : byCell.get(row * columns + column);
    if (step < 4) {
      // A touch can round to the next pixel. Prefer a nearby highlighted entry.
      let nearest = Math.max(2, step);
      for (const candidate of tiles) {
        if (!matchesSelection(candidate)) continue;
        const offset = Math.hypot(x - candidate.x - step / 2, y - candidate.y - step / 2);
        if (offset < nearest) {
          nearest = offset;
          tile = candidate;
        }
      }
    }
    if (tile) inspect(tile.entry);
  }

  canvas.addEventListener('click', inspectTile);
  canvas.addEventListener('keydown', event => {
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
    event.preventDefault();
    const entries = allEntries.filter(matchesSelection);
    const index = entries.indexOf(inspected);
    const direction = event.key === 'ArrowDown' ? 1 : -1;
    if (entries.length) inspect(entries[index < 0 ? 0 : (index + direction + entries.length) % entries.length]);
  });
  updateReadout();
  new ResizeObserver(resize).observe(plot);
  resize();
}
