// Interpreter: each piece of the grammar is a function that can evaluate itself.

const num = (value) => () => value;
const add = (left, right) => () => left() + right();
const sub = (left, right) => () => left() - right();

const expression = sub(add(num(5), num(3)), num(2)); // (5 + 3) - 2

console.log(expression()); // 6
console.log(add(num(10), expression)()); // 16
