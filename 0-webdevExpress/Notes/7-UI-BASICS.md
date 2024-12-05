# Exploring Web Design Principles: Typography, Color Theory, and CSS Techniques

- [Exploring Web Design Principles: Typography, Color Theory, and CSS Techniques](#exploring-web-design-principles-typography-color-theory-and-css-techniques)
  - [Web Design Fundamentals](#web-design-fundamentals)
  - [CRAP (Principles of Design)](#crap-principles-of-design)
    - [1. Contrast:](#1-contrast)
    - [2. Repetition:](#2-repetition)
    - [3. Alignment:](#3-alignment)
    - [4. Proximity:](#4-proximity)
  - [Typography](#typography)
  - [Design Related Games](#design-related-games)
  - [Color Theory in web design](#color-theory-in-web-design)
    - [1. Color Wheel Basics](#1-color-wheel-basics)
    - [2. Color Harmonies](#2-color-harmonies)
    - [3. Color Psychology](#3-color-psychology)
  - [Theme and palette](#theme-and-palette)
    - [1. Theme](#1-theme)
    - [2. Color Palette](#2-color-palette)
  - [Variable](#variable)
  - [CSS Variable](#css-variable)
  - [Font-Awesome CDN](#font-awesome-cdn)
  - [Css Position](#css-position)
  - [CSS transition](#css-transition)
    - [Basic Syntax](#basic-syntax)
  - [CSS filter](#css-filter)
  - [Css box-sizing](#css-box-sizing)
    - [1. content-box (Default)](#1-content-box-default)
    - [2. border-box](#2-border-box)
  - [Css transform property](#css-transform-property)
    - [Common Transform Functions](#common-transform-functions)
      - [1. `translate(x, y)`](#1-translatex-y)
      - [2. `rotate(angle)`](#2-rotateangle)
      - [3. `scale(x, y)`](#3-scalex-y)
      - [4. `skew(x-angle, y-angle)`](#4-skewx-angle-y-angle)
    - [Chaining Transformations](#chaining-transformations)
  - [Css Animation and keyframe](#css-animation-and-keyframe)
    - [1. Defining Keyframes](#1-defining-keyframes)
    - [2. Applying Animations](#2-applying-animations)

## Web Design Fundamentals

- Always think about the user's perspective when designing the look and flow of your web projects.
- The field that addresses this is known as User Interface/User Experience (UI/UX).

## CRAP (Principles of Design)

The CRAP principles of design are a set of guidelines aimed at helping designers create more effective and visually appealing layouts. CRAP is an acronym that stands for:

1. Contrast
2. Repetition
3. Alignment
4. Proximity

![CRAP Design Principle](https://paper-leaf.com/app/uploads/2012/10/Principles-of-Design-Grey-1280px.jpg)

> Source of the [Image](https://paper-leaf.com/insights/principles-of-design-quick-reference-poster/)

### 1. Contrast:

This principle involves using differences in color, size, shape, or style to distinguish different elements on a page. High contrast helps ensure that key elements stand out and are easily readable. For instance, using a dark text on a light background increases readability and draws attention to the text.

### 2. Repetition:

Repetition involves repeating certain design elements throughout a project to create consistency and unity. This can include repeating colors, fonts, shapes, or other visual elements. Repetition helps to create a cohesive look and feel, making the design appear more organized and harmonious.

### 3. Alignment:

Alignment refers to the placement of elements in relation to each other and to the overall layout. Proper alignment helps to create a sense of order and structure, making the design easier to follow and understand. Elements should be aligned with each other or with a grid to ensure a balanced and professional appearance.

### 4. Proximity:

Proximity involves placing related items close to each other to indicate their relationship and to reduce clutter. By grouping related elements together, you can create a clearer visual hierarchy and make the content easier to digest. Proper use of proximity helps users navigate and understand the layout more intuitively.

These principles work together to enhance the effectiveness of a design, improving readability, usability, and visual appeal. Using CRAP effectively can lead to more engaging and professionally presented work.

## Typography

Typography is the art and technique of arranging type to make written language readable, legible, and visually appealing when displayed. It involves selecting typefaces (fonts), point sizes, line lengths, line spacing (leading), and letter spacing (tracking and kerning), among other aspects. Typography plays a crucial role in both print and digital media, affecting the overall aesthetics and functionality of a design.

- In web design, good typography creates an appealing visual environment and improves user experience by making content more readible and digestable. It's important to pay attention to font-family, hierarchy, contrast, spacing, alignment, and responsiveness when working with typography on the web.

- Establishing a clear hierarchy is vital, using different weights, sizes, and colors to distinguish between headings, sub-headings, and body text. This guides the user's eye and helps in understanding the structure of the content.

- Do not use more than 2-3 fonts in a single website.

## Design Related Games

- [Can't Unsee](cantunsee.space)
- [Pixel Game: A Pixels Test to Quiz Your Knowledge | Pixactly](https://pixact.ly/)
- It's Centred That | Test Your Designer Eye [(supremo.co.uk)](https://www.supremo.co.uk/designers-eye/?playagain)
- Kern Type [(method.ac)](https://type.method.ac/#)
- [Triangle — a web typography learning game | Better Web Type](https://betterwebtype.com/triangle/)

## Color Theory in web design

Color theory in web design involves understanding how colors interact and how they can be used to create effective and aesthetically pleasing designs. It encompasses the principles of color harmony, contrast, and psychology to influence user experience and convey the intended message.

Here’s a comprehensive guide to color theory in web design:

### 1. Color Wheel Basics

- **Primary Colors:** Red, blue, and yellow. These are the foundational colors from which other colors are derived.
- **Secondary Colors:** Green, orange, and purple. These are created by mixing primary colors.
- **Tertiary Colors:** These are created by mixing a primary color with a secondary color (e.g., red-orange, blue-green).

<center>

![Color Wheel](https://www.w3schools.com/colors/pic_ryb_itten.jpg)

</center>

### 2. Color Harmonies

- **Complementary Color:** Colors opposite each other on wheel.
- **Analogous:** Colors next to each other on the wheel.
- **Triadic:** three evenly spaced colors around the wheel.
- **Split-Complementary:** A base color plus two colors adjacent to its complementary.
- **Monochromatic:** tones and shades of a single hue

<center>

![Color Harmonies](https://media.nngroup.com/media/editor/2021/05/28/color-wheel1-13.png)

</center>

> Read more about color theory: go to this [source](https://www.nngroup.com/articles/color-enhance-design/)

### 3. Color Psychology

Color psychology explores how colors influence human emotions, perceptions, and behaviors. In web design, understanding color psychology helps designers create visually appealing and effective interfaces that resonate with users and support the goals of the website.

![Colors and their meaning](https://miro.medium.com/v2/resize:fit:720/format:webp/1*0ajnHSmwVGpZ18Y6aksfoQ.jpeg)

> Read more: go to this [article](https://uxplanet.org/ux-design-colour-psychology-theory-accessibility-40c095cc1077)

## Theme and palette

In web design, a theme and color palette are crucial elements that define the visual and emotional tone of a website. They work together to create a cohesive and aesthetically pleasing user experience.

### 1. Theme

A theme refers to the overarching visual and stylistic approach applied to a website. It encompasses the design principles, color schemes, typography, layout styles, and overall aesthetics that create a unified look and feel.

### 2. Color Palette

The set of colors used throughout the website.

> Useful resource: [Real Time Colors](https://www.realtimecolors.com/)

> Another useful resource to check [Web Accessibility](https://webaim.org/resources/contrastchecker/)

## Variable

A variable is a named storage location in a computer's memory that holds a value. This value can be changed during the execution of a program.

## CSS Variable

CSS variables, also known as CSS custom properties, are a feature of CSS that allows you to define and reuse values throughout your stylesheet. They enable you to store values in a variable and reference them wherever needed, making it easier to manage and update your CSS.

- CSS variables are defined using the `--` syntax and are declared within a selector, usually `:root` for global scope.

```CSS
/* Defining the variable */
:root {
  --main-bg-color: #f0f0f0;
  --main-text-color: #333;
  --primary-font-size: 16px;
}

/* Usage */
body {
  background-color: var(--main-bg-color);
  color: var(--main-text-color);
  font-size: var(--primary-font-size);
}
```

## Font-Awesome CDN

```HTML
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
    />
```

## Css Position

In CSS, the `position` property controls how an element is positioned in the document. It affects the element's placement and layout relative to its normal flow or to other positioned elements.

```CSS
position: static; /* absolute | fixed | relative | sticky */
```

|  Value   |                                                       Description                                                       |
| :------: | :---------------------------------------------------------------------------------------------------------------------: |
|  static  |                     (Default value.) Elements render in order, as they appear in the document flow                      |
| absolute |                The element is positioned relative to its first positioned (not static) ancestor element                 |
|  fixed   |                                The element is positioned relative to the browser window                                 |
| relative | The element is positioned relative to its normal position, so "left:20px" adds 20 pixels to the element's LEFT position |
|  sticky  |                              The element is positioned based on the user's scroll position                              |

## CSS transition

In CSS, the `transition` property is used to create smooth animations between different states of an element. It allows you to specify how changes to CSS properties should occur over time, enhancing the user experience by adding visual effects.

#### Basic Syntax

The transition property is a shorthand for four specific properties:

- `transition-property:` Specifies the CSS property that you want to animate.
- `transition-duration:` Specifies the duration of the transition (how long it takes).
- `transition-timing-function:` Specifies the speed curve of the transition (e.g., linear, ease-in).
- `transition-delay:` Specifies a delay before the transition starts.

```CSS
:root {
  --baby-blue: #d4f1f4;
  --blue-green: #75e6da;
  --blue-grotto: #189ab4;
  --navy-blue: #05445e;
}

[data-theme="dark"] {
  --baby-blue: #05445e;
  --blue-green: #75e6da;
  --blue-grotto: #189ab4;
  --navy-blue: #d4f1f4;
}

body {
  background-color: var(--baby-blue);
  transition: background-color 1000ms linear;
}

```

## CSS filter

The `filter` property in CSS is used to apply graphical effects like blur, brightness, contrast, and more to elements on a webpage. Filters can be used to enhance the visual presentation of images, backgrounds, and other elements.

```CSS
img {
  filter: blur(5px);
}

.img-1 {
  filter: grayscale(50%) sepia(100%) contrast(150%);
}
```

## Css box-sizing

The `box-sizing` property in CSS controls how the dimensions of an element are calculated. It affects the width and height of an element by including or excluding padding and border in the element's total size. This can be useful for creating more predictable layouts.

```CSS
body {
    box-sizing: content-box | border-box;
}
```

### 1. content-box (Default)

It is default value. The width and height of an element are calculated based only on the content area. Padding and borders are added to the width and height, increasing the total size of the element.

```CSS
.box-content-box {
  box-sizing: content-box;
  width: 100px;
  padding: 10px;
  border: 5px solid black;
}
```

In this example, the total width of the element is `100px (content) + 10px (left padding) + 10px (right padding) + 5px (left border) + 5px (right border) = 130px.`

### 2. border-box

The width and height of an element include padding and borders. This makes it easier to manage the element's size because padding and borders are included within the specified dimensions.

```CSS
.box-border-box {
  box-sizing: border-box;
  width: 100px;
  padding: 10px;
  border: 5px solid black;
}
```

In this example, the total width of the element is exactly `100px`, which includes the content, padding, and border.

## Css transform property

The `transform` property in CSS allows you to apply 2D and 3D transformations to elements. This can be used to move, rotate, scale, skew, and even apply perspective effects to elements, enhancing the visual design and user interactions on your webpage.

### Common Transform Functions

#### 1. `translate(x, y)`

Moves an element from its original position by a specified distance along the X and Y axes.

```CSS
.translate-example {
  transform: translate(50px, 100px);
}
/* Moves the element 50px to the right and 100px down. */
```

#### 2. `rotate(angle)`

Rotates an element around its origin (default is the center).

```CSS
.rotate-example {
  transform: rotate(45deg);
}
/* Rotates the element by 45 degrees clockwise. */
```

#### 3. `scale(x, y)`

Scales an element up or down along the X and Y axes.

```CSS
.scale-example {
  transform: scale(1.5, 1.5);
}
/* Increases the element's size by 150% in both dimensions. */
```

#### 4. `skew(x-angle, y-angle)`

Skews (distorts) an element along the X and Y axes by specified angles.

```CSS
.skew-example {
  transform: skew(20deg, 10deg);
}
/* Skews the element by 20 degrees along the X axis and 10 degrees along the Y axis. */
```

### Chaining Transformations

You can chain multiple transformations in a single transform property. The order of transformations is important and can affect the final result:

```CSS
.transformed-element {
  transform: translate(50px, 100px) rotate(45deg) scale(1.5);
}

/* The element is first moved (translated) by 50px and 100px. */
/* Then, it is rotated by 45 degrees. */
/* Finally, it is scaled up by 150%. */

```

## Css Animation and keyframe

CSS animations and keyframes allow you to create dynamic and engaging visual effects by animating elements over time.

CSS animations involve two main components:

1. `@keyframes`
2. `animate`

### 1. Defining Keyframes

The `@keyframes` rule is used to define the intermediate steps (keyframes) of an animation. You specify the CSS properties to be animated at various stages of the animation.

### 2. Applying Animations

The `animation` property is used to apply the animation to an element and control its behavior.

```CSS
h1 {
  font-size: 100px;
  font-weight: 500;
  font-style: italic;
  text-align: center;
  margin-bottom: 0;
  /* animation */
  animation-name: focus-in-contract;
  animation-duration: 3s;
  animation-timing-function: linear;
}

.social-media-icons {
  font-size: 70px;
  position: relative;
  top: -60%;
  text-align: center;
  /* short-hand for animation */
  animation: focus-in-contract 3s linear;
}

@keyframes focus-in-contract {
  0% {
    letter-spacing: 1em;
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    letter-spacing: 0;
    filter: blur(0);
    opacity: 1;
  }
}
/*
Summary of Animation Effect

1. Start (0%): The body content starts with:
    - Large letter spacing (1em).
    - A strong blur effect (12px).
    - Full transparency (opacity: 0).

2. End (100%): The body content transitions to:
    - Normal letter spacing (0).
    - No blur (0).
    - Full opacity (1).

*/

```

> View The [Project](https://codepen.io/Sameerkatija/pen/eYwgpVp)
