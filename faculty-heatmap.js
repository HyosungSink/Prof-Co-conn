const facultyHeatColors = ['#e5deee', '#c2abdf', '#8862ba', '#4e2c7e'];

function renderFacultyUnits() {
  const schoolPicker = get('unit-school');
  const groupPicker = get('unit-group');
  const plot = get('unit-plot');
  const canvas = get('unit-canvas');
  const context = canvas.getContext('2d');
  const readout = get('unit-summary');
  const link = get('unit-directory-link');
  const format = new Intl.NumberFormat('zh-CN');
  const schools = facultyPlotStats.map(([name, count, , rows]) => ({
    name, count, units: rows.map(([name, rows]) => ({ name, rows }))
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
  let inspectedUnit = null;
  let inspected = null;
  let currentLayout = null;

  function matchesSelection(entry) {
    return (!selectedSchool || entry.school === selectedSchool) && (!selectedUnit || entry.unit === selectedUnit);
  }

  function updateReadout() {
    const school = inspected?.school || inspectedUnit?.school || selectedSchool;
    const unit = inspected?.unit || inspectedUnit?.unit || selectedUnit;
    const params = new URLSearchParams();
    if (school) params.set('school', school.name);
    if (unit) params.set(school.name === instituteSchool ? 'institute' : 'department', unit.name);
    if (inspected) params.set('q', inspected.name);
    link.href = params.size ? `faculty.html?${params}#faculty-rosters` : 'faculty.html';
    link.textContent = inspected ? '查看该教师 ↗' : unit ? '查看该单位名录 ↗' : '查看名录 ↗';
    readout.textContent = inspected
      ? `${inspected.name} · ${unit.name} · 已核实 ${inspected.score}/3 项`
      : unit ? `${unit.name} · ${format.format(unit.rows.length)} 条记录`
      : school ? `${school.name} · ${school.units.length} 个单位分组 · ${format.format(school.count)} 条记录`
      : `${schools.length} 所高校 · ${unitCount} 个单位分组 · ${format.format(allEntries.length)} 块瓷砖`;
    readout.title = readout.textContent;
  }

  function calculateLayout(width, height) {
    const laneCount = width >= 1050 ? 4 : width >= 535 ? 3 : 2;
    const laneGap = width >= 710 ? 10 : 5;
    const pad = width >= 710 ? 5 : 3;
    const laneWidth = Math.floor((width - laneGap * (laneCount - 1)) / laneCount);
    const ordered = [...schools].sort((a, b) => b.count - a.count);
    const header = height >= 440 ? 17 : height >= 280 ? 13 : 10;
    const separation = height >= 440 ? 5 : 3;
    // Use the same tile size for every school. Include gutters between units, even
    // when two units fit on the same row, so the map preserves unit boundaries.
    function arrange(step, schoolOrder, assignLane) {
      const cols = Math.max(1, Math.floor((laneWidth - 2 * pad) / step));
      const lengths = Array(laneCount).fill(0);
      const items = [];
      for (const school of schoolOrder) {
        const lane = assignLane(school, lengths);
        const slots = school.units.reduce((total, unit) => total + Math.max(1, unit.entries.length) + 2, 0);
        const rows = Math.ceil(Math.max(0, slots - 2) / cols);
        const size = header + rows * step + pad;
        items.push({ school, rows, lane, x: lane * (laneWidth + laneGap), y: lengths[lane], size });
        lengths[lane] += size + separation;
      }
      return { items, cols, step, maxHeight: Math.max(...lengths) - separation };
    }

    let plan;
    for (let step = 9; step >= .75; step -= .25) {
      plan = arrange(step, ordered, (_, lengths) => lengths.indexOf(Math.min(...lengths)));
      if (plan.maxHeight <= height) break;
    }
    const lanes = new Map(plan.items.map(item => [item.school, item.lane]));
    plan = arrange(plan.step, schools, school => lanes.get(school));
    const tiles = [];
    const groups = [];
    const schoolBorders = [];
    const entryPositions = new Map();
    for (const { school, x, y, size } of plan.items) {
      schoolBorders.push({ school, x, y, width: laneWidth, height: size });
      let slot = 0;
      for (const [index, unit] of school.units.entries()) {
        const start = slot;
        const entries = unit.entries.length ? unit.entries : [null];
        for (const entry of entries) {
          const tile = {
            entry, school, unit, x: x + pad + (slot % plan.cols) * plan.step,
            y: y + header + Math.floor(slot / plan.cols) * plan.step
          };
          tiles.push(tile);
          if (entry) entryPositions.set(entry, tile);
          slot += 1;
        }
        for (let i = start; i < slot;) {
          const length = Math.min(slot - i, plan.cols - i % plan.cols);
          groups.push({ index, unit, x: x + pad + i % plan.cols * plan.step,
            y: y + header + Math.floor(i / plan.cols) * plan.step, width: length * plan.step });
          i += length;
        }
        slot += 2;
      }
    }
    return { tiles, groups, schoolBorders, entryPositions, step: plan.step, width, height };
  }

  function paint() {
    if (!currentLayout) return;
    const { width, height, schoolBorders, groups, tiles, step, entryPositions } = currentLayout;
    context.clearRect(0, 0, width, height);
    context.font = `600 ${height >= 440 ? 10 : height >= 280 ? 9 : 8}px system-ui`;
    context.textBaseline = 'top';
    for (const area of schoolBorders) {
      const active = !selectedSchool || selectedSchool === area.school;
      context.fillStyle = active ? '#f8f5fb' : '#f8f7fa';
      context.fillRect(area.x, area.y, area.width, area.height);
      context.strokeStyle = active && selectedSchool ? '#8964b1' : '#e9e0f0';
      context.strokeRect(area.x + .5, area.y + .5, area.width - 1, area.height - 1);
      context.fillStyle = active ? '#493464' : '#7a7284';
      context.fillText(area.school.name, area.x + 3, area.y + 1, area.width - 6);
    }
    const size = step - (step >= 4 ? 1 : step >= 2 ? .65 : .24);
    for (const group of groups) {
      const active = group.unit === selectedUnit;
      if (!active && group.index % 2 === 0) continue;
      context.fillStyle = active ? '#cebae5' : '#efe8f6';
      context.fillRect(group.x - .4, group.y - .4, group.width, step);
    }
    for (const tile of tiles) {
      context.globalAlpha = matchesSelection(tile) ? 1 : .32;
      if (tile.entry) {
        context.fillStyle = facultyHeatColors[tile.entry.score];
        context.fillRect(tile.x, tile.y, size, size);
      } else {
        context.strokeStyle = '#a798b3';
        context.strokeRect(tile.x, tile.y, size, size);
      }
    }
    context.globalAlpha = 1;
    const marked = entryPositions.get(inspected);
    if (marked) {
      context.strokeStyle = '#a55d00';
      context.lineWidth = 1;
      context.strokeRect(marked.x - 1.5, marked.y - 1.5, size + 3, size + 3);
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
    if (entry === inspected && !inspectedUnit) return;
    inspectedUnit = null;
    inspected = entry;
    updateReadout();
    paint();
  }

  schoolPicker.addEventListener('change', () => {
    selectedSchool = schools.find(school => school.name === schoolPicker.value) || null;
    selectedUnit = null;
    inspected = null;
    inspectedUnit = null;
    groupPicker.replaceChildren(new Option(selectedSchool?.name === instituteSchool ? '全部研究所' : '全部院系／研究所', ''));
    if (selectedSchool) for (const unit of selectedSchool.units) groupPicker.add(new Option(unit.name, unit.name));
    groupPicker.disabled = !selectedSchool;
    updateReadout();
    paint();
  });
  groupPicker.addEventListener('change', () => {
    selectedUnit = selectedSchool?.units.find(unit => unit.name === groupPicker.value) || null;
    inspected = null;
    inspectedUnit = null;
    updateReadout();
    paint();
  });
  function inspectTile(event) {
    if (!currentLayout) return;
    const bounds = canvas.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const { step, tiles } = currentLayout;
    const distance = tile => Math.hypot(x - tile.x - step / 2, y - tile.y - step / 2);
    let tile = tiles.find(tile => x >= tile.x && x < tile.x + step && y >= tile.y && y < tile.y + step);
    if (step < 4) {
      // Touch and some browsers report whole-pixel coordinates even when tiles are smaller.
      let nearest = Math.max(2, step);
      for (const candidate of tiles) {
        if (!matchesSelection(candidate)) continue;
        const offset = distance(candidate);
        if (offset < nearest) {
          nearest = offset;
          tile = candidate;
        }
      }
    }
    if (!tile) return;
    if (tile.entry) inspect(tile.entry);
    else if (inspectedUnit?.unit !== tile.unit) {
      inspected = null;
      inspectedUnit = tile;
      updateReadout();
      paint();
    }
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
