// Memento: save a snapshot of state now, restore it later, internals stay hidden.

const createEditor = () => {
  let text = "";
  return {
    type: (words) => { text += words; },
    read: () => text,
    save: () => text,
    restore: (snapshot) => { text = snapshot; },
  };
};

const editor = createEditor();
const history = [];

editor.type("Hello");
history.push(editor.save());
editor.type(" World");

console.log(editor.read()); // Hello World
editor.restore(history.pop());
console.log(editor.read()); // Hello
