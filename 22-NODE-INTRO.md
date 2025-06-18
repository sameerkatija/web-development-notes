# Getting Started with Node.js: Key Concepts, Modules, and npm Essentials

- [Getting Started with Node.js: Key Concepts, Modules, and npm Essentials](#getting-started-with-nodejs-key-concepts-modules-and-npm-essentials)
  - [What is Node.js?](#what-is-nodejs)
  - [What you can build with Node?](#what-you-can-build-with-node)
  - [Key Concepts Before Learning Node.js Development](#key-concepts-before-learning-nodejs-development)
    - [1. Directory](#1-directory)
    - [2. Package](#2-package)
    - [3. Package Manager](#3-package-manager)
    - [4. Dependency](#4-dependency)
    - [5. `package.json`](#5-packagejson)
  - [What is a Module and Modular Programming?](#what-is-a-module-and-modular-programming)
    - [Module:](#module)
    - [Modular Programming:](#modular-programming)
      - [Benefits:](#benefits)
  - [CommonJS Modules vs ES6 Modules](#commonjs-modules-vs-es6-modules)
    - [CommonJS Modules](#commonjs-modules)
    - [ES6 Modules](#es6-modules)
    - [Comparison Summary](#comparison-summary)
  - [Getting started with NPM](#getting-started-with-npm)
    - [1. Initializing a Project](#1-initializing-a-project)
    - [2. Installing Packages](#2-installing-packages)
    - [3. Uninstalling Packages](#3-uninstalling-packages)
    - [4. Updating Packages](#4-updating-packages)
    - [5. Checking Package Information](#5-checking-package-information)
    - [6. Running Scripts](#6-running-scripts)
  - [What is a Backend Server?](#what-is-a-backend-server)

## What is Node.js?

Node.js is a `runtime environment` that allows you to execute JavaScript code on the server side.

- **Built on V8 Engine:** Node.js uses Google's V8 JavaScript engine, which compiles JavaScript code into machine code for fast execution.

- **Asynchronous and Event-Driven:** Node.js is designed for building scalable network applications. It handles multiple operations concurrently using a non-blocking, event-driven architecture, which makes it well-suited for I/O-intensive tasks.

- **Single-Threaded with Event Loop:** Although Node.js operates on a single thread, it uses an event loop to manage multiple operations efficiently without blocking. This design helps in handling a large number of simultaneous connections with minimal overhead.

- **Package Management:** Node.js comes with npm (Node Package Manager), a vast repository of libraries and tools, allowing developers to easily manage dependencies and packages.

- **Use Cases:** Node.js is commonly used for building web servers, APIs, real-time applications (such as chat applications), and microservices.

In essence, Node.js extends JavaScript's reach beyond the browser, enabling server-side scripting and providing a powerful platform for developing high-performance applications.

## What you can build with Node?

- Web Servers (We will mostly focus this)
- Cli Tools
- Desktop Apps (eg. VSCode)
- Games
- IOT ....

## Key Concepts Before Learning Node.js Development

### 1. Directory

A directory is a `folder` in a file system that can contain files and other directories. In the context of Node.js, it usually refers to the structure of files and folders within a project.

**Example:** A Node.js project directory might include folders like `src`, `lib`, and `node_modules`.

### 2. Package

A package is a bundle of code, typically including a library or module that can be reused across projects. It often includes metadata and dependencies.

**Example:** Libraries like `express` or `lodash` are examples of packages that can be installed and used in Node.js projects.

### 3. Package Manager

A package manager is a tool that automates the process of installing, updating, and managing software packages. In the `Node.js` ecosystem, the most common package managers are `npm` (Node Package Manager) and `yarn`.

**Example:** `npm install express` installs the express package and its dependencies into your project.

### 4. Dependency

A dependency is a package or library that a project relies on to function correctly. Dependencies are listed in a project’s `package.json` file and are automatically managed by the package manager.

**Example:** If your `Node.js` project uses `express`, then `express` is a dependency.

### 5. `package.json`

`package.json` is a JSON file that contains metadata about a Node.js project. It includes information such as the `project's name`, `version`, `main entry point`, `scripts`, and a `list of dependencies` and `their versions`.

## What is a Module and Modular Programming?

### Module:

A module is a self-contained piece of code that encapsulates specific functionality. It typically includes functions, classes, or variables that are related to a particular task or feature. In JavaScript, modules help in organizing code into reusable and manageable components.

**Example:** In Node.js, a module can be a file that exports functionality to be used in other parts of an application.

```js
// math.js (Module)
function add(a, b) {
  return a + b;
}

module.exports = { add };
```

```js
// app.js
const math = require("./math");
console.log(math.add(2, 3)); // Outputs: 5
```

### Modular Programming:

Modular programming is a design paradigm that divides a program into distinct, interchangeable modules, each responsible for a specific piece of functionality. This approach promotes separation of concerns, making code easier to manage, maintain, and test.

#### Benefits:

- **Reusability:** Modules can be reused across different projects or parts of an application.
- **Maintainability:** Code is organized into logical sections, making it easier to update and debug.
- **Scalability:** Modular design facilitates collaboration and allows for the gradual expansion of functionality.

In a modular Node.js application, you might have separate files for different functionalities, such as `math.js` for mathematical operations and `database.js` for database interactions. Each module encapsulates its own logic and can be imported where needed, promoting clean and organized code.

In summary, a **module** is a self-contained unit of code that provides specific functionality, and **modular programming** is the practice of using modules to create organized, maintainable, and scalable software.

## CommonJS Modules vs ES6 Modules

### CommonJS Modules

CommonJS is traditionally used in Node.js environments. It was the original module system for JavaScript on the server side before ES6 modules were introduced.

- **Exporting:** Use `module.exports` or `exports`

  ```js
  // myModule.js
  const myFunction = () => {
    /* ... */
  };
  module.exports = myFunction;
  ```

- **Importing:** Use `require()`

  ```js
  const myFunction = require("./myModule");
  ```

### ES6 Modules

ES6 (ECMAScript 2015) modules are the standardized module system for JavaScript, and they are supported in both client-side (browsers) and server-side (Node.js) environments.

- **Exporting**

  ```js
  // myModule.js
  export const myFunction = () => {
    /* ... */
  };
  // myModule.js
  const myFunction = () => {
    /* ... */
  };
  export default myFunction;
  ```

- **Importing**
  ```js
  import { myFunction } from "./myModule";
  import myFunction from "./myModule";
  ```

### Comparison Summary

- **Loading:** CommonJS is synchronous and designed for server-side environments, while ES6 modules support asynchronous loading and are more versatile for both client and server-side code.
- **Syntax:** CommonJS uses `require()` and `module.exports`, while ES6 modules use `import` and `export`.
- **Compatibility:** ES6 modules are the modern standard and are natively supported in browsers and Node.js (**"type": "module"** in package.json).

In modern JavaScript development, ES6 modules are preferred due to their support for static analysis, better performance optimizations, and alignment with the evolving JavaScript standards. However, CommonJS remains important for legacy codebases and some Node.js applications.

## Getting started with NPM

### 1. Initializing a Project

```bash
npm init
```

### 2. Installing Packages

```bash
npm install express

npm install # Installs all dependencies listed in the `package.json` file.
```

### 3. Uninstalling Packages

```bash
npm uninstall lodash
```

### 4. Updating Packages

```bash
npm update # Updates all the packages listed in `package.json` to their latest versions according to the version range specified.

npm update lodash
```

### 5. Checking Package Information

```bash
npm list # Lists all installed packages in the current project.
npm list -g # Lists globally installed packages.
npm info lodash #  Displays information about a package.


```

### 6. Running Scripts

```bash
npm run start
npm run test
```

## What is a Backend Server?

A backend server is a component of a web application that handles requests from clients, processes them, interacts with databases or other services, and sends responses back to the client. It is responsible for the logic, data processing, and server-side operations that power the front end of an application.
