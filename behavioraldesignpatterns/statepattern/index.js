// State: behaviour follows the current state, the transitions live in one place.

const transitions = { red: "green", green: "yellow", yellow: "red" };
const actions = { red: "stop", green: "go", yellow: "slow down" };

const trafficLight = (state = "red") => ({
  current: () => state,
  act: () => actions[state],
  change: () => trafficLight(transitions[state]),
});

let light = trafficLight();
console.log(light.current(), light.act()); // red stop

light = light.change();
console.log(light.current(), light.act()); // green go

light = light.change();
console.log(light.current(), light.act()); // yellow slow down
