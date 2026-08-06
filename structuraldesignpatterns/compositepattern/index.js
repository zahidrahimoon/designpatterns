// Composite: a single item and a tree of items expose the same getSize().

const file = (name, size) => ({ name, getSize: () => size });

const folder = (name, children = []) => ({
  name,
  getSize: () => children.reduce((total, child) => total + child.getSize(), 0),
});

const root = folder("root", [
  file("a.txt", 10),
  folder("sub", [file("b.txt", 20), file("c.txt", 5)]),
]);

console.log(file("a.txt", 10).getSize()); // 10
console.log(root.getSize()); // 35
