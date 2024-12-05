# Introduction to MongoDB and Mongoose: Basics, Setup, and Advanced Concepts

- [Introduction to MongoDB and Mongoose: Basics, Setup, and Advanced Concepts](#introduction-to-mongodb-and-mongoose-basics-setup-and-advanced-concepts)
  - [WHY are we learning MongoDB?](#why-are-we-learning-mongodb)
  - [What is BSON?](#what-is-bson)
  - [Basic MongoDB Commands](#basic-mongodb-commands)
    - [Show Databases](#show-databases)
    - [Create or Switch to a Database](#create-or-switch-to-a-database)
    - [Show Collections (Tables in relational terms)](#show-collections-tables-in-relational-terms)
    - [Create or Insert a Document](#create-or-insert-a-document)
    - [Find Documents](#find-documents)
    - [Update Documents](#update-documents)
    - [Delete Documents](#delete-documents)
    - [Drop a Collection](#drop-a-collection)
    - [Drop a Database](#drop-a-database)
  - [Connecting MongoDb with Express](#connecting-mongodb-with-express)
  - [Object Data Modeling (ODM)](#object-data-modeling-odm)
  - [What is mongoose?](#what-is-mongoose)
    - [Key Features of Mongoose](#key-features-of-mongoose)
      - [1. Schema Definition](#1-schema-definition)
      - [2. Models](#2-models)
      - [3. Validation](#3-validation)
      - [4. Middleware (Hooks)](#4-middleware-hooks)
      - [5. Query Building](#5-query-building)
      - [6. Population (Joins)](#6-population-joins)
      - [7. Async/Await Support](#7-asyncawait-support)
  - [connect MongoDB with `mongoose`](#connect-mongodb-with-mongoose)
  - [Defining a Mongoose Model](#defining-a-mongoose-model)
  - [Implement CRUD Operations](#implement-crud-operations)
  - [references in mongodb](#references-in-mongodb)
    - [Understanding References in MongoDB](#understanding-references-in-mongodb)
    - [Example:](#example)

## WHY are we learning MongoDB?

- Mongo is very commonly used with Node and Express( MEAN & MERN stacks)
- It's easy to get started with (though it can be tricky to truly master)
- It plays particularly well with JavaScript
- MongoDB’s popularity: its strong and active developer community.

> To install mongo refer to any youtube video for mongo installation or follow the [documentation](https://www.mongodb.com/try/download/community)

## What is BSON?

BSON (Binary JSON) is a binary-encoded serialization format used to represent documents in MongoDB, a popular NoSQL database. BSON extends JSON (JavaScript Object Notation) to provide additional data types and is designed for efficient encoding and decoding.

## Basic MongoDB Commands

In the MongoDB Shell

### Show Databases

```bash
show dbs
```

### Create or Switch to a Database

```bash
use mydatabase
```

This command switches to `mydatabase`. If `mydatabase` does not exist, MongoDB will create it when you first store data.

### Show Collections (Tables in relational terms)

```bash
show collections
```

### Create or Insert a Document

```bash
db.mycollection.insertOne({ name: "John Doe", age: 30 })
```

This command inserts a single document into `mycollection`.

### Find Documents

```bash
db.mycollection.find()
```

This command retrieves all documents in `mycollection`.

To format the output in a more readable way:

```bash
db.mycollection.find().pretty()
```

### Update Documents

```bash
db.mycollection.updateOne({ name: "John Doe" }, { $set: { age: 31 } })
```

This command updates a single document where `name` is `"John Doe"`, setting the `age` field to `31`.

### Delete Documents

```bash
db.mycollection.deleteOne({ name: "John Doe" })
```

This command deletes a single document where `name` is `"John Doe"`.

### Drop a Collection

```bash
db.mycollection.drop()
```

### Drop a Database

```bash
db.dropDatabase()
```

## Connecting MongoDb with Express

```js
const { MongoClient } = require("mongodb");

async function main() {
  const client = new MongoClient("mongodb://localhost:27017");
  await client.connect();
  const db = client.db("test");
  const collection = db.collection("users");
  const result = await collection.find({ age: { $gt: 18 } }).toArray();
  console.log(result);
  await client.close();
}

main().catch(console.error);
```

> Note: We won't use this approch instead we will use mongoose.

## Object Data Modeling (ODM)

Object Data Modeling (ODM) is a programming pattern used to manage data in NoSQL databases, specifically MongoDB. An ODM provides an abstraction layer that maps database documents to application objects, allowing developers to interact with the database using higher-level programming constructs instead of raw database queries.

## What is mongoose?

> Let's face it, writing MongoDB validation, casting and business logic boilerplate is a drag. That's why we wrote Mongoose. [Reference](https://mongoosejs.com/)

Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a higher-level abstraction over the native MongoDB driver, making it easier to interact with MongoDB by defining `schemas`, `models`, and performing various database operations.

### Key Features of Mongoose

#### 1. Schema Definition

Allows you to define the structure of your MongoDB documents with a schema. This includes specifying fields, their types, default values, and validation rules.

#### 2. Models

Converts a schema into a model, which is a constructor for creating and querying documents. Models are used to interact with a specific collection in the databas

#### 3. Validation

Mongoose provides built-in validation for schemas, such as required fields, string lengths, and custom validators.

#### 4. Middleware (Hooks)

Pre/Post Hooks Allows you to define middleware functions that run before or after certain events (e.g., saving a document, validating data).

#### 5. Query Building

Provides a fluent API for building and executing queries, including filtering, sorting, and pagination.

#### 6. Population (Joins)

Supports document population to handle relationships between documents, similar to `SQL joins`.

#### 7. Async/Await Support

Fully supports promises and async/await syntax for cleaner, asynchronous code.

In Summary, Mongoose is a powerful and flexible library that simplifies working with MongoDB in Node.js applications. It provides features such as schema definition, validation, middleware, and a rich query interface, making it easier to build and maintain complex applications with MongoDB. Its ODM approach helps developers manage data in a structured and consistent way, leveraging the benefits of both MongoDB's NoSQL capabilities and a structured schema system.

## connect MongoDB with `mongoose`

Install the [mongoose](https://mongoosejs.com/) package

```bash
  npm i mongoose
```

```js
// app.js

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB using Mongoose
const mongoURI = "mongodb://localhost:27017/mydatabase"; // Local MongoDB URI
// If using MongoDB Atlas, use the connection string provided by Atlas
// const mongoURI = 'mongodb+srv://<username>:<password>@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority';

mongoose
  .connect(URI)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.error("Database connection error:", err));

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello, Express with MongoDB!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

## Defining a Mongoose Model

1. **Create a Model File:** Create a new directory named `models` and add a file named `User.js` to define a Mongoose model.
2. **Define a Mongoose Model:**

   ```js
   // models/User.js

   const mongoose = require("mongoose");

   const userSchema = new mongoose.Schema({
     name: { type: String, required: true },
     email: { type: String, required: true, unique: true },
     password: { type: String, required: true },
   });

   const User = mongoose.model("User", userSchema);

   module.exports = User;
   ```

## Implement CRUD Operations

```js
// routes/users.js

const express = require("express");
const app = express();
const User = require("../models/User");

// Create a new user
app.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a single user by ID
app.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a user by ID
app.put("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) return res.status(404).json({ error: "User not found" });
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a user by ID
app.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
```

## references in mongodb

In MongoDB, the concept of references (often abbreviated as ref) is used to establish relationships between documents across collections. Unlike relational databases where foreign keys are used to establish relationships between tables, MongoDB uses a different approach due to its document-oriented nature.

### Understanding References in MongoDB

- References involve storing the ObjectId of one document within another. This is useful for maintaining relationships where the referenced data is large or frequently updated.
- Example: A `Post` document with a reference to an `Author` document.

### Example:

- **User Model:**

  ```js
  // models/User.js
  const mongoose = require("mongoose");

  const userSchema = new mongoose.Schema({
    name: String,
    email: String,
  });

  const User = mongoose.model("User", userSchema);

  module.exports = User;
  ```

- **Post Model:**

  ```js
  // models/Post.js
  const mongoose = require("mongoose");

  const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Reference to User
  });

  const Post = mongoose.model("Post", postSchema);

  module.exports = Post;
  ```

- **Creating and Saving Documents:**

  ```js
  // app.js or another script file

  const mongoose = require("mongoose");
  const User = require("./models/User");
  const Post = require("./models/Post");

  mongoose.connect("mongodb://localhost:27017/mydatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Create a User
  const createUser = async () => {
    const user = new User({
      name: "John Doe",
      email: "john.doe@example.com",
    });
    return await user.save();
  };

  // Create a Post that references the User
  const createPost = async (userId) => {
    const post = new Post({
      title: "My First Post",
      content: "This is the content of the post.",
      author: userId, // Reference to the User's _id
    });
    return await post.save();
  };

  // Usage example
  (async () => {
    const user = await createUser();
    const post = await createPost(user._id);
    console.log("User:", user);
    console.log("Post:", post);
  })();
  ```

- **Querying with References:**

  To query and populate references, use Mongoose's `.populate()` method.

  ```js
  // Retrieve a Post with populated Author
  const getPostWithAuthor = async (postId) => {
    const post = await Post.findById(postId).populate("author").exec();
    console.log("Post with Author:", post);
  };

  // Usage example
  (async () => {
    const post = await Post.findOne().exec(); // Find a post
    await getPostWithAuthor(post._id); // Get post with populated author
  })();
  ```
