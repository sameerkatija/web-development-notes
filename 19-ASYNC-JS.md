# Mastering Asynchronous JavaScript: A Comprehensive Guide to Non-Blocking Paradigm

- [Mastering Asynchronous JavaScript: A Comprehensive Guide to Non-Blocking Paradigm](#mastering-asynchronous-javascript-a-comprehensive-guide-to-non-blocking-paradigm)
  - [Callbacks](#callbacks)
    - [1. What is a Callback?](#1-what-is-a-callback)
    - [2. How Callbacks Work](#2-how-callbacks-work)
    - [3. Benefits of Callbacks](#3-benefits-of-callbacks)
    - [4. Callback Hell](#4-callback-hell)
    - [5. Alternatives to Callbacks](#5-alternatives-to-callbacks)
  - [Promise In JS](#promise-in-js)
    - [1. Key Concepts of Promises](#1-key-concepts-of-promises)
      - [1.1 States:](#11-states)
      - [1.2 Creating a Promise:](#12-creating-a-promise)
      - [1.3 Handling Promises:](#13-handling-promises)
      - [1.4 Chaining Promises:](#14-chaining-promises)
      - [1.5 `Promise.all()` and `Promise.race()`:](#15-promiseall-and-promiserace)
  - [Async/Await in JS](#asyncawait-in-js)
    - [1. `async` Function](#1-async-function)
      - [1. Characteristics:](#1-characteristics)
    - [2. `await` Expression](#2-await-expression)
      - [2.1 Characteristics:](#21-characteristics)
    - [3. Key Points](#3-key-points)
    - [4. Summary](#4-summary)

## Callbacks

Callbacks are a fundamental part of handling asynchronous operations in programming. They play a key role in allowing your code to handle operations that don’t complete immediately, such as file reading, network requests, or timers, without blocking the execution of other code.

Here’s how callbacks assist in asynchronous programming:

### 1. What is a Callback?

A callback is a function that you pass as an argument to another function. This callback function is intended to be executed after the completion of some operation or event. Essentially, it provides a way to "call back" to the original function once a task is done.

> Synchronous callbacks are handled directly by the call stack. Asynchronous callbacks (e.g., from setTimeout) are managed by the event loop and task queue, and executed by the call stack when the queue is processed.

### 2. How Callbacks Work

1. **Initiating an Asynchronous Operation:** You start an asynchronous task by calling a function and passing a callback function as an argument.
2. **Processing in the Background:** The asynchronous task is processed in the background, while the main code continues to execute.
3. **Executing the Callback:** Once the asynchronous operation completes, the callback function is executed to handle the result of the operation or to continue with the next steps.

```js
console.log("Start");

function doSomethingAfterDelay(callback) {
  setTimeout(() => {
    console.log("Task complete");
    callback(); // Call the callback function after the delay
  }, 2000); // Delay of 2 seconds
}

doSomethingAfterDelay(() => {
  console.log("End");
});
```

### 3. Benefits of Callbacks

1. **Non-Blocking Execution:** Callbacks allow your code to continue executing without waiting for the asynchronous task to complete. This is especially important in environments where you want to keep the application responsive.

2. **Handling Asynchronous Results:** Callbacks provide a way to handle the result of an asynchronous operation, such as processing data once it has been retrieved or updating the UI after receiving data from a server.

3. **Event Handling:** Callbacks are commonly used for event handling. For instance, in web development, callbacks are used to handle events like clicks, form submissions, or key presses.

### 4. Callback Hell

While callbacks are powerful, they can also lead to a problem known as `callback hell` or `pyramid of doom`. This happens when you have multiple nested callbacks, making the code difficult to read and maintain.

```js
doSomething((result) => {
  doSomethingElse(result, (result2) => {
    doYetAnotherThing(result2, (result3) => {
      console.log("Final result:", result3);
    });
  });
});
```

### 5. Alternatives to Callbacks

To address issues like callback hell, modern JavaScript offers alternatives:

1. **Promises:** Promises provide a more manageable way to handle asynchronous operations by chaining `.then()` methods and using `.catch()` for error handling.

   ```js
   doSomething()
     .then((result) => doSomethingElse(result))
     .then((result2) => doYetAnotherThing(result2))
     .then((result3) => console.log("Final result:", result3))
     .catch((error) => console.error("Error:", error));
   ```

2. **Async/Await:** This syntax makes asynchronous code look more like synchronous code, improving readability and maintainability.

   ```js
   async function main() {
     try {
       const result = await doSomething();
       const result2 = await doSomethingElse(result);
       const result3 = await doYetAnotherThing(result2);
       console.log("Final result:", result3);
     } catch (error) {
       console.error("Error:", error);
     }
   }

   main();
   ```

Callbacks are crucial for asynchronous programming, but their usage often leads to more complex code structures, which modern JavaScript tools and patterns have aimed to simplify.

## Promise In JS

In JavaScript, a Promise is an object representing the eventual completion or failure of an asynchronous operation and its resulting value. Promises provide a more structured way to handle asynchronous code compared to traditional callbacks, helping to avoid issues like "callback hell."

```js
// Using Callbacks with Promises

function fetchDataWithCallback(callback) {
  setTimeout(() => {
    const success = true;
    if (success) {
      callback(null, "Data received");
    } else {
      callback("Error occurred");
    }
  }, 1000);
}

function fetchData() {
  return new Promise((resolve, reject) => {
    fetchDataWithCallback((error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

fetchData()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
```

### 1. Key Concepts of Promises

#### 1.1 States:

- **Pending:** The initial state; the promise is neither fulfilled nor rejected.

- **Fulfilled:** The operation completed successfully, and the promise has a resulting value.

- **Rejected:** The operation failed, and the promise has a reason for the failure (usually an error).

#### 1.2 Creating a Promise:

A Promise is created using the Promise `constructor`, which takes a function known as the `"executor."` The executor function has two parameters:

- **resolve:** A function to call when the operation is successful.
- **reject:** A function to call when the operation fails.

```js
const myPromise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation
  setTimeout(() => {
    const success = true; // Simulate success or failure
    if (success) {
      resolve("Operation was successful!");
    } else {
      reject("Operation failed.");
    }
  }, 1000);
});
```

#### 1.3 Handling Promises:

Once a Promise is created, you can handle its result or error using `.then()` and `.catch()` methods.

- **`.then(onFulfilled)`, `.catch(onRejected)`:** Specifies what to do when the Promise is fulfilled or rejected. The onFulfilled function handles a successful result, while the onRejected function handles an error.

````js
    myPromise
      .then(result => {
        console.log(result); // "Operation was successful!"
      })
      .catch(error => {
        console.error(error); // Handle any errors
      });
    ```
````

- **`.finally(onFinally)`:** Executes a function regardless of the Promise's outcome (`fulfilled` or `rejected`). It's useful for cleanup operations.
  ```js
  myPromise.finally(() => {
    console.log("Promise has been settled (fulfilled or rejected).");
  });
  ```

#### 1.4 Chaining Promises:

Promises can be chained to perform a sequence of asynchronous operations. Each .then() returns a new Promise, allowing you to chain multiple .then() calls.

```js
myPromise
  .then((result) => {
    console.log(result); // "Operation was successful!"
    return "Next value";
  })
  .then((nextResult) => {
    console.log(nextResult); // "Next value"
  })
  .catch((error) => {
    console.error(error); // Handle any errors
  });
```

#### 1.5 `Promise.all()` and `Promise.race()`:

- `Promise.all(iterable)`: Takes an iterable of Promises and returns a single Promise that resolves when all of the Promises in the iterable have resolved or rejects if any Promise in the iterable rejects.

  ```js
  Promise.all([promise1, promise2])
    .then(([result1, result2]) => {
      console.log(result1, result2);
    })
    .catch((error) => {
      console.error(error);
    });
  ```

- `Promise.race(iterable)`: Takes an iterable of Promises and returns a single Promise that resolves or rejects as soon as one of the Promises in the iterable resolves or rejects.
  ```js
  Promise.race([promise1, promise2])
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
  ```

Promises are a fundamental part of modern JavaScript and are essential for working with asynchronous code in a more manageable and readable way. They are commonly used in conjunction with async and await syntax for even more streamlined asynchronous code.

## Async/Await in JS

`async` and `await` are modern JavaScript features that simplify working with asynchronous code, making it more readable and easier to write compared to using Promises directly.

> A newer and cleaner syntax for working with async code! Syntax "makeup" for promises

### 1. `async` Function

An `async` function is a function that is declared with the `async` keyword. It always returns a `Promise`, and the syntax allows you to write asynchronous code that looks synchronous.

```js
async function myFunction() {
  // Code goes here
}
```

#### 1. Characteristics:

- The function always returns a `Promise`. If you `return` a `value`, it is wrapped in a `resolved Promise`. If you `throw` an `error`, it is wrapped in a `rejected Promise`.

- Inside an async function, you can use the `await` keyword to pause execution until a `Promise` is resolved.

### 2. `await` Expression

The `await` keyword can only be used inside an `async` function. It pauses the execution of the `async` function and waits for the Promise to resolve or reject.

```js
async function myFunction() {
  // Code goes here
  let result = await promise;
}
```

#### 2.1 Characteristics:

- `await` pauses the execution of the `async` function until the Promise is resolved.

- If the Promise is rejected, `await` throws the error, which can be caught using a `try`...`catch` block.

```js
// Function returning a Promise
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // Simulate success or failure
      if (success) {
        resolve("Data received");
      } else {
        reject("Error occurred");
      }
    }, 1000);
  });
}

// Using async and await
async function getData() {
  try {
    const result = await fetchData(); // Waits for fetchData to resolve
    console.log(result); // "Data received"
  } catch (error) {
    console.error(error); // Handles any errors that occurred during fetchData
  }
}

getData();
```

### 3. Key Points

- **Synchronous Look and Feel:** async and await provide a more readable and synchronous-like structure for handling asynchronous operations, avoiding the need for chaining `.then()` and `.catch()`.

- **Error Handling:** Use `try`...`catch` blocks within `async` functions to handle errors, similar to synchronous code.

- **Multiple Awaits:** You can use multiple `await` expressions to handle multiple asynchronous operations sequentially.

```js
async function fetchAllData() {
  try {
    const data1 = await fetchData1();
    const data2 = await fetchData2();
    console.log(data1, data2);
  } catch (error) {
    console.error(error);
  }
}
```

- **Parallel Execution:** If you need to run multiple asynchronous operations in parallel, you can use `Promise.all()` with `await`.
  ```js
  async function fetchAllData() {
    try {
      const [data1, data2] = await Promise.all([fetchData1(), fetchData2()]);
      console.log(data1, data2);
    } catch (error) {
      console.error(error);
    }
  }
  ```

### 4. Summary

`async` and `await` provide a more intuitive way to work with asynchronous code by allowing you to write code that resembles synchronous operations. They are built on top of `Promises` and improve code readability and maintainability, especially in complex scenarios involving multiple asynchronous operations.
