# Advanced CSS Layout: Flex Properties, Libraries, and Frameworks

- [Advanced CSS Layout: Flex Properties, Libraries, and Frameworks](#advanced-css-layout-flex-properties-libraries-and-frameworks)
  - [Flex properties (Continued.)](#flex-properties-continued)
    - [1. flex-basis](#1-flex-basis)
    - [2. flex-grow](#2-flex-grow)
    - [3. flex-shrink](#3-flex-shrink)
    - [4. order](#4-order)
  - [Library](#library)
  - [Framework](#framework)

## Flex properties (Continued.)

### 1. flex-basis

Specifies the initial size of a flex item before any space distribution occurs.

`Default Value:` auto (which means the item's intrinsic size is used).

`Values:` Can be set to a length (e.g., 200px, 10%) or auto.

`Usage:` Defines the base size of the flex item. For instance, if you set `flex-basis: 200px`, the item will start with a size of `200px.`

### 2. flex-grow

Determines how much a flex item should grow relative to the rest of the flex items in the container when there is extra space available.

`Default Value: 0` (which means the item will not grow).

`Values:` A positive number. For example, `flex-grow: 2` means the item will grow twice as much as an item with `flex-grow: 1`.

`Usage:` If you want an item to take up more space compared to others, you would increase its flex-grow value.

### 3. flex-shrink

Determines how much a flex item should shrink relative to the rest of the flex items in the container when there is not enough space.

`Default Value: 1` (which means the item will shrink if needed).

`Values:` A positive number. For example, flex-shrink: 2 means the item will shrink twice as much as an item with `flex-shrink: 1`.

`Usage:` If you want an item to be less likely to shrink compared to others, you would decrease its flex-shrink value.

### 4. order

Specifies the order of a flex item relative to other flex items in the same container.

`Default Value: 0`

`Values:` Integer values (positive, negative, or zero).

## Library

A library is a collection of pre-written code that developers can use to perform common tasks or add functionality to their applications. It provides reusable functions or classes that you can call from your own code.

1. **Control:** When using a library, you have control over the flow of your application. You decide when and where to call the library’s functions or methods.

## Framework

A framework is a more comprehensive tool that provides a structured way to build and organize your application. It often includes libraries but also imposes certain rules and conventions about how to structure your code.

1.  **Control:** A framework generally takes control of the application flow. It provides a skeleton or template and expects you to fit your code into its structure. This is often referred to as "Inversion of Control" or "The Hollywood Principle": `“Don't call us, we’ll call you.”`
