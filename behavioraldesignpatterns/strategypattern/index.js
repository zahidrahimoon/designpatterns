// Strategy: interchangeable algorithms, picked at runtime, same caller.

const strategies = {
  card: (amount) => `Paid ${amount} by card`,
  cash: (amount) => `Paid ${amount} in cash`,
  wallet: (amount) => `Paid ${amount} from wallet`,
};

const checkout = (strategyName) => {
  const pay = strategies[strategyName];
  if (!pay) throw new Error("Unknown payment: " + strategyName);
  return pay;
};

console.log(checkout("card")(100)); // Paid 100 by card
console.log(checkout("wallet")(20)); // Paid 20 from wallet
