# Design Patterns Made Simple

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![JavaScript](https://img.shields.io/badge/language-JavaScript-blue.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

Welcome!  
This repository covers **all 23 classic design patterns** from the "Gang of Four" book *Design Patterns: Elements of Reusable Object-Oriented Software*, explained in a way that's easy to understand—even if you're just starting out.

Every pattern has a **minimal, runnable, function-based** example: plain functions, closures, and objects—no classes, no `new`, no boilerplate. Just the core idea.

**Everyone is welcome to contribute, ask questions, or suggest improvements!**

---

## 📚 Table of Contents

- [What Are Design Patterns?](#what-are-design-patterns)
- [Why Use Design Patterns?](#why-use-design-patterns)
- [How to Run the Examples](#how-to-run-the-examples)
- [Types of Design Patterns](#types-of-design-patterns)
  - [Creational Patterns](#️-creational-patterns-5)
  - [Structural Patterns](#-structural-patterns-7)
  - [Behavioral Patterns](#-behavioral-patterns-11)
- [Quick Cheat Sheet](#quick-cheat-sheet)
- [JavaScript Tips](#javascript-tips)
- [How to Contribute](#how-to-contribute)
- [License](#license)

---

## What Are Design Patterns?

**Design patterns** are reusable solutions to common problems you face when writing code.  
Think of them as recipes or blueprints that help you solve issues in a smart, proven way.

> **Real-life example:**  
> Imagine you want to make a sandwich. You don't invent a new way every time—you follow a recipe.  
> Design patterns are like those recipes, but for code!

The 23 patterns are divided into three categories based on their **intent**:

| Family | Question it answers | Count |
| --- | --- | --- |
| Creational | *How do I create objects?* | 5 |
| Structural | *How do I assemble objects into bigger structures?* | 7 |
| Behavioral | *How do objects communicate and share responsibility?* | 11 |

---

## Why Use Design Patterns?

- **Save time:** No need to reinvent the wheel.
- **Write better code:** Patterns help you organize your code so it's easier to read and maintain.
- **Work with others:** Patterns are a common language among developers.

> **Tip:**  
> Use patterns when they make your code simpler or solve a real problem.  
> Don't use them just for the sake of it!

---

## How to Run the Examples

Every example is a plain Node.js file with no dependencies. Each one prints its result, so you can watch the pattern work:

```bash
node creationaldesignpatterns/singleton/index.js
```

Every file has the same shape—one line explaining the core idea, then the smallest code that shows it:

```js
// Singleton: one instance, shared everywhere. A closure holds it.

const getConfig = (() => { ... })();

getConfig().set("theme", "dark");
console.log(getConfig().get("theme")); // dark
```

The only comments in the code are the core-idea line and the expected output, so nothing gets in the way of reading it.

---

## Types of Design Patterns

---

### 🏗️ Creational Patterns (5)

These patterns focus on **object creation mechanisms**, trying to create objects in a manner suitable to the situation.

#### 1. Abstract Factory

- **Definition:** Provides an interface for creating **families of related objects** without specifying their concrete classes.
- **Real-world example:** Buying a furniture set (table + chairs) where everything matches.
- **In the code:** `darkFactory` and `lightFactory` both expose `createButton()` and `createInput()`. `renderForm(factory)` works with either one and never knows which theme it got.
- **Use it when:** picking one option (a theme, a platform, a locale) must switch several related objects together.
- [See code example](./creationaldesignpatterns/abstractfactorymethod/index.js)

#### 2. Builder

- **Definition:** Separates the construction of a complex object from its representation, so the same process can create different representations.
- **Real-world example:** Building a burger by adding ingredients one at a time.
- **In the code:** each step (`addPatty`, `addCheese`) returns a **new** builder holding the parts so far; `build()` returns the finished burger. Nothing is mutated, so a half-built burger can be reused safely.
- **Use it when:** an object has many optional parts and a giant constructor would be unreadable.
- [See code example](./creationaldesignpatterns/builderpattern/index.js)

#### 3. Factory Method

- **Definition:** Defines an interface for creating a **single object**, but lets the factory decide which one to make.
- **Real-world example:** Ordering a drink at a café—you just say "coffee" and the barista picks the cup and the method.
- **In the code:** a `creators` object maps a type string to a creator function, and `createDrink(type)` looks it up. Adding a new drink means adding one key—no `if/else` to touch.
- **Use it when:** the type to build is decided at runtime (user input, config, an API response).
- [See code example](./creationaldesignpatterns/factorymethod/index.js)

#### 4. Prototype

- **Definition:** Creates new objects by **copying an existing object** (the prototype) instead of building from scratch.
- **Real-world example:** Photocopying a document to make a new copy.
- **In the code:** `clone()` builds a fresh document and spreads the tags into a **new array**, so pushing a tag on the copy doesn't touch the original.
- **Use it when:** creating from scratch is expensive and an existing object is already close enough.
- **Watch out:** copy nested arrays/objects too, or both copies quietly share them.
- [See code example](./creationaldesignpatterns/prototypepattern/index.js)

#### 5. Singleton

- **Definition:** Ensures there is only **one instance** and provides a single point of access to it.
- **Real-world example:** A single President in a country—there's only one at a time.
- **In the code:** an IIFE closure holds `instance`. The first call builds it, every later call returns the same object—which is why `getConfig() === getConfig()` is `true`.
- **Use it when:** you need one shared config, cache, logger, or connection.
- [See code example](./creationaldesignpatterns/singleton/index.js)

---

### 🧱 Structural Patterns (7)

These patterns deal with **object composition**—how to assemble objects into larger structures while keeping them flexible and efficient.

#### 1. Adapter

- **Definition:** Lets classes with **incompatible interfaces** work together by wrapping one interface around another.
- **Real-world example:** A travel plug adapter so you can charge your phone in another country.
- **In the code:** `printerAdapter` takes the old `oldPrinter(text)` function and exposes the `print({ body })` shape your code expects. The legacy function is never edited.
- **Use it when:** you can't change a legacy or third-party API but need it to fit your code.
- [See code example](./structuraldesignpatterns/adapterpattern/index.js)

#### 2. Bridge

- **Definition:** Decouples an **abstraction from its implementation** so the two can vary independently.
- **Real-world example:** A remote control (abstraction) that works with any brand of TV (implementation).
- **In the code:** `notify` and `notifyUrgent` are the abstractions; `sms` and `email` are the implementations. Any of the 2 × 2 combinations works, with no combined variants written by hand.
- **Use it when:** you'd otherwise need a type per combination (SmsUrgent, EmailUrgent, SmsNormal…).
- [See code example](./structuraldesignpatterns/bridgepattern/index.js)

#### 3. Composite

- **Definition:** Composes objects into **tree structures** so clients can treat individual objects and whole compositions uniformly.
- **Real-world example:** Files and folders—a folder's size is just the sum of what's inside it.
- **In the code:** `file` and `folder` both expose `getSize()`. The folder reduces over its children, which may themselves be folders, so the recursion is free.
- **Use it when:** your data is a tree (menus, comments, the DOM) and you want one uniform API.
- [See code example](./structuraldesignpatterns/compositepattern/index.js)

#### 4. Decorator

- **Definition:** Dynamically adds extra responsibilities to an object **without altering its structure**.
- **Real-world example:** Putting a case on your phone to add protection or style.
- **In the code:** `withMilk` and `withSugar` each take a drink and return a **new** one with the cost and description extended. Nesting them stacks the features in any order.
- **Use it when:** features combine freely and writing a type per combination would explode.
- [See code example](./structuraldesignpatterns/decoratorpattern/index.js)

#### 5. Facade

- **Definition:** Provides a **simplified, high-level interface** to a complex subsystem.
- **Real-world example:** One power button starts a whole computer.
- **In the code:** `startComputer()` calls CPU, disk, and memory in the right order. Callers get one function and never learn the sequence.
- **Use it when:** callers only need the happy path and shouldn't have to learn the internals.
- [See code example](./structuraldesignpatterns/facadepattern/index.js)

#### 6. Flyweight

- **Definition:** Minimizes memory by **sharing** as much data as possible between similar objects.
- **Real-world example:** A forest of a million trees—only the positions differ, the tree *type* is shared.
- **In the code:** `getTreeType()` caches types in a `Map`, so three trees reuse only two type objects—`forest[0].type === forest[1].type` is `true`.
- **Use it when:** you create huge numbers of objects that repeat most of their data.
- [See code example](./structuraldesignpatterns/flyweightpattern/index.js)

#### 7. Proxy

- **Definition:** Provides a **placeholder or substitute** for another object to control access to it.
- **Real-world example:** A receptionist who screens calls before passing them to the boss.
- **In the code:** `withCache(fetchUser)` returns a function with the exact same signature, but the second call is served from the `Map`—run it and you'll see "hitting the api" printed only once.
- **Use it when:** you want caching, lazy loading, logging, or permission checks around something.
- [See code example](./structuraldesignpatterns/proxypattern/index.js)

---

### 🧠 Behavioral Patterns (11)

These patterns are concerned with **algorithms, communication, and the assignment of responsibilities** between objects.

#### 1. Chain of Responsibility

- **Definition:** Passes a request along a **chain of potential handlers** until one of them handles it.
- **Real-world example:** Support tickets go from the chatbot, to a junior agent, to a manager.
- **In the code:** `chain(...handlers)` tries each handler in order and returns the first truthy result. A handler that can't help returns `null` and the request moves on.
- **Use it when:** several handlers might respond and the sender shouldn't know which one does.
- [See code example](./behavioraldesignpatterns/chainofresponsibilitypattern/index.js)

#### 2. Command

- **Definition:** Encapsulates a request **as an object**, letting you parameterize callers, queue requests, and support undoable operations.
- **Real-world example:** A restaurant order slip—written once, then cooked, re-read, or cancelled.
- **In the code:** `turnOn(light)` returns `{ execute, undo }`. The remote keeps a history stack, so `undo()` pops the last command and reverses it.
- **Use it when:** you need undo/redo, macros, or a job queue.
- [See code example](./behavioraldesignpatterns/commandpattern/index.js)

#### 3. Interpreter

- **Definition:** Defines a **grammatical representation** for a small language along with a way to evaluate it.
- **Real-world example:** A calculator reading `(5 + 3) - 2` and working it out piece by piece.
- **In the code:** `num`, `add`, and `sub` each return a function. Nesting them builds a tree, and calling the outer function evaluates the whole expression.
- **Use it when:** you have a tiny grammar—filters, formulas, search queries—to evaluate repeatedly.
- [See code example](./behavioraldesignpatterns/interpreterpattern/index.js)

#### 4. Iterator

- **Definition:** Provides a way to access elements **sequentially** without exposing the underlying representation.
- **Real-world example:** Flipping through pages in a book, one at a time.
- **In the code:** a generator (`function*`) yields one song at a time. It works with `for...of`, and you can also drive it manually with `.next()`.
- **Use it when:** you want a custom collection to work with normal JavaScript looping.
- [See code example](./behavioraldesignpatterns/iteratorpattern/index.js)

#### 5. Mediator

- **Definition:** Restricts direct communication between objects and forces them to collaborate **through a central mediator**.
- **Real-world example:** Air traffic control—planes talk to the tower, never plane-to-plane.
- **In the code:** `createRoom()` closes over the user list. A user only knows the room, so `ali.send(...)` reaches everyone else without Ali ever holding a reference to them.
- **Use it when:** many-to-many connections are turning into spaghetti.
- [See code example](./behavioraldesignpatterns/mediatorpattern/index.js)

#### 6. Memento

- **Definition:** Captures an object's internal state so it can be **restored later** without violating encapsulation.
- **Real-world example:** A game save point you can load after things go wrong.
- **In the code:** `text` lives in a closure and is never exposed. `save()` hands out an opaque snapshot, `restore()` puts it back.
- **Use it when:** you need undo or rollback without leaking the object's internals.
- **Related:** [Command](#2-command) records *actions*, Memento records *state*.
- [See code example](./behavioraldesignpatterns/mementopattern/index.js)

#### 7. Observer

- **Definition:** Defines a **subscription mechanism** so multiple objects are notified automatically about events.
- **Real-world example:** Subscribing to a YouTube channel—you're notified on every new video.
- **In the code:** `subscribe(fn)` stores the callback and returns an **unsubscribe** function. After Ali unsubscribes, only Sara gets Episode 2.
- **Use it when:** one change must update many parts (events, state stores, live UI).
- [See code example](./behavioraldesignpatterns/observerpattern/index.js)

#### 8. State

- **Definition:** Lets an object alter its behavior when its **internal state changes**, as if it changed its type.
- **Real-world example:** A traffic light—red, green, and yellow each decide what comes next.
- **In the code:** `transitions` and `actions` are lookup tables. `change()` returns a new light in the next state, so the state machine lives in one readable place instead of scattered `if`s.
- **Use it when:** you have a big `if/else` on a `status` field spread across your code.
- [See code example](./behavioraldesignpatterns/statepattern/index.js)

#### 9. Strategy

- **Definition:** Defines a family of algorithms, encapsulates each one, and makes them **interchangeable at runtime**.
- **Real-world example:** Paying by card, cash, or wallet—the checkout doesn't change, only the method does.
- **In the code:** `strategies` maps a name to a payment function, and `checkout(name)` returns the chosen one. Adding a new method is one new key.
- **Use it when:** you have several interchangeable ways to do one job (sorting, pricing, payment).
- **Related:** State switches *itself*; Strategy is chosen by the caller.
- [See code example](./behavioraldesignpatterns/strategypattern/index.js)

#### 10. Template Method

- **Definition:** Defines the **skeleton of an algorithm**, letting individual steps be overridden without changing its structure.
- **Real-world example:** Every recipe is prep → cook → serve, but each dish fills those steps in differently.
- **In the code:** `makeReport` always joins header → body → footer in that order. `header` and `footer` have defaults, so a caller may override only `body`.
- **Use it when:** several flows share one skeleton but differ in a couple of steps.
- [See code example](./behavioraldesignpatterns/templatemethodpattern/index.js)

#### 11. Visitor

- **Definition:** Separates an algorithm from the object structure it works on, so you can **add new operations without modifying** those objects.
- **Real-world example:** A tax inspector visiting different shops—each shop is unchanged, the inspector brings the new rules.
- **In the code:** shapes carry a `type` and hold no logic. `visit(visitor)` dispatches on that type, so `area` and `label` are two new operations added without editing a single shape.
- **Use it when:** the set of object types is stable but you keep adding new operations over them.
- [See code example](./behavioraldesignpatterns/visitorpattern/index.js)

---

## Quick Cheat Sheet

| # | Pattern | Family | One-line idea |
| --- | --- | --- | --- |
| 1 | [Abstract Factory](./creationaldesignpatterns/abstractfactorymethod/index.js) | Creational | One factory, a matching family |
| 2 | [Builder](./creationaldesignpatterns/builderpattern/index.js) | Creational | Build step by step, then `build()` |
| 3 | [Factory Method](./creationaldesignpatterns/factorymethod/index.js) | Creational | Ask a factory for the object |
| 4 | [Prototype](./creationaldesignpatterns/prototypepattern/index.js) | Creational | Clone instead of construct |
| 5 | [Singleton](./creationaldesignpatterns/singleton/index.js) | Creational | Only one instance, shared |
| 6 | [Adapter](./structuraldesignpatterns/adapterpattern/index.js) | Structural | Make a mismatched API fit |
| 7 | [Bridge](./structuraldesignpatterns/bridgepattern/index.js) | Structural | Separate what from how |
| 8 | [Composite](./structuraldesignpatterns/compositepattern/index.js) | Structural | One item and a tree look the same |
| 9 | [Decorator](./structuraldesignpatterns/decoratorpattern/index.js) | Structural | Wrap to add behaviour |
| 10 | [Facade](./structuraldesignpatterns/facadepattern/index.js) | Structural | One simple door to many rooms |
| 11 | [Flyweight](./structuraldesignpatterns/flyweightpattern/index.js) | Structural | Share repeated data |
| 12 | [Proxy](./structuraldesignpatterns/proxypattern/index.js) | Structural | A stand-in that controls access |
| 13 | [Chain of Responsibility](./behavioraldesignpatterns/chainofresponsibilitypattern/index.js) | Behavioral | Pass it on until handled |
| 14 | [Command](./behavioraldesignpatterns/commandpattern/index.js) | Behavioral | An action as an object |
| 15 | [Interpreter](./behavioraldesignpatterns/interpreterpattern/index.js) | Behavioral | Evaluate a tiny language |
| 16 | [Iterator](./behavioraldesignpatterns/iteratorpattern/index.js) | Behavioral | Step through items |
| 17 | [Mediator](./behavioraldesignpatterns/mediatorpattern/index.js) | Behavioral | Talk through a hub |
| 18 | [Memento](./behavioraldesignpatterns/mementopattern/index.js) | Behavioral | Snapshot and restore |
| 19 | [Observer](./behavioraldesignpatterns/observerpattern/index.js) | Behavioral | Notify all subscribers |
| 20 | [State](./behavioraldesignpatterns/statepattern/index.js) | Behavioral | Behaviour follows state |
| 21 | [Strategy](./behavioraldesignpatterns/strategypattern/index.js) | Behavioral | Swap the algorithm |
| 22 | [Template Method](./behavioraldesignpatterns/templatemethodpattern/index.js) | Behavioral | Fixed steps, custom details |
| 23 | [Visitor](./behavioraldesignpatterns/visitorpattern/index.js) | Behavioral | New operations, same objects |

---

## JavaScript Tips

- The patterns were written for class-based languages, but JavaScript gives you **closures, first-class functions, and object literals**—so most of them shrink to a few lines. That's the style used throughout this repo.
- Useful building blocks you'll see again and again here:
  - **Closures** hold private state (Singleton, Memento, Mediator, Observer).
  - **Higher-order functions** wrap behaviour (Decorator, Proxy, Bridge, Template Method).
  - **Lookup objects** replace subclass hierarchies (Factory, Strategy, State, Visitor).
- Patterns are ideas, not strict rules—adapt them to what makes sense for your project.
- Keep your code simple and easy to read. If a pattern makes it harder, drop the pattern.

---

## How to Contribute

We'd love your help!  
If you want to improve an example, fix something, or make this guide even easier to understand:

1. **Fork** this repository
2. **Create a branch** for your changes
3. Keep examples **minimal, runnable, and function based** (no classes), with only the core-idea comment and expected output
4. **Open a pull request** with a clear description

Questions and suggestions are always welcome—just open an issue or pull request!

---

## License

This project is licensed under the [MIT License](LICENSE).

---
