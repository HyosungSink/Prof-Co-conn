function renderFacultyPlot(schools, createControl) {
  const countFormat = new Intl.NumberFormat('zh-CN');
  const percentFormat = new Intl.NumberFormat('zh-CN', { style: 'percent', maximumFractionDigits: 1 });
  const recordsPerDot = 25;
  const controls = [];
  let allCount = 0;
  let allComplete = 0;
  const share = (part, total) => total ? percentFormat.format(part / total) : '—';
  const describe = (label, part, total) => `${label} ${countFormat.format(part)} 条（${share(part, total)}）`;
  for (const { name, count, complete } of schools) {
    allCount += count;
    allComplete += complete;
    const control = createControl(name);
    control.className = 'plot-cell faculty-plot-cell';
    const description = `${name}，共 ${countFormat.format(count)} 条，${describe('三项齐全', complete, count)}，${describe('非三项齐全', count - complete, count)}`;
    control.setAttribute('aria-label', description);
    control.title = description;
    const dots = element('span', '', 'dots');
    dots.setAttribute('aria-hidden', 'true');
    for (let start = 0; start < count; start += recordsPerDot) {
      const filled = Math.min(count - start, recordsPerDot);
      const purple = Math.max(0, Math.min(complete - start, filled));
      const dot = element('i', '', 'dot');
      if (filled === recordsPerDot && purple === 0) {
        dot.classList.add('candidate');
      } else if (filled < recordsPerDot || purple < filled) {
        dot.classList.add('faculty-dot-split');
        dot.style.setProperty('--dot-complete', `${purple * 100 / recordsPerDot}%`);
        dot.style.setProperty('--dot-fill', `${filled * 100 / recordsPerDot}%`);
      }
      dots.append(dot);
    }
    const bar = element('span', '', 'faculty-plot-bar');
    bar.setAttribute('aria-hidden', 'true');
    bar.style.setProperty('--bar-width', (schools[0].count ? count / schools[0].count : 0) * 100 + '%');
    bar.style.setProperty('--bar-complete', (count ? complete / count : 0) * 100 + '%');
    const stats = element('span', '', 'faculty-plot-stats');
    const shares = element('small', '', 'faculty-plot-share');
    shares.append(element('span', share(complete, count)), ' / ', element('span', share(count - complete, count)));
    stats.append(
      element('strong', countFormat.format(count), 'faculty-plot-count'),
      shares
    );
    control.append(element('span', name, 'plot-label'), dots, bar, stats);
    controls.push(control);
  }
  get('faculty-plot-complete').textContent = describe('三项齐全', allComplete, allCount);
  get('faculty-plot-incomplete').textContent = describe('非三项齐全', allCount - allComplete, allCount);
  get('faculty-plot-scale').textContent = `1 个满圆 = ${recordsPerDot} 条名录记录`;
  get('faculty-plot').replaceChildren(...controls);
}

