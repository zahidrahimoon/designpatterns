# Design Patterns Made Simple

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![JavaScript](https://img.shields.io/badge/language-JavaScript-blue.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

Welcome!  
This repository is all about **Design Patterns** in JavaScript, explained in a way that's easy to understand—even if you're just starting out.  
You'll find simple explanations, real-world examples, and code you can actually use.  
**Everyone is welcome to contribute, ask questions, or suggest improvements!**

---

## 📚 Table of Contents

- [What Are Design Patterns?](#what-are-design-patterns)
- [Why Use Design Patterns?](#why-use-design-patterns)
- [Types of Design Patterns](#types-of-design-patterns)
  - [Creational Patterns](#creational-patterns)
  - [Structural Patterns](#structural-patterns)
  - [Behavioral Patterns](#behavioral-patterns)
- [JavaScript Tips](#javascript-tips)
- [How to Contribute](#how-to-contribute)
- [License](#license)

---

## What Are Design Patterns?

**Design patterns** are like reusable solutions to common problems you face when writing code.  
Think of them as recipes or blueprints that help you solve issues in a smart, proven way.

> **Real-life example:**  
> Imagine you want to make a sandwich. You don’t invent a new way every time—you follow a recipe.  
> Design patterns are like those recipes, but for code!

---

## Why Use Design Patterns?

- **Save time:** No need to reinvent the wheel.
- **Write better code:** Patterns help you organize your code so it’s easier to read and maintain.
- **Work with others:** Patterns are a common language among developers.

> **Tip:**  
> Use patterns when they make your code simpler or solve a real problem.  
> Don’t use them just for the sake of it!

---

## Types of Design Patterns

Design patterns are usually grouped into three main types.  
Let’s look at each, with easy words and real-world examples.

---

### 🏗️ Creational Patterns

These patterns help you create objects in your code, kind of like how you might use different ways to make a pizza (by hand, with a machine, etc).

#### 1. Singleton

- **What it does:** Makes sure there’s only one of something.
- **Real-world example:**  
  Think of a single President in a country—there’s only one at a time.
- [See code example](./creationaldesignpatterns/singleton/index.js)

#### 2. Factory Method

- **What it does:** Lets you create objects without saying exactly what kind of object you want.
- **Real-world example:**  
  Like ordering a drink at a café—you just say “coffee” and the barista decides which cup and method to use.
- [See code example](./creationaldesignpatterns/factorymethod/index.js)

#### 3. Abstract Factory

- **What it does:** Makes families of related objects.
- **Real-world example:**  
  Buying a furniture set (table + chairs) that all match.
- [See code example](./creationaldesignpatterns/abstractfactorymethod/index.js)

#### 4. Builder

- **What it does:** Helps you build complex objects step by step.
- **Real-world example:**  
  Building a burger by adding ingredients one at a time.
- [See code example](./creationaldesignpatterns/builderpattern/index.js)

#### 5. Prototype

- **What it does:** Makes new objects by copying an existing one.
- **Real-world example:**  
  Photocopying a document to make a new copy.
- [See code example](./creationaldesignpatterns/prototypepattern/index.js)

---

### 🧩 Structural Patterns

These patterns show you how to put objects together, like building blocks.

#### 1. Adapter

- **What it does:** Lets things work together even if they weren’t designed to.
- **Real-world example:**  
  Using a travel plug adapter to charge your phone in another country.
- [See code example](./structuraldesignpatterns/adapterpattern/index.js)

#### 2. Decorator

- **What it does:** Adds new features to something without changing how it works inside.
- **Real-world example:**  
  Putting a case on your phone to add protection or style.
- [See code example](./structuraldesignpatterns/decoratorpattern/index.js)

#### 3. Facade

- **What it does:** Hides complex stuff behind a simple interface.
- **Real-world example:**  
  Using a TV remote instead of pressing buttons on the TV itself.
- [See code example](./structuraldesignpatterns/facadepattern/index.js)

#### 4. Proxy

- **What it does:** Acts as a go-between for something else.
- **Real-world example:**  
  A receptionist who takes calls and passes messages to the boss.
- [See code example](./structuraldesignpatterns/proxypattern/index.js)

---

### 🤝 Behavioral Patterns

These patterns are about how objects talk to each other and share work.

#### Chain of Responsibility

- **What it does:** Passes a request along a chain until someone handles it.
- **Real-world example:**  
  Customer support: your question goes from the chatbot, to a junior agent, to a manager if needed.

#### Iterator

- **What it does:** Lets you go through items in a collection one by one.
- **Real-world example:**  
  Flipping through pages in a book, one at a time.

#### Observer

- **What it does:** Lets objects know when something happens.
- **Real-world example:**  
  Subscribing to a YouTube channel—you get notified when there’s a new video.

---

## JavaScript Tips

- Use modern JavaScript (like `class`, arrow functions, etc.) for clear code.
- Patterns are ideas, not strict rules—adapt them to what makes sense for your project.
- Keep your code simple and easy to read.

---

## How to Contribute

We’d love your help!  
If you want to add new patterns, fix something, or make this guide even easier to understand:

1. **Fork** this repository
2. **Create a branch** for your changes
3. **Open a pull request** with a clear description

Questions and suggestions are always welcome—just open an issue or pull request!

---

## License

This project is licensed under the [MIT License](LICENSE).

---
