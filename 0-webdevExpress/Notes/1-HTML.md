# Introduction to HTML: Elements, Tags, and Boilerplate

- [Introduction to HTML: Elements, Tags, and Boilerplate](#introduction-to-html-elements-tags-and-boilerplate)
  - [Front-end:](#front-end)
  - [HTML (Hypertext Markup Language):](#html-hypertext-markup-language)
  - [HTML Elements](#html-elements)
    - [Types of Elements](#types-of-elements)
      - [1. Block-level Elements](#1-block-level-elements)
      - [2. Inline Elements](#2-inline-elements)
  - [Tags:](#tags)
  - [Attributes:](#attributes)
    - [Common HTML attributes include:](#common-html-attributes-include)
  - [HTML Boilerplate](#html-boilerplate)

<hr>

> Before we start Read this [How does the Internet work?](https://sameerkatija.medium.com/how-does-the-internet-work-d0c51f5422c3)

## Front-end:

The front-end, also known as the client-side, refers to the user interface and user experience of a website or web application. It involves the design, layout, and functionality of the website or application, as seen by the user. The front-end is built using HTML, CSS, JavaScript.

![HTML CSS AND JS](./assets/1680955326122.png)

## HTML (Hypertext Markup Language):

HTML is the standard markup language used to create web pages. It is the backbone of a website, providing the structure and content that the web browser renders to the user.

> The file extension for html is `.html`

## HTML Elements

An HTML element is a piece of content in an HTML document defined by a start tag, its content, and an end tag. Elements are the building blocks of HTML documents and are used to define the structure and content.

Example:

```
<p>This is a paragraph.</p>
```

In this example, `<p>` is the start tag, `This is a paragraph.` is the content, and `</p>` is the end tag. Together, they form a paragraph element.

### Types of Elements

In HTML, elements can be classified into various types based on their behavior, function, and purpose. Here are the main types of HTML elements:

#### 1. Block-level Elements

Block-level elements occupy the full width available and always start on a new line in the document. They are used to create larger structures and sections on a webpage.

**Examples:**

- `<div>`: A generic container for content.
- `<p>`: A paragraph of text.
- `<h1>` to `<h6>`: Heading elements for creating titles and subtitles.
- `<ul>`, `<ol>`, and `<li>`: Unordered lists, ordered lists, and list items.
- `<table>`, `<tr>`, `<th>`, `<td>`: Table and its components.
- `<header>`, `<footer>`, `<section>`, `<article>`, `<aside>`, `<nav>`: Semantic elements for defining different parts of a webpage.

```HTML
<div>
  <h1>Main Heading</h1>
  <p>This is a paragraph.</p>
</div>
```

#### 2. Inline Elements

Inline elements occupy only the space bounded by the tags defining the element and do not start on a new line. They are used to format and style specific parts of content within block-level elements.

**Examples:**

- `<span>`: A generic container for inline content.
- `<a>`: An anchor element for hyperlinks.
- `<strong>`: Bold text to indicate strong importance.
- `<em>`: Italic text to indicate emphasis.
- `<img>`: Inline image.
- `<br>`: Line break.
- `<code>`: Inline code snippet.
- `<label>`: A label for form elements.

```HTML
<p>This is a <strong>bold</strong> word in a sentence.</p>
<a href="https://www.example.com">Visit Example.com</a>
```

## Tags:

HTML tags are the building blocks of HTML. They are used to define the different elements of a web page, such as headings, paragraphs, images, links, forms, tables, and more. HTML tags consist of a opening angle bracket (<), a tag name, and a closing angle bracket (>). For example: `<p>` (paragraph tag)

## Attributes:

HTML attributes are additional pieces of information added to an HTML element to provide more context or functionality. Attributes consist of a name and a value, separated by an equals sign (=). For example:

- `<a href="(link unavailable)">Visit Example</a>` (the "href" attribute provides the link URL)
- `<img src="image.jpg" alt="An image">` (the "src" attribute provides the image URL, and the "alt" attribute provides a text description)

### Common HTML attributes include:

- id (identifies an element)
- class (assigns a CSS class)
- style (applies inline CSS)
- href (provides a link URL)
- src (provides an image or script URL)
- alt (provides a text description for accessibility)

## HTML Boilerplate

In web development, an HTML boilerplate is the basic template code that forms the foundation of any HTML document. It includes the essential tags and structure needed for a web page to function properly. Here's a basic example of an HTML boilerplate:

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Headings and Paragraph Example</title>
</head>
<body>
    <h1>This is an H1 Heading</h1>
    <h2>This is an H2 Heading</h2>
    <h3>This is an H3 Heading</h3>
    <h4>This is an H4 Heading</h4>
    <h5>This is an H5 Heading</h5>
    <h6>This is an H6 Heading</h6>
    <p>This is a paragraph. It contains some text to demonstrate the paragraph element in HTML. Paragraphs are used to separate blocks of text, making the content more readable.</p>
</body>
</html>
```
