// Mediator: users never hold each other, they all talk through one room.

const createRoom = () => {
  const users = [];
  return {
    join: (user) => users.push(user),
    send: (fromName, message) =>
      users.filter((u) => u.name !== fromName).forEach((u) => u.receive(fromName, message)),
  };
};

const createUser = (name, room) => {
  const user = {
    name,
    receive: (from, message) => console.log(`${name} got from ${from}: ${message}`),
    send: (message) => room.send(name, message),
  };
  room.join(user);
  return user;
};

const room = createRoom();
const ali = createUser("Ali", room);
createUser("Sara", room);
createUser("Zia", room);

ali.send("Hello everyone");
