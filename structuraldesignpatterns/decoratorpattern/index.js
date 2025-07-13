// ☕ Base Component
function createCoffee() {
    return {
      cost: () => 5,
      description: () => "Plain coffee"
    }
  }
  
  // 🥛 Decorator: Add milk
  function withMilk(coffee) {
    return {
      cost: () => coffee.cost() + 2,
      description: () => coffee.description() + ", milk"
    }
  }
  
  // 🍬 Decorator: Add sugar
  function withSugar(coffee) {
    return {
      cost: () => coffee.cost() + 1,
      description: () => coffee.description() + ", sugar"
    }
  }
  
  // 🧊 Decorator: Add ice
  function withIce(coffee) {
    return {
      cost: () => coffee.cost() + 1.5,
      description: () => coffee.description() + ", ice"
    }
  }
  
  // ✅ Use decorators to build your custom drink
  let myCoffee = createCoffee()
  myCoffee = withMilk(myCoffee)
  myCoffee = withSugar(myCoffee)
  myCoffee = withIce(myCoffee)
  
  console.log(myCoffee.description()) // "Plain coffee, milk, sugar, ice"
  console.log("Total cost: $" + myCoffee.cost()) // "Total cost: $9.5"
  