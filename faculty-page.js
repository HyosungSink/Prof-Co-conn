const facultyQuery = get('faculty-query');
const facultySchool = get('faculty-school');
const facultyRoot = get('faculty-rosters');
const snapshot = facultyDirectory.schools;
const countFormat = new Intl.NumberFormat('zh-CN');

function facultySearchKey(value) {
  return value.normalize('NFKD').toLowerCase().replace(/[\p{M}\p{P}\p{Z}]/gu, '');
}

function renderFaculty() {
  const words = facultyQuery.value.trim().split(/\s+/).map(facultySearchKey).filter(Boolean);
  const schools = [];
  let matches = 0;

  for (const [name, english, group] of survey.schools) {
    if (facultySchool.value && facultySchool.value !== name) continue;
    const units = (snapshot[name] || []).map(unit => {
      const context = facultySearchKey([name, english, unit.name].join(' '));
      const matchUnit = words.every(word => context.includes(word));
      const people = unit.people.filter(([person, role, , alias]) => {
        const key = context + facultySearchKey([person, alias || '', role].join(' '));
        return words.every(word => key.includes(word));
      });
      return { unit, matchUnit, people };
    }).filter(({ matchUnit, people }) => matchUnit || people.length);

    if (units.length) {
      matches += units.reduce((sum, { people }) => sum + people.length, 0);
      schools.push({ name, english, group, units });
    }
  }

  const cards = schools.map(({ name, english, group, units }) => {
    const card = element('details', '', 'faculty-school-card');
    card.open = Boolean(facultySchool.value || words.length);
    const summary = element('summary', '', 'faculty-school-head');
    const heading = element('span', '', 'faculty-school-name');
    heading.append(element('strong', name), element('small', english));
    const meta = element('span', '', 'faculty-school-meta');
    const schoolCount = units.reduce((sum, { people }) => sum + people.length, 0);
    meta.append(element('span', `${countFormat.format(schoolCount)} 条`, 'faculty-school-count'), element('span', group, 'faculty-school-group'));
    summary.append(heading, meta);
    const body = element('div', '', 'faculty-school-body');
    card.append(summary, body);
    function fill() {
      if (!card.open || body.childNodes.length) return;
      for (const { unit, people } of units) {
        const section = element('section', '', 'faculty-unit');
        const top = element('div', '', 'faculty-unit-head');
        const label = element('div');
        label.append(element('h2', unit.name), element('p', [
          unit.people.length ? `${countFormat.format(people.length)} ${words.length ? '条匹配' : '条名录记录'}` : '官网入口',
          unit.note
        ].filter(Boolean).join(' · ')));
        top.append(label, source('官方名录 ↗', unit.url));
        section.append(top);
        if (people.length) {
          const list = element('ul', '', 'faculty-people');
          for (const [person, role, profile, alias] of people) {
            const item = element('li');
            item.append(profile ? source(person, profile) : element('strong', person));
            if (alias || role) item.append(element('small', [alias, role].filter(Boolean).join(' · ')));
            list.append(item);
          }
          section.append(list);
        }
        body.append(section);
      }
    }
    fill();
    card.addEventListener('toggle', fill);
    return card;
  });

  facultyRoot.replaceChildren(...(cards.length ? cards : [element('p', '没有找到符合条件的教师或院系。', 'empty')]));
  get('faculty-count').textContent = `${schools.length} 所高校 · ${countFormat.format(matches)} 条${words.length ? '匹配记录' : '名录记录'} · 采集日期 ${facultyDirectory.checked}`;
}

addOptions(facultySchool, survey.schools);
const selectedFacultySchool = new URLSearchParams(location.search).get('school');
if (survey.schools.some(([school]) => school === selectedFacultySchool)) facultySchool.value = selectedFacultySchool;
get('faculty-filters').addEventListener('submit', event => event.preventDefault());
facultyQuery.addEventListener('input', renderFaculty);
facultySchool.addEventListener('change', renderFaculty);
renderFaculty();
