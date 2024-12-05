# Exploring HTML Semantics, HTTP Basics, and CSS Styling

- [Exploring HTML Semantics, HTTP Basics, and CSS Styling](#exploring-html-semantics-http-basics-and-css-styling)
  - [HTML Semantic Elements](#html-semantic-elements)
  - [HTTP](#http)
    - [1. Communication:](#1-communication)
    - [2. Stateless Protocol:](#2-stateless-protocol)
    - [3. Request-Response Model:](#3-request-response-model)
    - [4. URLs:](#4-urls)
    - [5. Methods:](#5-methods)
    - [6. Headers:](#6-headers)
    - [7. Versions:](#7-versions)
  - [HTTPS](#https)
  - [href](#href)
  - [CSS (Cascading Style Sheets)](#css-cascading-style-sheets)
  - [CSS Inline-styling](#css-inline-styling)

## HTML Semantic Elements

Semantic elements clearly describe their meaning in a human- and machine-readable way. They provide better accessibility and SEO benefits by defining the structure and purpose of content.

**Example:**

- `<header>`: Defines the header of a section or page.
- `<footer>`: Defines the footer of a section or page.
- `<article>`: Represents an independent piece of content.
- `<section>`: Defines a section of content.
- `<nav>`: Represents navigation links.
- `<aside>`: Defines content that is tangentially related to the main content.

## HTTP

HTTP stands for Hypertext Transfer Protocol. It is an application protocol that defines the format and rules for communication between web browsers (clients) and web servers. Here’s a breakdown of its key components and functionality:

### 1. Communication:

HTTP enables clients (such as web browsers) to request resources, such as web pages, images, videos, etc., from web servers. It also allows servers to respond to those requests and transfer the requested resources back to the clients.

### 2. Stateless Protocol:

HTTP is stateless, meaning each request from a client to a server is treated independently without any knowledge of previous requests. This simplifies implementation but requires additional mechanisms (like cookies or sessions) for maintaining state across multiple requests.

### 3. Request-Response Model:

HTTP operates on a request-response model where clients send HTTP requests to servers to request resources, and servers respond with HTTP responses containing the requested resources or error messages.

### 4. URLs:

Uniform Resource Locators (URLs) are used within HTTP to specify the location of resources on the web. URLs typically start with `http://` (for HTTP connections) or `https://` (for secure HTTP connections) followed by the domain name and path to the resource.

### 5. Methods:

HTTP defines several request methods (or verbs) that indicate the desired action to be performed on a resource. Common methods include `GET` (retrieve a resource), `POST` (submit data to be processed), `PUT` (update a resource), `DELETE` (remove a resource), and others.

### 6. Headers:

HTTP messages (requests and responses) include headers that provide additional information about the message, such as the type of content being sent (`Content-Type`) or accepted (`Accept`), authentication credentials, caching directives, and more.

### 7. Versions:

There have been multiple versions of the HTTP protocol over the years, with HTTP/1.1 being the most widely used until recent advancements like HTTP/2 and HTTP/3 (also known as QUIC) were introduced to improve performance, security, and efficiency of web communication.

## HTTPS

HTTPS: Stands for HyperText Transfer Protocol Secure. It is the secure version of HTTP, where data exchanged between a web browser and a website is encrypted. This encryption helps protect sensitive information such as login credentials, payment details, and other personal information from being intercepted by unauthorized parties. Websites that use HTTPS have URLs starting with `"https://"` instead of `"http://"`.

## href

href: Stands for Hypertext Reference. It is an attribute of the HTML `<a>` (anchor) element, which specifies the URL (Uniform Resource Locator) of the page the link goes to. The href attribute can also be used with other HTML elements, such as `<link>` and `<area>`, to specify the destination of links or to define where a linked resource is located.

```HTML
<a href="https://www.example.com">Visit Example</a>
```

## CSS (Cascading Style Sheets)

CSS, or Cascading Style Sheets, is a language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG or XHTML). It defines how elements should be displayed on a screen, in print, or even read by speech-based browsers.

> File Extension for css file is `.css`

## CSS Inline-styling

Inline styling in HTML refers to the use of the `style` attribute directly within an HTML tag to apply CSS styles to a specific element. This method allows you to apply CSS rules directly to an individual element without needing an external stylesheet or a `<style>` block within the HTML document.

```HTML
<p style="color: red; font-size: 16px;">
    This is a styled <span style="color: orangered">paragraph.</span>
</p>

```
