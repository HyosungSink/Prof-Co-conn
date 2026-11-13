function facultyBibliographyFor({ name, profile, bibliography }, school, department) {
  return bibliography || facultyBibliography.records[school]?.[department]?.[JSON.stringify([name, profile])] || [];
}

function buildFacultyCatalog() {
  const snapshot = mergeFacultyRosters(facultyDirectory.schools);
  snapshot[ucasSchool] = groupUcasFaculty(snapshot[ucasSchool], facultyBibliographyFor);
  return snapshot;
}

function summarizeFaculty(snapshot) {
  return survey.schools.map(([name]) => {
    let count = 0;
    let complete = 0;
    for (const department of snapshot[name] || []) {
      count += department.people.length;
      for (const person of department.people) {
        const [scholar, paper] = facultyBibliographyFor(person, name, department.name);
        if (person.titles.length && scholar && paper) complete += 1;
      }
    }
    return { name, count, complete };
  }).sort((a, b) => b.count - a.count);
}
