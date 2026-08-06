// Chain of Responsibility: try each handler in order, the first one that answers wins.

const chain = (...handlers) => (request) => {
  for (const handle of handlers) {
    const result = handle(request);
    if (result) return result;
  }
  return "Nobody handled: " + request.title;
};

const support = chain(
  (req) => (req.level <= 1 ? "Level 1 handled: " + req.title : null),
  (req) => (req.level <= 2 ? "Level 2 handled: " + req.title : null),
  (req) => (req.level <= 3 ? "Manager handled: " + req.title : null)
);

console.log(support({ level: 1, title: "Password reset" }));
console.log(support({ level: 3, title: "Server down" }));
console.log(support({ level: 9, title: "Data loss" }));
