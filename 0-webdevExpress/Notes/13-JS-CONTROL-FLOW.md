# JavaScript Control Flow: Loops, Functions, and Scope Basics

- [JavaScript Control Flow: Loops, Functions, and Scope Basics](#javascript-control-flow-loops-functions-and-scope-basics)
  - [Loops](#loops)
    - [Why We Need Loops](#why-we-need-loops)
  - [Categories of Loop](#categories-of-loop)
    - [1. Counter Loops](#1-counter-loops)
    - [2. Conditional Loops](#2-conditional-loops)
  - [Types of Loops in JavaScript](#types-of-loops-in-javascript)
    - [1. `for` Loop](#1-for-loop)
    - [2. `while` Loop](#2-while-loop)
    - [3. `do...while` Loop](#3-dowhile-loop)
    - [4. `for...in` Loop](#4-forin-loop)
    - [5. `for...of` Loop](#5-forof-loop)
  - [Nested loop](#nested-loop)
  - [Infinite loop](#infinite-loop)
  - [`continue` statement](#continue-statement)
  - [Introduction to Functions](#introduction-to-functions)
    - [Defining Functions](#defining-functions)
      - [1. Function Declarations](#1-function-declarations)
      - [2 Function Expressions](#2-function-expressions)
      - [3. Arrow Functions](#3-arrow-functions)
      - [4. Function Constructor](#4-function-constructor)
    - [Invoking (calling) Functions](#invoking-calling-functions)
    - [Parameters and Arguments](#parameters-and-arguments)
      - [1 Parameters](#1-parameters)
      - [2 Arguments](#2-arguments)
    - [3 Default Parameters](#3-default-parameters)
    - [`Return` Statement](#return-statement)
  - [Scope in programming](#scope-in-programming)
    - [1. Types of Scope](#1-types-of-scope)
      - [1.1 Global Scope](#11-global-scope)
      - [1.2 Function Scope](#12-function-scope)
      - [1.3 Block Scope](#13-block-scope)
      - [1.4 Lexical Scope (Static Scope)](#14-lexical-scope-static-scope)

## Loops

A loop is a programming mechanism that allows you to repeatedly execute a block of code as long as a `specific condition` is true.

You can think of a loop as a general concept in programming that facilitates repeated execution of instructions based on `certain criteria`.

### Why We Need Loops

- **Repetition**: Automate repetitive tasks, such as processing items in a list.

- **Efficiency**: Reduce the amount of code needed by handling repetitive operations in a single loop.

- **Dynamic Operations**: Handle dynamic or unknown quantities of data, such as user inputs or data retrieved from an API.

## Categories of Loop

In programming, loops can be categorized based on how they control iteration. The two broad types are `conditional` and `counter` loops—represent the general ways in which loops can operate.

### 1. Counter Loops

Counter loops are designed to run a specific number of times, typically determined by a counter variable. These loops are used when the number of iterations is known before the loop starts.

### 2. Conditional Loops

Conditional loops are based on a condition that determines whether the loop continues or not. These loops are used when the number of iterations is not known ahead of time and depends on some condition being met during the execution.

## Types of Loops in JavaScript

### 1. `for` Loop

The for loop is commonly used when you know in advance how many times you want to execute a block of code.

```js
// for (initialization; condition; increment) {
//   Code to execute on each iteration
// }

// Initialization: let i = 1 - Initializes the loop counter.
// Condition: i <= 5 - Determines whether to continue looping.
// Increment: i++ - Updates the loop counter after each iteration.

// Print numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

### 2. `while` Loop

The while loop runs as long as the specified condition evaluates to true. It is used when the number of iterations is not known beforehand.

```js
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

### 3. `do...while` Loop

The do...while loop is similar to the while loop but guarantees that the code block runs at least once before checking the condition.

```js
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);
```

### 4. `for...in` Loop

The for...in loop is used to iterate over the properties of an object.

```js
const person = { name: "John", age: 30, city: "New York" };

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
```

### 5. `for...of` Loop

The for...of loop is used to iterate over iterable objects like arrays, strings, or other collections.

```js
const fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
  console.log(fruit);
}
```

## Nested loop

A nested loop is a loop that contains another loop inside its body. This means you have one loop inside another loop, which allows for more complex and multidimensional iteration patterns. Nested loops are often used to handle tasks involving multidimensional data structures, such as `matrices`, or to perform operations that require multiple levels of iteration.

```js
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(`matrix[${i}][${j}] = ${matrix[i][j]}`);
  }
}
```

## Infinite loop

An infinite loop in programming is a loop that continues to execute indefinitely because its terminating condition is never met or is always true. This type of loop does not naturally exit or stop on its own and requires external intervention or a specific condition to terminate.

## `continue` statement

The `continue` statement in JavaScript is used to skip the current iteration of a loop and proceed to the next iteration. It is useful when you want to bypass the remaining code inside the loop body for the current iteration based on a certain condition.

## Introduction to Functions

Functions in JavaScript are fundamental building blocks that allow you to `encapsulate` and `reuse` code. They are used to perform specific tasks, return values, and enhance `modularity` and readability in your code.

### Defining Functions

Functions in JavaScript can be defined in several ways:

#### 1. Function Declarations

This is the most common way to define a function. It includes the `function` keyword, a `name`, `parameters`, and a `body`.

```js
function greet(name) {
  return `Hello, ${name}!`;
}
```

#### 2 Function Expressions

Functions can also be defined as expressions and assigned to variables. This can be anonymous or named.

```js
const greet = function (name) {
  return `Hello, ${name}!`;
};
```

#### 3. Arrow Functions

Arrow functions provide a more concise syntax and do not have their own this context, making them useful for certain scenarios.

```js
const greet = (name) => `Hello, ${name}!`;
```

#### 4. Function Constructor

Functions can be created using the Function constructor, though this approach is less common and often not recommended due to its potential complexity and security issues.

```js
const greet = new Function("name", "return `Hello, ${name}!`");
```

### Invoking (calling) Functions

Once defined, you can `call` or `invoke` a function by using its name followed by parentheses `()`. You can pass arguments inside the parentheses.

```js
console.log(greet("Alice")); // Output: Hello, Alice!
```

### Parameters and Arguments

#### 1 Parameters

Parameters are placeholders for values that are passed to the function. In the `function declaration`, parameters are defined in the parentheses.

#### 2 Arguments

Arguments are the actual values passed to the function when it is called.

### 3 Default Parameters

You can provide default values for parameters in case no argument is passed or if undefined is passed.

```js
/* 
In function declaration, the name is parameter
and it's default value is Guest
*/
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greet()); // Output: Hello, Guest!

// passing farrukh argument to function
console.log(greet("farrukh")); // Output: Hello, farrukh
```

### `Return` Statement

Functions return a value using the `return` statement. If no return statement is present, the function returns undefined.

> In JavaScript, a function is designed to return a single value. However, this does not mean you are limited to returning just a single primitive value. You can return complex data structures that effectively bundle multiple values into one.

## Scope in programming

In a programming language, scope refers to the area where a function or variable is visible and accessible to other code. It determines the visibility and lifetime of variables, ensuring that they can be used only where they are meant to be accessible. Understanding scope is crucial for managing variable lifetimes, avoiding conflicts, and maintaining code clarity.

### 1. Types of Scope

#### 1.1 Global Scope

Variables declared in the global scope are accessible from any part of the code. They are declared outside of any function or block.

```js
let globalVar = "I am global";

function display() {
  console.log(globalVar); // Accesses globalVar
}

display(); // Output: I am global
```

#### 1.2 Function Scope

Variables declared inside a function are scoped to that function. They are not accessible outside of the function.

```js
function greet() {
  let localVar = "Hello";
  console.log(localVar); // Accesses localVar within the function
}

greet(); // Output: Hello
console.log(localVar); // Error: localVar is not defined
```

#### 1.3 Block Scope

Introduced with `ES6`, `block scope` refers to variables declared within a block (using curly braces `{}`) like those inside if statements, loops, or other code blocks.

```js
if (true) {
  let blockVar = "I am block-scoped";
  console.log(blockVar); // Accesses blockVar within the block
}

console.log(blockVar); // Error: blockVar is not defined
```

#### 1.4 Lexical Scope (Static Scope)

Lexical scope refers to the scope of variables based on their physical placement in the code. It determines how variable names are resolved in nested functions.

```js
function outer() {
  let outerVar = "I am outer";

  function inner() {
    console.log(outerVar); // Accesses outerVar from the outer function
  }

  inner();
}

outer(); // Output: I am outer
```
