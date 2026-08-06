// Factory Method: ask a factory for an object, the caller never picks the concrete type.

const creators = {
  coffee: () => ({ serve: () => "Here is your coffee" }),
  tea: () => ({ serve: () => "Here is your tea" }),
};

const createDrink = (type) => {
  const create = creators[type];
  if (!create) throw new Error("Unknown drink: " + type);
  return create();
};

console.log(createDrink("coffee").serve()); // Here is your coffee
console.log(createDrink("tea").serve()); // Here is your tea
