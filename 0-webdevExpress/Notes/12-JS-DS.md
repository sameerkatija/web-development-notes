# JavaScript Control Structures and Data Structures: Arrays and Objects

- [JavaScript Control Structures and Data Structures: Arrays and Objects](#javascript-control-structures-and-data-structures-arrays-and-objects)
  - [What is Decision Making?](#what-is-decision-making)
  - [Decision-Making in JS](#decision-making-in-js)
  - [Role of Comparison operators](#role-of-comparison-operators)
  - [`if` Statement](#if-statement)
  - [`if...else` Statement](#ifelse-statement)
  - [`if...else if...else` Statement](#ifelse-ifelse-statement)
  - [`switch` Statement](#switch-statement)
  - [Conditional (Ternary) Operator](#conditional-ternary-operator)
  - [`break` statement](#break-statement)
  - [What is Data Structure](#what-is-data-structure)
  - [Array in JS](#array-in-js)
  - [Common Operations](#common-operations)
    - [1. Creating an Array](#1-creating-an-array)
    - [2. Accessing Elements](#2-accessing-elements)
    - [3. Adding Elements](#3-adding-elements)
    - [4. Removing Elements](#4-removing-elements)
    - [5. Finding the Length:](#5-finding-the-length)
    - [6. Modifying elements:](#6-modifying-elements)
  - [Array Methods](#array-methods)
    - [1. `concat()`](#1-concat)
    - [2. `includes()`](#2-includes)
    - [3. `indexOf()`](#3-indexof)
    - [4. `join()`](#4-join)
    - [5. `reverse()`](#5-reverse)
    - [6. `slice()`](#6-slice)
    - [7. `splice()`](#7-splice)
    - [8. `sort()`](#8-sort)
  - [Store by Reference and Store by Value](#store-by-reference-and-store-by-value)
    - [1. Store by Value](#1-store-by-value)
    - [2. Store by Reference](#2-store-by-reference)
  - [Why Use `const` with Arrays](#why-use-const-with-arrays)
  - [Dereference an Array](#dereference-an-array)
  - [A Multi-Dimensional array](#a-multi-dimensional-array)
    - [1. Creating Multi-Dimensional Arrays](#1-creating-multi-dimensional-arrays)
      - [Two-Dimensional Array](#two-dimensional-array)
      - [Three-Dimensional Array](#three-dimensional-array)
  - [Introduction to Objects and Object Literals in JavaScript](#introduction-to-objects-and-object-literals-in-javascript)
  - [Object Literal `{}`](#object-literal-)
    - [Accessing and Modifying Properties](#accessing-and-modifying-properties)
      - [Dot Notation `.`](#dot-notation-)
      - [Bracket Notation `[]`](#bracket-notation-)
  - [Nested Objects](#nested-objects)
  - [Common Object built-in Methods](#common-object-built-in-methods)
    - [1. `Object.hasOwnProperty(prop)`](#1-objecthasownpropertyprop)
    - [2. `Object.keys(obj)`](#2-objectkeysobj)
    - [3. `Object.values(obj)`](#3-objectvaluesobj)
    - [4. `Object.entries(obj)`](#4-objectentriesobj)

## What is Decision Making?

`Decision-making` is the process of choosing the best option from several alternatives to solve a problem or achieve a goal.

## Decision-Making in JS

In JavaScript, decision-making is typically handled using `control flow statements` that allow your code to make decisions based on conditions. The main decision-making constructs are `if`, `else if`, `else`, `switch`, and `conditional (ternary) operators`.

> A `control flow statement` in programming directs the order in which code is executed based on conditions or loops. It determines whether certain blocks of code run or how many times they should run.

## Role of Comparison operators

Comparison operators in JavaScript are used to compare two values and determine their relationship. They return a `boolean value (true or false)` based on the comparison.

These operators are essential for making decisions in code and controlling the flow of execution based on conditions.

If you don't know about comparison operators, [read here](https://github.com/sameerkatija/sc-advance-web-class/tree/day-12?tab=readme-ov-file#3-comparison-relational-operators)

## `if` Statement

The `if` statement executes a block of code if a specified condition is true.

```js
if (condition) {
  // code to execute if condition is true
}

let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
}
```

## `if...else` Statement

The `if...else` statement executes one block of code if the condition is true, and another block if it is false.

```js
if (condition) {
  // code to execute if condition is true
} else {
  // code to execute if condition is false
}
let age = 16;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
```

## `if...else if...else` Statement

This construct allows you to test multiple conditions.

```js
if (condition1) {
  // code to execute if condition1 is true
} else if (condition2) {
  // code to execute if condition2 is true
} else {
  // code to execute if none of the conditions are true
}
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: D");
}
```

## `switch` Statement

The `switch` statement executes code based on the value of a variable or expression, which can be more readable than multiple `if...else if` statements.

```js
switch (expression) {
  case value1:
    // code to execute if expression equals value1
    break;
  case value2:
    // code to execute if expression equals value2
    break;
  default:
  // code to execute if expression does not match any case
}

let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Weekend");
}
```

## Conditional (Ternary) Operator

The `conditional (ternary) operator` is a shorthand for if...else statements. It returns one of two values depending on a condition.

```js
condition ? expression1 : expression2;

let age = 18;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // Output: "Adult"
```

## `break` statement

The `break` statement in JavaScript is used to exit from a loop (for, while, do...while) or a switch statement before it naturally completes. It immediately terminates the loop or switch block and transfers control to the code following the loop or switch.

## What is Data Structure

A `data structure` is a way of organizing and storing data in a computer so that it can be accessed and modified efficiently. It defines how data is related and how it can be manipulated.

> `Data Type` defines the kind of single value and its operations (e.g., number, string), while `Data Structure` organizes and manages collections of values and their relationships (e.g., arrays, trees).

## Array in JS

In JavaScript, an `array` is a `data structure` used to store a collection of elements, which can be of any type, including `numbers`, `strings`, `objects`, or even `other arrays`. Arrays are ordered and indexed, meaning each element has a numeric `index` starting from `0`.

## Common Operations

### 1. Creating an Array

```js
let fruits = ["apple", "banana", "cherry"];
```

### 2. Accessing Elements

```js
console.log(fruits[0]); // Output: "apple"
```

### 3. Adding Elements

```js
fruits.push("date"); // Adds "date" to the end of the array
fruits.unshift("apple"); // Adds "apple" to the front
```

### 4. Removing Elements

```js
fruits.pop(); // Removes the last element
fruits.shift(); // Removes the first element
```

### 5. Finding the Length:

```js
console.log(fruits.length); // Output: Number of elements in the array
```

### 6. Modifying elements:

```js
fruits[0] = "grapes";
```

> In JavaScript, Arrays are mutable. This means you can change the contents of an array after it has been created. You can modify, add, or remove elements from an array.

## Array Methods

### 1. `concat()`

Combines two or more arrays into a new array.

```js
let arr1 = [1, 2, 3];
let arr2 = [4, 5];
let combined = arr1.concat(arr2); // [1, 2, 3, 4, 5]
```

### 2. `includes()`

Checks if an array contains a specified element.

```js
let arr = [1, 2, 3];
console.log(arr.includes(2)); // true
console.log(arr.includes(4)); // false
```

### 3. `indexOf()`

Returns the first index at which a given element can be found in the array, or `-1` if it's not present.

```js
let arr = [1, 2, 3, 2];
console.log(arr.indexOf(2)); // 1 (first occurrence)
console.log(arr.indexOf(4)); // -1 (not found)
```

### 4. `join()`

Joins all elements of an array into a single string, separated by a specified separator.

```js
let arr = [1, 2, 3];
console.log(arr.join("-")); // "1-2-3"
```

### 5. `reverse()`

Reverses the elements of the array in place.

```js
let arr = [1, 2, 3];
arr.reverse();
console.log(arr); // [3, 2, 1]
```

### 6. `slice()`

Creates a shallow copy of a portion of an array into a new array object.

```js
let arr = [1, 2, 3, 4];
let sliced = arr.slice(1, 3); // [2, 3]
console.log(sliced);
```

### 7. `splice()`

Adds or removes elements from an array at a specified index.

```js
let arr = [1, 2, 3, 4];
arr.splice(2, 1, "a", "b"); // At index 2, remove 1 item and add 'a' and 'b'
console.log(arr); // [1, 2, 'a', 'b', 4]
```

### 8. `sort()`

Sorts the elements of the array in place and returns the sorted array. By default, it sorts elements as strings.

```js
let arr = [3, 1, 2];
arr.sort(); // [1, 2, 3]

let nums = [10, 5, 100, 50];
nums.sort();
console.log(nums); // [10, 100, 5, 50] (sorted as strings, not numbers)

// For numerical sort:
nums.sort((a, b) => a - b); // [5, 10, 50, 100]
```

## Store by Reference and Store by Value

### 1. Store by Value

When data is stored by value, the variable holds a copy of the actual data. Modifying the value of the variable does not affect the original data. This approach is typically used for primitive data types.

```js
let a = 10; // 'a' holds the value 10
let b = a; // 'b' is assigned the value of 'a' (10)
b = 20; // 'b' is now 20, but 'a' is still 10

console.log(a); // 10
console.log(b); // 20

// a and b are independent. Changing b does not affect a.
```

> You cannot change the value of a `primitive variable` in place. Instead, you reassign the variable to a new value.

> Primitive values themselves are immutable, meaning their internal value cannot be changed. What changes is the variable's reference to a new value.

### 2. Store by Reference

When data is stored by reference, the variable holds a reference to the actual data location in memory. Modifying the data via one variable affects all other variables that reference the same data.

> Arrays are reference types, meaning that variables hold references to the array's memory location, not the array itself. When you modify the array, you're changing the data at the referenced memory location.

> Arrays are objects and are passed by reference. This means that when you pass an array to a function, you’re passing a reference to the array, not a copy. Changes to the array within the function affect the original array.

```js
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]
```

## Why Use `const` with Arrays

> `const` only prevents reassignment of the variable itself. It does not make the value immutable. Arrays are mutable, meaning their elements can be changed, added, or removed.

Using `const` helps indicate that the reference to the array should not be changed. This can prevent accidental reassignment of the variable to a different array or value, which can be a common source of bugs.

## Dereference an Array

In JavaScript, dereferencing an array (or any object) means ensuring that no references to the array remain so that it becomes eligible for garbage collection. The garbage collector automatically frees up memory used by objects that are no longer referenced.

```js
let arr = [1, 2, 3];
let arr2 = arr1; // 'arr2' also references the same array
arr1 = null; // 'arr1' is now null, but 'arr2' still holds a reference
arr2 = null; // 'arr2' is now null, so the array is dereferenced
```

## A Multi-Dimensional array

A multi-dimensional array is an array that contains other arrays as its elements, creating a matrix-like structure. In JavaScript, multi-dimensional arrays are commonly used to represent tables, grids, or more complex data structures.

> A nested array is an array that contains other arrays as its elements. It allows you to create multi-dimensional data structures.

### 1. Creating Multi-Dimensional Arrays

#### Two-Dimensional Array

A two-dimensional array can be visualized as a table or grid with rows and columns.

```js
// Creating a 2x3 two-dimensional array
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log(matrix[0][0]); // 1 (element at the first row, first column)
console.log(matrix[1][2]); // 6 (element at the second row, third column)
```

#### Three-Dimensional Array

A three-dimensional array adds another layer, creating a "cube" structure.

```js
// Creating a 2x2x2 three-dimensional array
let cube = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];

console.log(cube[1][0][1]); // 6 (element in the second "layer", first row, second column)
```

## Introduction to Objects and Object Literals in JavaScript

In JavaScript, objects are fundamental data structures that allow you to store collections of data and more complex entities.

> The term "object" refers broadly to any instance of an object in JavaScript, regardless of how it was created.

> When discussing objects, it's essential to understand the different methods of creation.

## Object Literal `{}`

This is a specific syntax used to create objects directly using a concise and straightforward notation. An object literal is defined with curly braces `{}`, containing `key-value` pairs that represent the `properties` and `methods` of the object.

```js
const person = {
  name: "Alice",
  age: 30,
  speak: function () {
    console.log("I can speak");
  },
};

person.speak(); // calling method

// Shorthand Property Names

let name = "Bob";
let age = 25;
const person = {
  name,
  age,
};

console.log(person.name); // 'Bob'
console.log(person.age); // 25
```

### Accessing and Modifying Properties

#### Dot Notation `.`

```js
let user = {
  username: "john_doe",
  email: "john@example.com",
};

console.log(user.username); // 'john_doe'
user.email = "john.doe@example.com"; // Modify property

console.log(user.age); // undefined; as user doesn't have age property

user.age = 30; // creates a new property and assigns value 30;
console.log(user.age); // 30;

user.age = 18; // updating age with value of 18;
console.log(user.age); // 18;
// Deleting a property
delete person.email;
```

#### Bracket Notation `[]`

```js
let user = {
  "first name": "Jane",
  "last name": "Doe",
};

console.log(user["first name"]); // 'Jane'
user["last name"] = "Smith"; // Modify property

// Adding a property
person["phone"] = "123-456-7890";

console.log(person["phone"]); // '123-456-7890'
```

## Nested Objects

Objects can also contain other objects as properties.

```js
let person = {
  name: "Daisy",
  address: {
    street: "123 Main St",
    city: "Springfield",
  },
};

console.log(person.address.city); // 'Springfield'
```

## Common Object built-in Methods

### 1. `Object.hasOwnProperty(prop)`

Returns a boolean indicating whether the object has the specified property as its own property (not inherited).

```js
const person = { name: "Alice" };
console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("age")); // false
```

### 2. `Object.keys(obj)`

Returns an array of a given object's own enumerable property names.

```js
const person = { name: "Alice", age: 30 };
console.log(Object.keys(person)); // ['name', 'age']
```

### 3. `Object.values(obj)`

Returns an array of a given object's own enumerable property values.

```js
const person = { name: "Alice", age: 30 };
console.log(Object.values(person)); // ['Alice', 30]
```

### 4. `Object.entries(obj)`

Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.

```js
const person = { name: "Alice", age: 30 };
console.log(Object.entries(person)); // [['name', 'Alice'], ['age', 30]]
```
