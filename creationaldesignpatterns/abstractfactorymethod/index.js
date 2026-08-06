// Abstract Factory: one factory builds a whole family of matching objects.

const darkFactory = {
  createButton: () => ({ render: () => "dark button" }),
  createInput: () => ({ render: () => "dark input" }),
};

const lightFactory = {
  createButton: () => ({ render: () => "light button" }),
  createInput: () => ({ render: () => "light input" }),
};

const renderForm = (factory) =>
  `${factory.createInput().render()} + ${factory.createButton().render()}`;

console.log(renderForm(darkFactory)); // dark input + dark button
console.log(renderForm(lightFactory)); // light input + light button
