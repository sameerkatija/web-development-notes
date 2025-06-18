# Comprehensive Guide to Authentication and Security in Web Applications

- [Comprehensive Guide to Authentication and Security in Web Applications](#comprehensive-guide-to-authentication-and-security-in-web-applications)
  - [Authentication Vs. Authorization](#authentication-vs-authorization)
    - [Authentication](#authentication)
    - [Authorization](#authorization)
    - [Summary](#summary)
  - [Encryption](#encryption)
  - [Decryption](#decryption)
  - [Hashing](#hashing)
  - [`dotenv` npm Package](#dotenv-npm-package)
    - [Create a `.env` File](#create-a-env-file)
    - [Using env variables in the app](#using-env-variables-in-the-app)
  - [What is `Bcrypt` npm Package?](#what-is-bcrypt-npm-package)
    - [Key Features](#key-features)
    - [Basic Usage](#basic-usage)
    - [Summary](#summary-1)
  - [Auth from Scratch](#auth-from-scratch)
    - [Step 1: Install Required Packages](#step-1-install-required-packages)
    - [Step 2: Set Up Your Express Application](#step-2-set-up-your-express-application)
    - [Step 3: User Registration](#step-3-user-registration)
    - [Step 4: User Login](#step-4-user-login)
    - [Step 5: Protect Routes](#step-5-protect-routes)
    - [Step 6: User Logout](#step-6-user-logout)
    - [Summary](#summary-2)
  - [JWT (JSON Web Tokens)](#jwt-json-web-tokens)
    - [Step 1: Install Required Packages](#step-1-install-required-packages-1)
    - [Step 2: Using JWT](#step-2-using-jwt)

## Authentication Vs. Authorization

Authentication and Authorization are two distinct concepts in security, often used together in web applications and systems.

### Authentication

The process of verifying the identity of a user or system.

- **Purpose: **
  - To ensure that users are who they claim to be.
  - Examples: - Logging in with a username and password.
    Using multi-factor authentication (MFA) methods, like SMS codes or authenticator apps.

### Authorization

The process of determining whether an authenticated user has permission to access specific resources or perform certain actions.

- **Purpose:**
  - To control user access to resources based on their identity and roles.
  - Examples:
    - Allowing only admins to access certain admin panels.
    - Granting read-only access to regular users while allowing write access to editors.

### Summary

- **Authentication = Identity Verification:** Confirms who you are.
- **Authorization = Access Control**: Determines what you can do.

Both processes are essential for securing applications and ensuring that users have the appropriate level of access.

## Encryption

The process of converting plaintext (readable data) into ciphertext (encoded data) using an algorithm and a key.

> Encryption: Two-way process for confidentiality; reversible with a key.

## Decryption

The reverse process of encryption, converting ciphertext back into plaintext using a decryption key.

## Hashing

The process of converting data into a fixed-size string of characters (a hash) using a hash function.

> Hashing: One-way process for integrity checks; not reversible.

## `dotenv` npm Package

Using the dotenv package allows you to manage environment variables more securely and conveniently.

```bash
  npm i dotenv
```

### Create a `.env` File

- Create a `.env` file in your project root and add your secret key

  ```
  PORT=3000
  ```

### Using env variables in the app

```js
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config(); // Load environment variables

const app = express();
const PORT = process.env.PORT; // using the .env variable

app.use(express.json());
```

## What is `Bcrypt` npm Package?

Bcrypt is a popular npm package used for hashing passwords securely. It provides a simple API for creating hashed passwords and verifying them, making it a crucial tool for user authentication in web applications.

### Key Features

- **Password Hashing:** Uses the bcrypt algorithm to hash passwords, making them difficult to crack.
- **Salt Generation:** Automatically generates a unique salt for each password, enhancing security against pre-computed attacks (rainbow tables).
- **Adaptive Cost Factor:** Allows you to set a complexity factor that increases the hashing time, making it more resistant to brute-force attacks.

### Basic Usage

To use the package, we need to install it.

```bash
  npm install bcrypt
```

- **Hashing a Password**

  ```js
  const bcrypt = require("bcrypt");
  const saltRounds = 10; // Cost factor

  bcrypt.hash("yourPassword", saltRounds, (err, hash) => {
    // Store hash in your password DB
  });
  ```

- **Verifying a Password**

  ```js
  bcrypt.compare("yourPassword", storedHash, (err, result) => {
    // result will be true if the password matches
  });
  ```

### Summary

The Bcrypt npm package provides a secure and efficient way to hash and verify passwords, making it essential for secure user authentication in applications.

## Auth from Scratch

Implementing authentication in web applications isn’t a piece of cake. It involves navigating the complexities of user identity verification, password management, and data security.

We’ll explore how to set up basic auth in Express application using `express-session`, `cookie-parser`, and `bcrypt`.

### Step 1: Install Required Packages

First, install the necessary packages

```bash
  npm install express express-session cookie-parser bcrypt connect-flush
```

### Step 2: Set Up Your Express Application

Create a basic Express app with session and cookie support

```js
const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");

const app = express();
const PORT = 3000;

app.use(cookieParser());
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded bodies
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set to true if using HTTPS
  })
);

// Connect to MongoDB using Mongoose
const mongoURI = "mongodb://localhost:27017/mydatabase";
mongoose
  .connect(URI)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.error("Database connection error:", err));
```

### Step 3: User Registration

```js
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
  const user = new User({ username, password: hashedPassword });
  await user.save();
  req.flash("success", "User is registered successfully!");
  res.send("User registered successfully!");
});
```

### Step 4: User Login

```js
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.cookie("authToken", "userId is loggedIn", {
      httpOnly: true,
      secure: false,
    }); // Set cookie
    res.send("Logged in successfully!");
  } else {
    res.send("Invalid username or password.");
  }
});
```

### Step 5: Protect Routes

Create a middleware to protect routes

```js
function isAuthenticated(req, res, next) {
  if (req.cookies.authToken) {
    return next(); // User is authenticated
  }
  res.status(401).send("Unauthorized");
}

// Example of a protected route
app.get("/protected", isAuthenticated, (req, res) => {
  res.send(`Hello, Name! This is a protected route.`);
});
```

### Step 6: User Logout

```js
app.post("/logout", (req, res) => {
  res.clearCookie("authToken"); // Clear the cookie
  res.send("Logged out successfully!");
});
```

### Summary

This approach eliminates the need for `server-side session management` and leverages cookies to maintain user authentication, enhancing scalability for applications.

While `cookie-based` authentication is scalable and can simplify certain aspects of session management, it introduces security challenges and complexities that need to be addressed. Implementing proper security measures, such as using HTTPS, securing cookies, and protecting against XSS and CSRF, is essential to mitigate these drawbacks.

## JWT (JSON Web Tokens)

JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as a JSON object. It is commonly used for authentication and information exchange in web applications.

Using JSON Web Tokens (JWT) for authentication can help mitigate some of the drawbacks associated with cookie-based authentication.

JWTs provide a more flexible and secure approach to authentication by reducing the risks associated with XSS and CSRF, allowing for better token expiration management, and simplifying multi-service architectures. However, developers must still implement best practices for secure token storage and management to fully benefit from JWT's advantages.

### Step 1: Install Required Packages

```bash
  npm install jsonwebtoken
```

### Step 2: Using JWT

- Modify the Login Route

  ```js
  app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
      res.cookie("authToken", token, { httpOnly: true, secure: false }); // Set cookie
      res.send("Logged in successfully!");
    } else {
      res.send("Invalid username or password.");
    }
  });
  ```

- Modify the middleware to protect routes

  ```js
  function isAuthenticated(req, res, next) {
    const token = req.cookies.authToken;
    if (!token) return res.status(401).send("Unauthorized");

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) return res.status(403).send("Forbidden");
      req.username = decoded.username; // Attach username to request
      next();
    });
  }
  ```

This example shows a simple implementation of JWT for user authentication, including registration, login, and a protected route. Users receive a token upon successful login, which they can use to access secured endpoints.
