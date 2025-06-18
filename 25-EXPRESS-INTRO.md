# Comprehensive Guide to Express.js

- [Comprehensive Guide to Express.js](#comprehensive-guide-to-expressjs)
  - [Express JS](#express-js)
    - [Why Use Express Instead of Node's Built-in HTTP Module?](#why-use-express-instead-of-nodes-built-in-http-module)
    - [Conclusion](#conclusion)
  - [Building your first web server using `express`](#building-your-first-web-server-using-express)
  - [Express Routing basics](#express-routing-basics)
  - [Request and Response Objects](#request-and-response-objects)
    - [Request Object (`req`)](#request-object-req)
    - [Response Object (`res`)](#response-object-res)
  - [Working with Query Strings in Express.js](#working-with-query-strings-in-expressjs)
  - [Using Path Parameters in Express.js:](#using-path-parameters-in-expressjs)

## Express JS

Express is a popular web application framework for Node.js that simplifies building and managing web servers. It sits on top of Node.js’s built-in HTTP module and provides a higher-level abstraction that makes it easier to handle common tasks in web development.

### Why Use Express Instead of Node's Built-in HTTP Module?

1. **Simplified Syntax:** Express abstracts away much of the complexity of handling `HTTP` requests and responses. With Node.js’s built-in `HTTP` module, you’d need to manually handle request and response parsing, routing, and more. Express provides a more intuitive and readable syntax for these tasks.

   - Example with Node's HTTP Module:

     ```js
     const http = require("http");

     const server = http.createServer((req, res) => {
       if (req.url === "/") {
         res.writeHead(200, { "Content-Type": "text/plain" });
         res.end("Hello, world!\n");
       } else {
         res.writeHead(404, { "Content-Type": "text/plain" });
         res.end("Not Found\n");
       }
     });

     server.listen(3000, () => {
       console.log("Server running at http://localhost:3000/");
     });
     ```

   - Example with Express:

     ```js
     const express = require("express");
     const express = require("express");
     const app = express();

     app.get("/", (req, res) => {
       res.send("Hello, world!");
     });

     app.use((req, res) => {
       res.status(404).send("Not Found");
     });

     app.listen(3000, () => {
       console.log("Server running at http://localhost:3000/");
     });
     ```

2. **Routing:** Express provides a robust routing system with support for route parameters, query strings, and middleware. This makes it easy to organize routes and handle different types of requests.
3. **Middleware**: Express supports middleware functions that can be used to process requests and responses. Middleware functions are functions that have access to the request object, response object, and the next middleware function in the stack. This modular approach is great for adding functionality like logging, authentication, and body parsing.
4. **Error Handling**: Express has built-in mechanisms for error handling, making it easier to catch and respond to errors in a consistent way.
5. **Template Engines**: Express integrates easily with various template engines (like Pug, EJS, or Handlebars), which simplifies rendering dynamic HTML.
6. **Community and Ecosystem**: Express has a large and active community, which means there are numerous plugins and extensions available to extend its functionality.
7. **Request and Response Handling**: Express simplifies parsing and handling of incoming data (e.g., URL-encoded forms, JSON bodies) through middleware like body-parser.

### Conclusion

While Node.js’s built-in `HTTP` module provides the fundamental capabilities for handling `HTTP` requests and responses, Express offers a more developer-friendly interface and additional features that streamline web development tasks. It’s especially useful for building RESTful APIs and web applications where you need to manage routing, middleware, and templating more efficiently.

## Building your first web server using `express`

- Step 1: Set Up Your Project
  1. Create a New Directory
  2. Create a New File named `app.js` (or `server.js`, if you prefer).
  3. Initialize a New Node.js Project
  ```bash
    npm init -y
  ```
  4. Install Express
  ```js
    npm install express
  ```
- Step 2: Create Your Express Server

  ```js
  const express = require("express");
  const app = express();
  const port = 3000;

  // Define a route for the root URL
  app.get("/", (req, res) => {
    res.send("Hello, world!");
  });

  // Start the server
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
  ```

- Step 3: Run Your Server

  ```bash
  node app.js
  ```

## Express Routing basics

Express.js routing is fundamental for handling HTTP requests and mapping them to specific functionality within your application.

Routes are defined using HTTP methods (e.g., GET, POST) and URL paths. Routes map URLs to specific handlers.

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Home Page")); // Handles GET requests to '/'
app.post("/submit", (req, res) => res.send("Form Submitted")); // Handles POST requests to '/submit'

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
```

- `app.get('/')`: Responds to `GET` requests at the root URL with "Home Page".
- `app.post('/submit')`: Responds to `POST` requests at `/submit` with "Form Submitted".

Routing maps URLs to responses based on the request method and path.

## Request and Response Objects

In Express.js, a popular web application framework for Node.js, the request and response objects are central to handling HTTP requests and sending responses.

### Request Object (`req`)

The request object represents the HTTP request and contains information about the client's request to the server. Some of the key properties and methods of the `req` object include:

1. `req.body`: Contains data submitted in the body of the request. This is commonly used with `POST` and `PUT` requests. To access req.body, you'll need middleware like `express.json()` or `express.urlencoded()` to parse the request body.

   ```js
   app.use(express.json()); // For JSON payloads
   app.use(express.urlencoded({ extended: true })); // For URL-encoded payloads
   ```

2. `req.params`: Contains route parameters. These are values specified in the URL path.

   ```js
   app.get("/user/:id", (req, res) => {
     const userId = req.params.id;
     // Use userId to fetch user details
   });
   ```

3. `req.query`: Contains query string parameters from the URL. These are typically used in GET requests.

   ```js
   app.get("/search", (req, res) => {
     const searchTerm = req.query.term;
     // Use searchTerm to perform a search
   });
   ```

4. `req.headers`: Contains HTTP headers sent with the request.
   ```js
   app.get("/", (req, res) => {
     const userAgent = req.headers["user-agent"];
     // Use userAgent to determine browser type
   });
   ```
   5.`req.url`: The full URL of the request.

```js
app.get("/", (req, res) => {
  console.log(req.url);
  // Logs the URL of the request
});
```

### Response Object (`res`)

The response object represents the HTTP response that the server sends back to the client. Some of the key properties and methods of the `res` object include:

1. `res.send()`: Sends a response to the client. The response can be a string, JSON object, or buffer.

   ```js
   app.get("/", (req, res) => {
     res.send("Hello, World!");
   });
   ```

2. `res.json()`: Sends a JSON response. This method automatically sets the Content-Type header to application/json.

   ```js
   app.get("/data", (req, res) => {
     res.json({ message: "Hello, World!" });
   });
   ```

3. `res.status()`: Sets the HTTP status code for the response.

   ```js
   app.get("/notfound", (req, res) => {
     res.status(404).send("Not Found");
   });
   ```

4. `res.redirect()`: Redirects the client to a different URL.

   ```js
   app.get("/redirect", (req, res) => {
     res.redirect("https://www.example.com");
   });
   ```

5. `res.set()`: Sets HTTP headers for the response.

   ```js
   app.get("/", (req, res) => {
     res.set("X-Custom-Header", "value");
     res.send("Header set");
   });
   ```

6. `res.render()`: Renders a view template and sends the result as a response. This is commonly used in server-side rendering scenarios.

   ```js
   app.get("/view", (req, res) => {
     res.render("template", { title: "Hello World" });
   });
   ```

## Working with Query Strings in Express.js

Query strings are used to pass additional parameters in the URL. You can access these parameters using `req.query`.

```js
const express = require("express");
const app = express();

app.get("/search", (req, res) => {
  const query = req.query.q; // Access query string parameter 'q'
  res.send(`Search query is: ${query}`);
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
```

- **URL:** `/search?q=example`
- **Response:** `Search query is: example`

This code extracts the `q` parameter from the query string and sends it in the response

## Using Path Parameters in Express.js:

Path parameters are used to capture dynamic values from the URL.

```js
const express = require("express");
const app = express();

app.get("/user/:id", (req, res) => {
  const userId = req.params.id; // Access path parameter 'id'
  res.send(`User ID is: ${userId}`);
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
```

- **URL**: `/user/123`
- **Response**: `User ID is: 123`

This code captures `:id` from the URL and uses it in the response.
