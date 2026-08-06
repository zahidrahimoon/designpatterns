// Prototype: build a new object by copying an existing one.

const createDocument = (title, tags) => ({
  title,
  tags,
  clone: (changes = {}) => createDocument(changes.title ?? title, [...tags]),
});

const original = createDocument("Report", ["work"]);
const copy = original.clone({ title: "Report (copy)" });
copy.tags.push("draft");

console.log(original.title, original.tags); // Report [ 'work' ]
console.log(copy.title, copy.tags); // Report (copy) [ 'work', 'draft' ]
