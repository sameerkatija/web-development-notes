# CSS Styling Techniques, Compilers vs. Interpreters, and Introduction to JavaScript

- [CSS Styling Techniques, Compilers vs. Interpreters, and Introduction to JavaScript](#css-styling-techniques-compilers-vs-interpreters-and-introduction-to-javascript)
  - [CSS Internal styling](#css-internal-styling)
  - [CSS External Styling](#css-external-styling)
  - [What is a Compiler?](#what-is-a-compiler)
    - [How a Compiler Works:](#how-a-compiler-works)
  - [What is Interpreter?](#what-is-interpreter)
    - [How an Interpreter Works:](#how-an-interpreter-works)
  - [3. What is Javascript?](#3-what-is-javascript)
  - [Form](#form)
    - [Method Attribute](#method-attribute)
      - [1. `GET`](#1-get)
      - [2. `POST`](#2-post)
      - [3. PUT Method](#3-put-method)
      - [4. DELETE Method](#4-delete-method)
  - [Status Code](#status-code)
    - [List of most used status codes](#list-of-most-used-status-codes)
  - [Important Points](#important-points)

## CSS Internal styling

Internal styling in CSS refers to the practice of including CSS code directly within an HTML document, typically within the `<style>` tags in the `<head>` section. This method is useful for small-scale styling or when you want to keep styles specific to a single HTML file.

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Internal CSS Example</title>
    <style>
        /* Internal CSS goes here */
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
        }

        h1 {
            color: #333;
            text-align: center;
        }

        .container {
            width: 80%;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Internal CSS Example</h1>
        <p>This is an example of internal CSS.</p>
    </div>
</body>
</html>
```

## CSS External Styling

External styling in CSS involves linking a separate CSS file to your HTML document using `link` tag. This method is widely used for larger projects or when you want to maintain a separation between your HTML structure and styling, allowing for easier maintenance and scalability.

> Create a file `styles.css` and link it to HTML

```CSS

/* styles.css */

body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
}

h1 {
    color: #333;
    text-align: center;
}

.container {
    width: 80%;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
```

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>External CSS Example</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>External CSS Example</h1>
        <p>This is an example of external CSS.</p>
    </div>
</body>
</html>
```

## What is a Compiler?

A **compiler** is a tool that translates the entire high-level source code of a program into machine code or an intermediate code all at once. This translation happens before any of the code is executed.

### How a Compiler Works:

1. **Source Code Input:** The programmer writes code in a high-level language (like C++ or Rust).

2. **Compilation Process:** The compiler reads the entire source code and converts it into machine code.

3. **Output:** The result is an executable fh

## What is Interpreter?

An **interpreter** is a tool that translates and executes code line-by-line or statement-by-statement. It reads the source code, interprets it, and executes it on the fly.

### How an Interpreter Works:

1. **Source Code Input:** The programmer writes code in a high-level language (like Python or JS).

2. **Interpretation Process:** The interpreter reads and executes the code line-by-line or statement-by-statement.

3. **Execution:** The code is executed immediately, without producing a separate executable file.

## 3. What is Javascript?

JavaScript is a scripting language designed to enable interactive web pages and web applications. It is an essential part of web technology, as it controls the behaviour of the web, along with HTML and CSS.

> Java and Javascript both are different languages. JS is a scripting language.

> The file extension for Js file is `.js`

> Read an article to know [What is the Difference Between a Scripting Language and a Programming Language? ](https://sameerkatija.medium.com/what-is-the-difference-between-scripting-languages-and-programming-languages-9caf55377baa)

## Form

An HTML form is used to collect user input. The user input is most often sent to a server for processing.

### Method Attribute

In HTML forms, the `method=""` attribute specifies how to send form data to the server. The HTTP request methods supported are `GET`, `POST`, `PUT`, and `DELETE`, each serving different purposes.

#### 1. `GET`

`Purpose:` Retrieve data from the server.

`Usage:` Used for form submissions where the data is not sensitive and you want to retrieve information. Data is appended to the URL as query parameters.

```HTML
<form method="GET" action="/search">
  <label for="query">Search:</label>
  <input type="text" id="query" name="query">
  <button type="submit">Search</button>
</form>
```

`What Happens:` When you submit the form, the form data is appended to the URL:

```
index.html/search?query=example
```

#### 2. `POST`

`Purpose:` Submit data to be processed by the server.

`Usage:` Used for form submissions where you need to send data to be processed, such as creating resources. Data is sent in the body of the request.

```HTML
<form method="POST" action="/submit">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username">
  <button type="submit">Submit</button>
</form>
```

`What Happens:` When you submit the form, the form data is sent in the body of the request.

#### 3. PUT Method

`Purpose:` Update an existing resource or create a resource if it does not exist.
h
`Usage:` Not directly supported by HTML forms, but can be simulated using JavaScript.

#### 4. DELETE Method

`Purpose:` Delete a resource from the server.

`Usage:` Not directly supported by HTML forms, but can be simulated using JavaScript.

| Method |           Purpose           |   Date Location    |       HTML Support       |             Use Case              |
| :----: | :-------------------------: | :----------------: | :----------------------: | :-------------------------------: |
|  GET   |        Retrieve data        | URL (query string) |           Yes            |       Search functionality        |
|  POST  | Submit data for processing  |    Request body    |           Yes            |  Form submission, data creation   |
|  PUT   | Update or create a resource |    Request body    | No (requires JavaScript) | Updating user profile information |
| DELETE |      Remove a resource      |        N/A         | No (requires JavaScript) |      Deleting a user or item      |

## Status Code

A status code is a three-digit number returned by the server to indicate the result of the HTTP request. The first digit of the code indicates the general category of the response, while the last two digits provide additional detail about the response.

HTTP status codes are part of the response sent by a web server to a client (such as a browser) after it makes a request. These codes are issued to indicate the outcome of the request, and they fall into various categories based on the type of response.

| Status Code |     Range     |                       Category Description                       |
| :---------: | :-----------: | :--------------------------------------------------------------: |
|     1xx     | Informational |         The request was received and is being processed.         |
|     2xx     |    Success    | The request was successfully received, understood, and accepted. |
|     3xx     |  Redirection  |    Further action needs to be taken to complete the request.     |
|     4xx     | Client Error  |     The request contains bad syntax or cannot be fulfilled.      |
|     5xx     | Server Error  |          The server failed to fulfill a valid request.           |

### List of most used status codes

| Status Code |         Name          |                                          Description                                          |
| :---------: | :-------------------: | :-------------------------------------------------------------------------------------------: |
|     200     |          ok           |                                  The request has succeeded.                                   |
|     401     |     Unauthorized      |                           The request requires user authentication.                           |
|     403     |       Forbidden       |                The server understands the request but refuses to authorize it.                |
|     404     |       Not Found       |                          The requested resource could not be found.                           |
|     500     | Internal Server Error | The server encountered an unexpected condition that prevented it from fulfilling the request. |

## Important Points

- Inorder to link the css file with html, use the `link` tag inside head and give the address of the file inside `href` attribute
- similarily to use Js use the `script` tag inside the body and use the address inside the `src` attribute to point to the file
