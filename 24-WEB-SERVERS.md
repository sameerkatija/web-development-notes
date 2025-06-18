# Understanding Web Server Basics: Ports, Routing, HTTP Methods, and Node.js Implementation

- [Understanding Web Server Basics: Ports, Routing, HTTP Methods, and Node.js Implementation](#understanding-web-server-basics-ports-routing-http-methods-and-nodejs-implementation)
  - [What is `PORT` and Why we need it?](#what-is-port-and-why-we-need-it)
  - [Routes](#routes)
  - [Method:](#method)
  - [Request](#request)
  - [Response Status Code](#response-status-code)
  - [Request Body](#request-body)
  - [Headers](#headers)
  - [Creating server in Node Js](#creating-server-in-node-js)
  - [Example of Node Process](#example-of-node-process)
  - [Routing in Node Server](#routing-in-node-server)
  - [Taking input using `prompt-sync`](#taking-input-using-prompt-sync)
  - [Taking input using `readline` Module](#taking-input-using-readline-module)
  - [Number Guessing Game](#number-guessing-game)
  - [`process` module](#process-module)
    - [1. Process Information](#1-process-information)
    - [2. Environment Variables](#2-environment-variables)
    - [3. Standard Input/Output](#3-standard-inputoutput)
    - [4. Exit and Exit Code](#4-exit-and-exit-code)
    - [5. Handling Signals](#5-handling-signals)
    - [6. Command-Line Arguments](#6-command-line-arguments)
  - [Read file using `createReadStream`](#read-file-using-createreadstream)
  - [Read file using `fs.readfile`](#read-file-using-fsreadfile)
  - [Create and Write File](#create-and-write-file)

## What is `PORT` and Why we need it?

A port is a communication endpoint that allows different applications or services to connect and exchange data over a network. It helps direct network traffic to the appropriate service or application on a computer. For example, web servers commonly use port `80` for HTTP and port `443` for HTTPS. Ports are essential for managing multiple services and ensuring data is routed correctly.

## Routes

Routes define how an application responds to specific client requests. They map URLs to functions or handlers that process the request and return a response. Routes are crucial for organizing and managing different parts of an application, such as handling different web pages or API endpoints.

> Think of routes like street signs in a city. Just as street signs direct drivers to different destinations (like restaurants, parks, or museums), routes in an application guide incoming requests to specific functions or handlers, directing them to the appropriate "destination" (such as displaying a webpage or processing data).

## Method:

In HTTP/HTTPS, a method defines the action to be performed on a resource. Common methods include GET (retrieve data), POST (submit data), PUT (update data), and DELETE (remove data).

## Request

An HTTP request is sent by a client to a server, asking for or sending data. It includes a method, URL, headers, and often a body.

## Response Status Code

A status code in an HTTP response indicates the outcome of the request. Codes like 200 mean success, 404 means the resource was not found, and 500 indicates a server error.

## Request Body

The request body contains data sent by the client to the server, typically used with POST or PUT methods. It includes the data that needs to be processed or stored, such as form submissions or JSON payloads.

## Headers

Headers are key-value pairs sent in HTTP requests and responses that provide metadata about the request or response. They convey information such as content type, length, encoding, and caching policies. Headers help clients and servers understand how to handle the data being transmitted and control various aspects of the communication. For example, `Content-Type` specifies the media type of the resource, and Authorization provides credentials for authentication.

## Creating server in Node Js

```js
const http = require("http");

// Define the hostname and port
const hostname = "127.0.0.1";
const port = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response header
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  // Write the response body
  res.end("Hello, World!\n");
});

// Start the server and listen on the specified port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

## Example of Node Process

```js
console.log(`Hello Mr. ${process.argv[2]}`);

process.on("beforeExit", (code) => {
  console.log("Process beforeExit event with code: ", code);
});

process.on("exit", () => {
  console.log("Good Bye");
});

process.on("SIGINT", () => {
  console.log(`Don't ever dare to close me like this`);
  process.exit();
});
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3000);
});
```

## Routing in Node Server

```js
const http = require("http");
const url = require("url");

// Define the hostname and port
const hostname = "127.0.0.1";
const port = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Parse the request URL
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // Handle different routes
  if (pathname === "/") {
    // Root route
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello, World!\n");
  } else if (pathname.startsWith("/hello/")) {
    // Handle /hello/:name route
    const name = pathname.split("/")[2];
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(`Hello, ${name}!\n`);
  } else {
    // 404 Not Found
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Not Found\n");
  }
});

// Start the server and listen on the specified port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

## Taking input using `prompt-sync`

```js
const prompt = require("prompt-sync")({ sigint: true });

const name = prompt("What is your name? ");
console.log(`Hello, ${name}!`);
```

## Taking input using `readline` Module

The `readline` module provides an interface for reading data from a readable stream, such as the process's standard input. It's useful for interactive command-line applications.

```js
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name? ", (name) => {
  console.log(`Hello, ${name}!`);
  rl.close();
});
```

## Number Guessing Game

```js
const readline = require("readline");

let totalValue = process.argv[2] || 10; // Default to 10 if no value is provided
let number = Math.floor(Math.random() * Number(totalValue) + 1);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.setPrompt(`Guess a number between 0 and ${totalValue}: `);
rl.prompt();

// Handle user input
rl.on("line", (input) => {
  const guess = Number(input);
  if (guess === number) {
    console.log("Congratulations! You guessed the number.");
    process.exit(0);
  } else if (guess > number) {
    console.log("Your guess is too high.");
    rl.prompt();
  } else {
    console.log("Your guess is too low.");
    rl.prompt();
  }
});

// Handle Ctrl+C (SIGINT)
rl.on("SIGINT", () => {
  process.exit(1);
});

// Handle process exit
process.on("exit", (code) => {
  if (code === 0) {
    console.log("Good Game");
  } else {
    console.log("\nYou could have done better");
  }
  rl.close();
});
```

## `process` module

The `process` module in Node.js provides information and control over the current Node.js process. It’s a global object and doesn’t need to be required explicitly. It offers methods and properties that allow you to interact with the running process, manage environment variables, and handle standard input/output.

### 1. Process Information

You can use process to get information about the current Node.js process

```js
// Print the process ID
console.log(`Process ID: ${process.pid}`);

// Print the current working directory
console.log(`Current Directory: ${process.cwd()}`);

// Print the version of Node.js
console.log(`Node Version: ${process.version}`);
```

### 2. Environment Variables

Accessing and modifying environment variables

```js
// Print all environment variables
console.log(process.env);

// Access a specific environment variable
const path = process.env.PATH;
console.log(`PATH: ${path}`);

// Set an environment variable (temporary for the script's lifetime)
process.env.CUSTOM_VAR = "Hello, World!";
console.log(`CUSTOM_VAR: ${process.env.CUSTOM_VAR}`);
```

### 3. Standard Input/Output

You can use `process.stdin`, `process.stdout`, and `process.stderr` to handle standard `input` and `output`

```js
// Reading from Standard Input:
process.stdin.setEncoding("utf8");

console.log("Type something and press Enter:");

process.stdin.on("data", (chunk) => {
  console.log(`You typed: ${chunk}`);
});

process.stdout.write("Hello, World!\n"); // Writing to Standard Output:
process.stderr.write("An error occurred!\n"); // Writing to Standard Error:
```

### 4. Exit and Exit Code

You can terminate the process and provide an exit code

```js
// Exit with a success code
process.exit(0);

// Exit with a failure code
process.exit(1);
```

### 5. Handling Signals

You can handle system signals to perform cleanup or other actions

```js
process.on("SIGINT", () => {
  console.log("Received SIGINT. Exiting gracefully...");
  process.exit();
});
```

### 6. Command-Line Arguments

Access command-line arguments passed to the script

```js
console.log(process.argv);
```

## Read file using `createReadStream`

```js
const path = require("path");
const fs = require("fs");
const fileName = path.join(__dirname, "text.txt");

const file = fs.createReadStream(fileName, {
  encoding: "utf8",
});

file.on("error", (err) => {
  console.log(err);
});

file.on("data", (data) => {
  console.log(data);
});
```

## Read file using `fs.readfile`

```js
const fs = require("fs");
const path = require("path");

const fileName = path.join(__dirname, "text.txt");
// Sync Handling
const data = fs.readFileSync(fileName, "utf8");
console.log(data);

// Async Handling
fs.readFile(fileName, { encoding: "utf8" }, (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log(data);
});
```

## Create and Write File

```js
const fs = require("fs").promises;

async function createAndWriteFile() {
  try {
    // Define the file path and content
    const filePath = "message1.txt"; // Change this to your desired file path
    const content = "Hello, Node.js! This is a test file.";

    // Write content to the file
    await fs.writeFile(filePath, content, "utf8");

    console.log(`File created and content written to ${filePath}`);
  } catch (err) {
    console.error("Error writing to file:", err);
  }
}

// Call the function to create and write to the file
createAndWriteFile();
```
