// Proxy: a stand-in with the same shape controls access to the real thing.

const fetchUser = (id) => {
  console.log("hitting the api for " + id);
  return { id, name: "User " + id };
};

const withCache = (fn) => {
  const cache = new Map();
  return (id) => {
    if (!cache.has(id)) cache.set(id, fn(id));
    return cache.get(id);
  };
};

const cachedFetchUser = withCache(fetchUser);
console.log(cachedFetchUser(1)); // hits the api
console.log(cachedFetchUser(1)); // served from cache
