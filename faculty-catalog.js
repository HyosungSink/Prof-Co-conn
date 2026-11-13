function facultyBibliographyFor({ name, profile, bibliography }, school, department) {
  return bibliography || facultyBibliography.records[school]?.[department]?.[JSON.stringify([name, profile])] || [];
}

function buildFacultyCatalog() {
  const snapshot = mergeFacultyRosters(facultyDirectory.schools);
  snapshot[ucasSchool] = groupUcasFaculty(snapshot[ucasSchool], facultyBibliographyFor);
  return snapshot;
}

function facultyVerification(person, school, department) {
  const [scholar, paper] = facultyBibliographyFor(person, school, department);
  return Number(Boolean(person.titles.length)) + Number(Boolean(scholar)) + Number(Boolean(paper));
}

function summarizeFaculty(snapshot) {
  return survey.schools.map(([name]) => {
    const units = (snapshot[name] || []).map(department => {
      let complete = 0;
      for (const person of department.people) {
        if (facultyVerification(person, name, department.name) === 3) complete += 1;
      }
      return { name: department.name, count: department.people.length, complete };
    }).sort((a, b) => b.count - a.count);
    return {
      name,
      count: units.reduce((sum, unit) => sum + unit.count, 0),
      complete: units.reduce((sum, unit) => sum + unit.complete, 0),
      units
    };
  }).sort((a, b) => b.count - a.count);
}
