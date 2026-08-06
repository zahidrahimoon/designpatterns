// Builder: add one part at a time, then build() returns the finished object.

const burgerBuilder = (parts = []) => ({
  addPatty: () => burgerBuilder([...parts, "patty"]),
  addCheese: () => burgerBuilder([...parts, "cheese"]),
  addSauce: () => burgerBuilder([...parts, "sauce"]),
  build: () => ({ name: "Burger", parts }),
});

console.log(burgerBuilder().addPatty().addCheese().addSauce().build());
// { name: 'Burger', parts: [ 'patty', 'cheese', 'sauce' ] }

console.log(burgerBuilder().addPatty().build());
// { name: 'Burger', parts: [ 'patty' ] }
