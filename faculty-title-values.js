// Match the most specific title first ("副教授" must not also match "教授").
const facultyTitleOptions = [
  ['教授', 'Professor'],
  ['副教授', 'Associate Professor'],
  ['助理教授', 'Assistant Professor'],
  ['高级讲师', 'Senior Lecturer'],
  ['讲师', 'Lecturer'],
  ['助理讲师', 'Assistant Lecturer'],
  ['助教'],
  ['Instructor'],
  ['Teaching Fellow'],
  ['研究员'],
  ['副研究员'],
  ['助理研究员'],
  ['研究实习员'],
  ['Research Fellow'],
  ['正高级工程师', '教授级高工'],
  ['高级工程师'],
  ['工程师', 'Engineer'],
  ['助理工程师'],
  ['正高级实验师'],
  ['高级实验师'],
  ['实验师'],
  ['研究馆员'],
  ['馆员'],
  ['主任医师'],
  ['副主任医师'],
];
const facultyTitleAliases = new Map(facultyTitleOptions.flatMap(([name, ...aliases]) =>
  [name, ...aliases].map(alias => [alias.toLowerCase(), name])));
const facultyTitleMatcher = new RegExp([...facultyTitleAliases.keys()].sort((a, b) => b.length - a.length)
  .map(alias => /^[a-z]/.test(alias) ? `\\b${alias}s?\\b` : alias).join('|'), 'gi');
const facetTitles = new WeakMap();

function facultyTitleValues(person) {
  if (facetTitles.has(person)) return facetTitles.get(person);
  const values = new Set();
  if (person.titles.length) {
    for (const { label } of person.titles) {
      const matches = label.replace(/\s+/g, ' ').match(facultyTitleMatcher);
      for (const match of matches || []) {
        const key = match.toLowerCase();
        values.add(facultyTitleAliases.get(key) || facultyTitleAliases.get(key.slice(0, -1)));
      }
      if (!matches) values.add(label);
    }
  } else {
    for (const { label } of person.tiers) values.add(label);
    if (!values.size) values.add('待核实');
  }
  facetTitles.set(person, values);
  return values;
}

const facultyTitleLevels = ['正高级', '副高级', '中级', '初级', '初中级'];
