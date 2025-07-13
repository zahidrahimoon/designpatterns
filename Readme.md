# Design Patterns

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![JavaScript](https://img.shields.io/badge/language-JavaScript-blue.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

Welcome to the **Design Patterns** repository!  
This project provides simple, practical, and well-structured examples of the most common software design patterns, especially as they apply to modern JavaScript.  
Whether you are a beginner or an experienced developer, you'll find clear explanations and code samples here.  
**Contributions, suggestions, and improvements are always welcome!**

---

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [When to Use Design Patterns](#when-to-use-design-patterns)
- [Types of Design Patterns](#types-of-design-patterns)
  - [Creational Patterns](#creational-patterns)
    - [Singleton](#singleton)
    - [Factory Method](#factory-method)
    - [Abstract Factory](#abstract-factory)
    - [Builder](#builder)
    - [Prototype](#prototype)
  - [Structural Patterns](#structural-patterns)
    - [Adapter](#adapter)
    - [Decorator](#decorator)
    - [Facade](#facade)
    - [Proxy](#proxy)
- [Notes on JavaScript Usage](#notes-on-javascript-usage)
- [Contributing](#contributing)
- [License](#license)

---

## Introduction

A **design pattern** is a general, reusable solution to a recurring problem in software design.  
Think of patterns as best-practice templates that you can adapt to solve specific problems in your code.  
They are not finished code, but proven approaches that help you:

- Communicate ideas with other developers
- Structure your code for clarity and maintainability
- Avoid reinventing the wheel

---

## When to Use Design Patterns

- Design patterns originated in object-oriented languages like C++ and Java, but they are also very useful in JavaScript and other programming paradigms.
- Use patterns to solve common design problems, improve code organization, and make your code easier to understand and maintain.
- **Tip:** Don't overuse patterns. Apply them thoughtfully to avoid making your code unnecessarily complex.

---

## Types of Design Patterns

Design patterns are generally divided into three main categories: **Creational**, **Structural**, and **Behavioral**.  
This repository currently focuses on Creational and Structural patterns.

---

### Creational Patterns

Creational patterns deal with object creation mechanisms, making it easier to create objects in a flexible and reusable way.

#### 1. Singleton

- **Purpose:** Ensures a class has only one instance and provides a global point of access to it.
- **Use Case:** Managing shared resources or configuration.
- [Example: Singleton in JavaScript](./creationaldesignpatterns/singleton/index.js)

#### 2. Factory Method

- **Purpose:** Defines an interface for creating objects, but lets subclasses decide which class to instantiate.
- **Use Case:** Centralizing object creation logic for better organization.
- [Example: Factory Method in JavaScript](./creationaldesignpatterns/factorymethod/index.js)

#### 3. Abstract Factory

- **Purpose:** Provides an interface for creating families of related or dependent objects without specifying their concrete classes.
- **Use Case:** Supporting multiple themes or environments in an application.
- [Example: Abstract Factory in JavaScript](./creationaldesignpatterns/abstractfactorymethod/index.js)

#### 4. Builder

- **Purpose:** Separates the construction of a complex object from its representation, allowing the same construction process to create different representations.
- **Use Case:** Creating objects step by step.
- [Example: Builder Pattern in JavaScript](./creationaldesignpatterns/builderpattern/index.js)

#### 5. Prototype

- **Purpose:** Creates new objects by copying an existing object, known as the prototype.
- **Use Case:** Efficient object creation and dynamic inheritance.
- [Example: Prototype Pattern in JavaScript](./creationaldesignpatterns/prototypepattern/index.js)

---

### Structural Patterns

Structural patterns explain how to assemble objects and classes into larger structures, making it easier to build flexible and efficient systems.

#### 1. Adapter

- **Purpose:** Allows two objects with incompatible interfaces to work together.
- **Example:** If your app receives data in XML but needs to process it as JSON, an Adapter can convert between the two formats.
- [Example: Adapter Pattern in JavaScript](./structuraldesignpatterns/adapterpattern/index.js)

#### 2. Decorator

- **Purpose:** Lets you add new behaviors to objects by wrapping them in decorator objects.
- **Use Case:** Dynamically adding features to objects without modifying their code.
- [Example: Decorator Pattern in JavaScript](./structuraldesignpatterns/decoratorpattern/index.js)

#### 3. Facade

- **Purpose:** Provides a simplified interface to a complex system, library, or framework.
- **Use Case:** Making a library easier to use by hiding its complexity behind a simple API.
- [Example: Facade Pattern in JavaScript](./structuraldesignpatterns/facadepattern/index.js)

#### 4. Proxy

- **Purpose:** Provides a substitute or placeholder for another object, controlling access to it.
- **Use Case:** Adding access control, logging, or lazy initialization.
- [Example: Proxy Pattern in JavaScript](./structuraldesignpatterns/proxypattern/index.js)

---

## Notes on JavaScript Usage

- Patterns are conceptual; adapt them to JavaScript's features and idioms.
- Use ES6+ syntax (like `class`, arrow functions, destructuring) for clarity and maintainability.
- Avoid unnecessary boilerplate—keep implementations idiomatic and concise.
- **Tip:** Focus on understanding the intent of each pattern, not just memorizing code.

---

## Contributing

We welcome contributions!  
If you'd like to add new patterns, improve documentation, or suggest enhancements:

- Fork the repository
- Create a new branch for your changes
- Open a pull request with a clear description

Please open issues or pull requests to discuss improvements.

---

## License

This project is licensed under the [MIT License](LICENSE).

---
