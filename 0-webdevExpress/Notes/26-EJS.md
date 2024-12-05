# From Static to Dynamic: The Art of HTML Templating

- [From Static to Dynamic: The Art of HTML Templating](#from-static-to-dynamic-the-art-of-html-templating)
  - [Serving HTML file](#serving-html-file)
  - [Enhancing Static HTML with Dynamic Data](#enhancing-static-html-with-dynamic-data)
    - [Why this approach isn't good?](#why-this-approach-isnt-good)
  - [Introduction to Templating](#introduction-to-templating)
  - [EJS (Embedded JavaScript)](#ejs-embedded-javascript)
    - [Key Features of EJS:](#key-features-of-ejs)
    - [EJS with Express.js](#ejs-with-expressjs)
      - [1. Install EJS:](#1-install-ejs)
      - [2. Configure Express to Use EJS:](#2-configure-express-to-use-ejs)
      - [3. Create EJS Templates:](#3-create-ejs-templates)
    - [Passing Data to EJS](#passing-data-to-ejs)
    - [EJS TAGS](#ejs-tags)
      - [1. Output Tags `<%= expression %>`](#1-output-tags--expression-)
      - [2. Unescaped Output Tags `<%- expression %>`](#2-unescaped-output-tags---expression-)
      - [3. JavaScript Code Tags `<% code %>`](#3-javascript-code-tags--code-)
      - [4. Comment Tags `<%# comment %>`](#4-comment-tags--comment-)
    - [Conditions in ejs](#conditions-in-ejs)
    - [Loops in ejs](#loops-in-ejs)
  - [EJS Partials](#ejs-partials)
    - [Using EJS Partials](#using-ejs-partials)
      - [1. Creating Partials](#1-creating-partials)
      - [2. Including Partials in Templates](#2-including-partials-in-templates)
      - [3. Passing Data to Partials](#3-passing-data-to-partials)
  - [Serving Static Assets in Express](#serving-static-assets-in-express)
    - [1. Create a Directory for Static Assets](#1-create-a-directory-for-static-assets)
    - [2. Configure Express to Serve Static Assets](#2-configure-express-to-serve-static-assets)

## Serving HTML file

```js
// app.js
const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Example route to serve an HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
}
```

> If you're serving static HTML files using express.static() or res.sendFile(), you cannot directly inject data.

## Enhancing Static HTML with Dynamic Data

```js
// app.js
const express = require("express");
const app = express();

// Example route
app.get("/", (req, res) => {
  // Data to be passed to the HTML
  const title = "Hello, World!";
  const message = "Welcome to the dynamic page!";

  // Construct HTML string with data
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>${title}</title>
    </head>
    <body>
      <h1>${message}</h1>
    </body>
    </html>
  `;

  // Send the constructed HTML
  res.send(htmlContent);
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
```

### Why this approach isn't good?

1. Lack of Reusability and Scalability in Hardcoded HTML
2. Difficulties in Maintaining Hardcoded HTML
3. Lack of Separation of Concerns

## Introduction to Templating

Templating is a technique used in web development and programming to generate dynamic content by separating the structure of a document from the content that fills it.

1. **Templates:** These are predefined structures or layouts that include placeholders for dynamic content. Think of a template as a blueprint or skeleton of a webpage or document.

2. **Placeholder Substitution:** Within the template, placeholders (often marked with special syntax) are replaced with actual data or content. For example, a placeholder might be replaced with a user's name, a list of items, or any other dynamic data.

3. **Dynamic Content:** Instead of hardcoding content directly into the HTML or document, you use templates to define where and how dynamic content should appear. This allows for greater flexibility and reusability.

4. **Template Engines:** These are tools or libraries that process templates and inject data into them. Examples include Jinja2 (for Python), EJS (for JavaScript), and Twig (for PHP).

5. **Benefits:** Templating helps to maintain a clean separation between design and data, making it easier to manage and update content. It also promotes code reuse and consistency across different parts of a website or application.

In summary, templating is a powerful approach that simplifies the creation of dynamic, data-driven content by allowing developers to define reusable structures and populate them with varying content.

## EJS (Embedded JavaScript)

EJS, which stands for Embedded JavaScript, is a simple and flexible templating engine for Node.js that allows you to generate dynamic HTML pages. It is commonly used with Express.js, a popular web framework for Node.js, to render views and manage dynamic content on the server side.

### Key Features of EJS:

1. **Embedded JavaScript:** EJS allows you to embed JavaScript code within HTML. This makes it easy to insert dynamic content into your HTML templates. For instance, you can use EJS to loop through arrays, conditionally render content, and include partial templates.

2. **Syntax:** EJS uses a straightforward syntax to integrate JavaScript into HTML.

   ```html
   <h1>Hello, <%= name %>!</h1>
   ```

   In this example, `<%= name %>` is a placeholder that will be replaced with the value of the `name` variable when the template is rendered.

3. **Dynamic Content:** EJS allows you to pass data from your Express.js routes to your templates. For example, you can pass an object containing user data to a template, and EJS will render the HTML with that data inserted.

4. **Partials and Layouts:** EJS supports partials (reusable chunks of HTML) and layouts (template structures). This helps in organizing and reusing code across different views, making your application easier to maintain.

### EJS with Express.js

#### 1. Install EJS:

You need to install EJS via npm

```bash
  npm install ejs
```

#### 2. Configure Express to Use EJS:

In your Express application, set EJS as the view engine

```js
const express = require("express");
const app = express();

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // Directory where your EJS templates are located

// Example route
app.get("/", (req, res) => {
  res.render("index", { name: "John Doe" }); // Render 'index.ejs' template with 'name' variable
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

#### 3. Create EJS Templates:

Place your `.ejs` files in the `views` directory.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Dynamic HTML with EJS</title>
  </head>
  <body>
    <h1>Hello, <%= name %>!</h1>
  </body>
</html>
```

In this setup, when a user visits the root route (`/`), Express will render the `index.ejs` template and replace `<%= name %>` with `"John Doe"`. EJS helps you generate HTML content dynamically based on the data provided by your application, making it a powerful tool for server-side rendering in web applications.

### Passing Data to EJS

Passing data to an EJS template involves sending data from your Express.js route handler to the EJS view. This allows you to dynamically generate HTML content based on the data provided.

```js
app.get("/", (req, res) => {
  res.render("index", { user });
});
```

- `res.render('index', { user })`:
  - `'index'` is the name of the EJS template file (e.g., `views/index.ejs`).
  - `{ user }` is the data object being passed to the template. In this case, `user` is an object with properties like `name` and `notifications`.

In your EJS template file (`views/index.ejs`), you can access the properties of the `user` object directly.

```html
<h1>Welcome, <%= user.name %>!</h1>
<p>You have <%= user.notifications.length %> new notifications.</p>
<ul>
  <% user.notifications.forEach(function(notification) { %>
  <li><%= notification %></li>
  <% }); %>
</ul>
```

### EJS TAGS

EJS (Embedded JavaScript) uses various tags to allow embedding JavaScript code within HTML. These tags are used to insert `dynamic content`, `control flow`, and `include partials`.

#### 1. Output Tags `<%= expression %>`

- Outputs the value of `expression` as HTML.
- Escapes the HTML content to prevent XSS (Cross-Site Scripting) attacks.

```html
<p>Hello, <%= name %>!</p>
```

#### 2. Unescaped Output Tags `<%- expression %>`

- Outputs the value of `expression` without escaping it.
- Useful for rendering `HTML` content directly.

> EJS FILE

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <%- link %>
  </body>
</html>
```

> Node File From where we are passing link

```js
const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
const viewsPath = path.join(__dirname, "views");
app.set("views", viewsPath);

app.get("/", (req, res) => {
  res.render("index", { link: '<a href="http://example.com">Example</a>' });
});

app.listen(3000);
```

#### 3. JavaScript Code Tags `<% code %>`

- Executes the JavaScript code within the tags but does not output any result to the HTML.
- Used for control flow and other logic.
- Also known as `Scriptlet` tag

```html
<% if (user.isLoggedIn) { %>
<p>Welcome back, <%= user.name %>!</p>
<% } else { %>
<p>Please log in.</p>
<% } %>
```

#### 4. Comment Tags `<%# comment %>`

- Adds comments that are not included in the rendered HTML output.
- Useful for leaving notes within templates.

```html
<%# This is a comment %>
<p>This will be rendered as HTML.</p>
```

### Conditions in ejs

```html
<% if (user.isLoggedIn) { %>
<p>Welcome back, <%= user.name %>!</p>
<% } else { %>
<p>Please log in to continue.</p>
<% } %>
```

### Loops in ejs

```html
<ul>
  <% for (let i = 0; i < items.length; i++) { %>
  <li><%= items[i] %></li>
  <% } %>
</ul>
```

## EJS Partials

EJS (Embedded JavaScript) partials are reusable chunks of HTML that you can include in multiple EJS templates. They help you maintain consistency across your views and avoid code duplication by allowing you to define common elements once and include them wherever needed.

### Using EJS Partials

#### 1. Creating Partials

To create a partial, simply create an EJS file that contains the common HTML structure you want to reuse.

For example, you might have a `header.ejs` file for the header of your website and a `footer.ejs` file for the footer.

- `views/partials/header.ejs:`
  ```html
  <header>
    <h1>My Website</h1>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  ```
- `views/partials/footer.ejs:`

  ```html
  <footer>
    <p>&copy; 2024 My Website</p>
  </footer>
  ```

#### 2. Including Partials in Templates

You can include these partials in your main EJS templates using the `<%- include('path/to/partial') %>` syntax. The path should be relative to the views directory.

- `views/index.ejs:`

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>Home</title>
    </head>
    <body>
      <%- include('partials/header') %>

      <main>
        <h2>Welcome to My Website</h2>
        <p>This is the home page.</p>
      </main>

      <%- include('partials/footer') %>
    </body>
  </html>
  ```

In this example:

- `<%- include('partials/header') %>` includes the header partial.
- `<%- include('partials/footer') %>` includes the footer partial.

#### 3. Passing Data to Partials

You can also pass data to partials if needed. This can be done by providing an options object as the second argument to the include method.

- `views/partials/sidebar.ejs:`

  ```html
  <header>
    <h2><%= title %></h2>
    <ul>
      <% items.forEach(function(item) { %>
      <li><a href="<%= item.url %>"><%= item.name %></a></li>
      <% }); %>
    </ul>
  </header>
  ```

- `views/index.ejs`

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>Home</title>
    </head>
    <body>
      <%- include('partials/header', { title: 'Sidebar', items: [{ name: 'Item 1', url: '/item1' },
      { name: 'Item 2', url: '/item2' }] }) %>

      <main>
        <h2>Welcome to My Website</h2>
        <p>This is the home page.</p>
      </main>

      <%- include('partials/footer') %>
    </body>
  </html>
  ```

Partials in EJS are a powerful way to manage reusable content across your views, making your templates cleaner and easier to maintain.

## Serving Static Assets in Express

In Express.js, serving static assets like `images`, `CSS files`, and `JavaScript` files is straightforward using the built-in `express.static` middleware. This middleware allows you to serve static files from a directory, making them accessible to clients.

### 1. Create a Directory for Static Assets

First, create a directory in your project where you’ll store your static files. A common convention is to use a folder named `public` or `static`.

### 2. Configure Express to Serve Static Assets

In your Express application file (e.g., `app.js` or `server.js`), use the `express.static` middleware to serve static files from the directory you created.

```js
const express = require("express");
const path = require("path");
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Define a route to serve a main page
app.get("/", (req, res) => {
  res.send(
    `<!DOCTYPE html>
      <html>
          <head>
            <link rel="stylesheet" href="/styles/main.css">
          </head>
          <body>
            <img src="/images/logo.png" alt="Logo">
            <script src="/scripts/app.js"></script>
          </body>
      </html>`
  );
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```
