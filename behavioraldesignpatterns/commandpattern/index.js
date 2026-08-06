// Command: an action packaged as an object, so it can be stored, replayed or undone.

const turnOn = (light) => ({
  execute: () => { light.on = true; },
  undo: () => { light.on = false; },
});

const createRemote = () => {
  const history = [];
  return {
    run: (command) => { command.execute(); history.push(command); },
    undo: () => history.pop()?.undo(),
  };
};

const bulb = { on: false };
const remote = createRemote();

remote.run(turnOn(bulb));
console.log(bulb.on); // true
remote.undo();
console.log(bulb.on); // false
