const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

// Rebuild the audit queue from the current roster and the published decisions.
const root = path.resolve(__dirname, '..');
const context = vm.createContext({ URL });
for (const asset of [
  'data', 'faculty-data', 'faculty-titles', 'faculty-rosters',
  'faculty-bibliography', 'faculty-ucas-institutes', 'faculty-catalog',
  'faculty-title-values', 'faculty-paper-audit-data', 'faculty-paper-audit',
]) {
  const filename = asset + '.js';
  vm.runInContext(fs.readFileSync(path.join(root, filename), 'utf8'), context, { filename });
}

const queue = vm.runInContext(`(() => {
  const teachers = new Map();
  let rosterRows = 0;
  for (const [school, units] of Object.entries(buildFacultyCatalog())) {
    for (const { name: unit, people } of units) {
      for (const person of people) {
        const progress = facultyPaperAuditFor(person, school, unit);
        if (!progress) continue;
        rosterRows++;
        const [[scholarId, scholarSource]] = facultyBibliographyFor(person, school, unit);
        if (teachers.has(scholarId)) {
          teachers.get(scholarId).appointments.push({ school, unit, name: person.name, profile: person.profile });
          continue;
        }
        teachers.set(scholarId, {
          scholarId, scholarSource, state: progress.state,
          appointments: [{ school, unit, name: person.name, profile: person.profile }],
          sources: progress.audit?.sources ?? [],
          papers: progress.audit?.papers ?? [],
        });
      }
    }
  }
  return { from: survey.from, through: survey.through, rosterRows, teachers: [...teachers.values()] };
})()`, context);

const args = process.argv.slice(2);
const states = ['unstarted', 'partial', 'complete'];
if (args.length > 1 || (args[0] && !['--summary', ...states.map(state => '--' + state)].includes(args[0]))) {
  process.stderr.write('Usage: node scripts/faculty_paper_audit_queue.cjs [--summary|--unstarted|--partial|--complete]\n');
  process.exit(1);
}

const { teachers, ...info } = queue;
function summarize(people) {
  return {
    teachers: people.length,
    ...Object.fromEntries(states.map(state => [state, people.filter(p => p.state === state).length])),
    papersReviewed: people.reduce((total, person) => total + person.papers.length, 0),
  };
}

let output;
if (!args[0] || args[0] === '--summary') {
  const schoolNames = new Set(teachers.flatMap(p => p.appointments.map(a => a.school)));
  const schools = Object.fromEntries([...schoolNames].map(school => [
    school, summarize(teachers.filter(p => p.appointments.some(a => a.school === school))),
  ]));
  output = { ...info, ...summarize(teachers), schools };
} else {
  output = { from: info.from, through: info.through, teachers: teachers.filter(p => p.state === args[0].slice(2)) };
}
process.stdout.write(JSON.stringify(output, null, 2) + '\n');
