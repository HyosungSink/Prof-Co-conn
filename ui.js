const get = (id) => document.getElementById(id);

function element(tag, content, className) {
  const result = document.createElement(tag);
  if (content) result.textContent = content;
  if (className) result.className = className;
  return result;
}

function source(label, url) {
  const link = element('a', label);
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  return link;
}

function addOptions(input, entries) {
  for (const [name] of entries) input.add(new Option(name, name));
}
