// Visitor: add new operations over existing shapes without touching the shapes.

const circle = (r) => ({ type: "circle", r });
const square = (side) => ({ type: "square", side });

const visit = (visitor) => (shape) => visitor[shape.type](shape);

const area = visit({
  circle: (c) => Math.PI * c.r ** 2,
  square: (s) => s.side ** 2,
});

const label = visit({
  circle: (c) => `Circle(r=${c.r})`,
  square: (s) => `Square(side=${s.side})`,
});

const shapes = [circle(1), square(2)];
console.log(shapes.map(label)); // [ 'Circle(r=1)', 'Square(side=2)' ]
console.log(shapes.map((s) => area(s).toFixed(2))); // [ '3.14', '4.00' ]
