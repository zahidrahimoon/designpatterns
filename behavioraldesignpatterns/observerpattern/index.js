// Observer: every subscriber is notified when the channel publishes.

const createChannel = () => {
  let subscribers = [];
  return {
    subscribe: (fn) => {
      subscribers.push(fn);
      return () => { subscribers = subscribers.filter((s) => s !== fn); };
    },
    publish: (video) => subscribers.forEach((fn) => fn(video)),
  };
};

const channel = createChannel();
const unsubscribeAli = channel.subscribe((video) => console.log("Ali watched " + video));
channel.subscribe((video) => console.log("Sara watched " + video));

channel.publish("Episode 1");
unsubscribeAli();
channel.publish("Episode 2");
