// Iterator: hand out items one at a time, the caller never sees how they are stored.

function* playlist(songs) {
  for (const song of songs) yield song;
}

for (const song of playlist(["One", "Two", "Three"])) console.log(song);

const numbers = playlist([10, 20, 30]);
console.log(numbers.next()); // { value: 10, done: false }
console.log(numbers.next()); // { value: 20, done: false }
