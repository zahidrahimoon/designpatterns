// Decorator: wrap an object to add behaviour, the original stays untouched.

const coffee = () => ({ cost: 5, describe: "Coffee" });

const withMilk = (drink) => ({ cost: drink.cost + 2, describe: drink.describe + " + Milk" });
const withSugar = (drink) => ({ cost: drink.cost + 1, describe: drink.describe + " + Sugar" });

console.log(coffee()); // { cost: 5, describe: 'Coffee' }
console.log(withSugar(withMilk(coffee()))); // { cost: 8, describe: 'Coffee + Milk + Sugar' }
