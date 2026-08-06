// Flyweight: share one copy of the repeated data instead of storing it per object.

const treeTypes = new Map();

const getTreeType = (name, color) => {
  const key = name + "-" + color;
  if (!treeTypes.has(key)) treeTypes.set(key, { name, color });
  return treeTypes.get(key);
};

const tree = (x, y, type) => ({ x, y, type });

const forest = [
  tree(1, 1, getTreeType("Oak", "green")),
  tree(5, 3, getTreeType("Oak", "green")),
  tree(9, 7, getTreeType("Pine", "dark")),
];

console.log(forest.length, treeTypes.size); // 3 2
console.log(forest[0].type === forest[1].type); // true
