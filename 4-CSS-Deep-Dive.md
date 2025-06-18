# Deep Dive into CSS: Selectors, Combinators, Colors, and Fonts

- [Deep Dive into CSS: Selectors, Combinators, Colors, and Fonts](#deep-dive-into-css-selectors-combinators-colors-and-fonts)
  - [CSS](#css)
  - [CSS Selectors](#css-selectors)
    - [1. Element Selector:](#1-element-selector)
    - [2. Class Selector:](#2-class-selector)
    - [3. ID Selector](#3-id-selector)
    - [4 Attribute Selector:](#4-attribute-selector)
    - [5. Descendant Selector:](#5-descendant-selector)
    - [6. Adjacent Sibling Selector:](#6-adjacent-sibling-selector)
    - [7. Pseudo-classes:](#7-pseudo-classes)
    - [8. Pseudo-elements:](#8-pseudo-elements)
    - [9. Universal Selectors](#9-universal-selectors)
  - [CSS combinators](#css-combinators)
    - [1 Descendant Combinator (Space) `" "`](#1-descendant-combinator-space--)
      - [What it looks like:](#what-it-looks-like)
      - [What it means:](#what-it-means)
    - [2. Child Combinator (\>)](#2-child-combinator-)
      - [What it looks like:](#what-it-looks-like-1)
      - [What it means:](#what-it-means-1)
    - [3. Adjacent Sibling Combinator (+)](#3-adjacent-sibling-combinator-)
      - [What it looks like:](#what-it-looks-like-2)
      - [What it means:](#what-it-means-2)
    - [4. General Sibling Combinator (~)](#4-general-sibling-combinator-)
      - [What it looks like:](#what-it-looks-like-3)
      - [What it means:](#what-it-means-3)
  - [CSS Colors](#css-colors)
    - [CSS Color Names](#css-color-names)
    - [Other ways to represnt colors](#other-ways-to-represnt-colors)
  - [Units](#units)
    - [Pixal](#pixal)
    - [Default Values:](#default-values)
  - [Font](#font)
    - [Basic Font Properties](#basic-font-properties)
      - [Font Family:](#font-family)
      - [Font Size:](#font-size)
      - [Font Weight:](#font-weight)
      - [Font Style:](#font-style)
      - [Text Transform:](#text-transform)
      - [Text Decoration:](#text-decoration)
    - [Advanced Font Properties](#advanced-font-properties)
      - [Line Height:](#line-height)
      - [Letter Spacing:](#letter-spacing)
      - [Word Spacing:](#word-spacing)
      - [Text-align](#text-align)
  - [Using Google Fonts](#using-google-fonts)
    - [1. Importing google font using `LINK` TAG](#1-importing-google-font-using-link-tag)
    - [1. Importing google font using CSS](#1-importing-google-font-using-css)
  - [What is Inheritance?](#what-is-inheritance)
  - [CSS Specificity](#css-specificity)
    - [How Specificity is Calculated](#how-specificity-is-calculated)
    - [Specificity Calculation Rules](#specificity-calculation-rules)
  - [The `height` and `width` Properties:](#the-height-and-width-properties)
  - [The display Property](#the-display-property)

## CSS

CSS (Cascading Style Sheets) is a language used for describing the presentation of a document written in HTML or XML (including XML dialects like SVG or XHTML). It defines how elements are displayed on a web page, including their layout, colors, fonts, and other visual aspects.

## CSS Selectors

CSS Selectors are patterns used to select and style elements in an HTML document. They specify which elements in the HTML should be affected by the CSS rules defined. Selectors target specific HTML elements based on their tag name, class, ID, attributes, and relationship with other elements.

### 1. Element Selector:

Targets all instances of a specified HTML element.

```CSS
/* Select all p and give them color blue */
p {
    color: blue;
}
```

### 2. Class Selector:

Targets elements with a specific class attribute.

```CSS
.my-class {
    font-size: 18px;
}
```

### 3. ID Selector

Targets a single element with a specific ID attribute.

```CSS
#my-id {
    background-color: yellow;
}
```

### 4 Attribute Selector:

Targets elements with a specific attribute or attribute value.

```CSS
input[type="text"] {
    border: 1px solid #ccc;
}
```

### 5. Descendant Selector:

Targets elements that are descendants of another specified element.

```CSS
.container p {
    margin-bottom: 10px;
}

```

### 6. Adjacent Sibling Selector:

Targets an element that is immediately preceded by a specified sibling element.

```CSS
h1 + p {
    margin-top: 0;
}
```

### 7. Pseudo-classes:

Target elements based on their state or position in the document.

```CSS
a:hover {
    color: red;
}

li:first-child {
    font-weight: bold;
}
```

### 8. Pseudo-elements:

Target certain parts of an element (like the first letter or first line) or generate content that is not in the HTML.

```CSS
p::first-line {
    font-weight: bold;
}

p::before {
    content: "Note: ";
    font-weight: bold;
}
```

### 9. Universal Selectors

The universal selector (\*) selects all HTML elements on the page.

```CSS
* {
    margin: 0;
    padding: 0;
}
```

## CSS combinators

CSS combinators are like special words that tell the css engine how to select certain elements based on their relationships with other elements.

### 1 Descendant Combinator (Space) `" "`

#### What it looks like:

```CSS
/* Select all the p inside div */
div p {
    /* give css */
}
```

#### What it means:

> "Find all P's inside div."

### 2. Child Combinator (>)

#### What it looks like:

```CSS
/* Select all the p that are direct child of div */
div > p {
    /* give css */
}
```

#### What it means:

> "Find all p that are direct children of Div."

### 3. Adjacent Sibling Combinator (+)

#### What it looks like:

```css
/* select the div which is right after h1 */
h1 + div {
  /* css style */
}
```

#### What it means:

> "Find div that comes right after h1."

### 4. General Sibling Combinator (~)

#### What it looks like:

```css
/* select the div which comes right after h1 */
h1 ~ div {
  /* css style */
}
```

#### What it means:

> "Find div that are siblings of h1."

## CSS Colors

Colors are specified using predefined color names, or RGB, HEX, HSL, RGBA, HSLA values.

### CSS Color Names

- <span style="color: Tomato;">Tomato</span>
- <span style="color: Orange;">Orange</span>
- <span style="color: DodgerBlue;">DodgerBlue</span>
- <span style="color: MediumSeaGreen;">MediumSeaGreen</span>

```CSS
* {
    color: MediumSeaGreen;
}

```

### Other ways to represnt colors

```HTML
<h1 style="background-color:rgb(255, 99, 71);">...</h1>
<h1 style="background-color:#ff6347;">...</h1>
<h1 style="background-color:hsl(9, 100%, 64%);">...</h1>

<h1 style="background-color:rgba(255, 99, 71, 0.5);">...</h1>
<h1 style="background-color:hsla(9, 100%, 64%, 0.5);">...</h1>
```

## Units

- px: Pixels (absolute)
- em: Relative to the font size of the element (1 em = current font size)
- rem: Relative to the font size of the root element (1 rem = root font size)

### Pixal

A pixel is the smallest unit of measure in digital imaging, used to describe the resolution of screens (like computer monitors, smartphones, etc.) and the size of elements on those screens in web design.

### Default Values:

> `1em`: By default, `1em` is equal to the computed font-size of the element itself.

> `1rem`: By default, `1rem` is equal to the font-size of the root (html) element, which is typically `16px` in most browsers.

## Font

In CSS, font styling allows you to control the appearance of text on web pages.

### Basic Font Properties

#### Font Family:

Specifies the font family to be used for text.

```css
body {
  font-family: Arial, Helvetica, sans-serif;
}
```

#### Font Size:

Sets the size of the font.

```css
h1 {
  font-size: 36px;
}
```

#### Font Weight:

Specifies the thickness of the font.

```css
p {
  font-weight: bold; /* or lighter, normal, bold, bolder, 100-900 */
}
```

#### Font Style:

Specifies the style of the font (normal or italic).

```css
p {
  font-style: italic;
}
```

#### Text Transform:

Controls the capitalization of text.

```css
.uppercase {
  text-transform: uppercase;
}
```

#### Text Decoration:

Adds decorations like underline or line-through.

```css
a {
  text-decoration: none; /* underline, overline, line-through, blink */
}
```

### Advanced Font Properties

#### Line Height:

Sets the height of each line of text.

```css
.paragraph {
  line-height: 1.6; /* Can be unitless number, %, or px/em/rem */
}
```

#### Letter Spacing:

Adjusts the space between characters.

```css
.heading {
  letter-spacing: 2px;
}
```

#### Word Spacing:

Adjusts the space between words.

```css
.content {
  word-spacing: 5px;
}
```

#### Text-align

Aligns the text

```css
.content {
  text-align: center; /* left, right ,center, justify */
}
```

## Using Google Fonts

We can use the custom fonts provided by [google](https://fonts.google.com/).

### 1. Importing google font using `LINK` TAG

```HTML

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Kalnia+Glaze:wght@100..700&display=swap" rel="stylesheet">

```

After importing it, we can use it inside css

```CSS
p {
     font-family: "Kalnia Glaze", serif;
}
```

### 1. Importing google font using CSS

```CSS
@import url('https://fonts.googleapis.com/css2?family=Kalnia+Glaze:wght@100..700&display=swap');

p {
     font-family: "Kalnia Glaze", serif;
}

```

## What is Inheritance?

Inheritance in CSS refers to the ability of child elements to adopt the styles of their parent elements. This means that if a parent element has a certain CSS property, its child elements will automatically have that property unless they have their own styles that override it.

## CSS Specificity

CSS specificity is a set of rules used by browsers to determine which CSS rules to apply when multiple rules could apply to the same element. The specificity of a selector determines its weight or importance in the CSS cascade.

### How Specificity is Calculated

Specificity is calculated using a four-part value that is based on the types of selectors used. These are:

1. Inline Styles (a)
2. IDs (b)
3. Classes, Pseudo-classes, and Attributes (c)
4. Element and Pseudo-elements (d)

The specificity is represented as a value in the format `(a, b, c, d)`

### Specificity Calculation Rules

- **Inline Styles**: An inline style has the highest specificity. It is considered as `(1, 0, 0, 0)`.
- **ID Selectors**: An ID selector contributes to the second most specific level. Each ID selector adds `(0, 1, 0, 0)`.
- **Class Selectors**, Pseudo-classes, and Attribute Selectors: Each of these selectors adds `(0, 0, 1, 0)`.
- **Element Selectors and Pseudo-elements**: These have the lowest specificity. Each element or pseudo-element selector adds `(0, 0, 0, 1)`.

```CSS
/* Specificity: (0, 0, 0, 1) */
div {
  color: blue;
}

/* Specificity: (0, 0, 1, 0) */
p {
  color: red;
}

/* Specificity: (0, 1, 0, 0) */
#myID {
  color: green;
}

/* Specificity: (0, 0, 1, 1) */
p span {
  color: yellow;
}

/* Specificity: (1, 0, 0, 0) */
div p {
  color: orange;
}
```

## The `height` and `width` Properties:

The height and width properties control the dimensions of an element.

```CSS
div {
  height: 100px;
  width: 200px;
}
```

## The display Property

The `display` property specifies the display behavior of an element and determines how it will be rendered and how it interacts with other elements.

```CSS
element {
  display: value;
}
```

- **block:** block element take up full width of container
- **inline:** do not start on new line, only take space needed, can't set `heigth` or `width`.
- **inline-block:** similar to `inline`, but can have width and height defined.
- **none:** element's wont be visible, doesn't take up space.

```CSS
/* display none */
div {
  display: none
}

/* display inline */
div {
  display: inline
}

/* display inline-block */
div {
  display: inline-block
}

/* display block */
div {
  display: block
}

```
