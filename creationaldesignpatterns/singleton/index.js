// Singleton: one instance, shared everywhere. A closure holds it.

const getConfig = (() => {
  let instance;
  return () => {
    if (!instance) {
      const settings = {};
      instance = {
        set: (key, value) => { settings[key] = value; },
        get: (key) => settings[key],
      };
    }
    return instance;
  };
})();

getConfig().set("theme", "dark");
console.log(getConfig().get("theme")); // dark
console.log(getConfig() === getConfig()); // true
