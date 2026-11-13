const schoolList = document.getElementById('school-list');
for (const [name, aliases, group] of survey.schools) {
  const item = document.createElement('li');
  item.textContent = `${name} · ${aliases} · ${group}`;
  schoolList.append(item);
}
