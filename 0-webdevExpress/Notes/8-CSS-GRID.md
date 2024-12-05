# Comprehensive Guide to CSS Grid Layout

- [Comprehensive Guide to CSS Grid Layout](#comprehensive-guide-to-css-grid-layout)
  - [CSS GRID](#css-grid)
    - [1. Key Terminologies of CSS Grid](#1-key-terminologies-of-css-grid)
    - [2. Key Properties](#2-key-properties)
      - [2.1 Grid Template Columns and Rows:](#21-grid-template-columns-and-rows)
      - [2.2 Grid Gap:](#22-grid-gap)
      - [2.3 Grid Area:](#23-grid-area)
      - [2.4 Grid Column and Row Span:](#24-grid-column-and-row-span)
      - [2.5 Implicit Grid:](#25-implicit-grid)
  - [CSS Grid Alignment](#css-grid-alignment)
    - [1. `justify-items`](#1-justify-items)
    - [2. `align-items`](#2-align-items)
    - [3. `place-items`](#3-place-items)
    - [4. `justify-content`](#4-justify-content)
    - [5. `align-content`](#5-align-content)
    - [6. `place-content`](#6-place-content)
    - [7. Summary](#7-summary)
  - [Implicit Grid Properties in CSS Grid Layout](#implicit-grid-properties-in-css-grid-layout)
    - [1. `grid-auto-flow`](#1-grid-auto-flow)
      - [1.1 Values:](#11-values)
    - [2. `grid-auto-columns`](#2-grid-auto-columns)
    - [4. `grid-auto-rows`](#4-grid-auto-rows)
  - [Understanding the `fr` Unit](#understanding-the-fr-unit)
    - [1. Combining with Fixed Sizes:](#1-combining-with-fixed-sizes)
  - [Advanced CSS Grid Functions and Keywords](#advanced-css-grid-functions-and-keywords)
    - [1. `repeat()`](#1-repeat)
    - [2. `minmax()`](#2-minmax)
    - [3. `auto-fit` and `auto-fill`](#3-auto-fit-and-auto-fill)

## CSS GRID

CSS Grid Layout, commonly known as CSS Grid, is a powerful and versatile layout system in CSS that allows you to create complex and responsive web layouts with ease. It provides a `two-dimensional` grid-based approach for arranging content, which is a significant advancement over traditional layout techniques like floats.

[Flexbox](https://github.com/sameerkatija/sc-advance-web-class/tree/day-5?tab=readme-ov-file#css-flex-box) is also a very great layout tool, but its `one-directional` flow has different use cases — and they actually work together quite well! Grid is the very first CSS module created specifically to solve the layout problems we’ve all been hacking our way around for as long as we’ve been making websites.

### 1. Key Terminologies of CSS Grid

1. **Grid Container:** The element that has `display: grid;` or `display: inline-grid;` applied to it. It establishes a new grid formatting context for its children.

2. **Grid Items:** The direct children of the grid container. These elements are placed into the grid and can be positioned and sized according to the grid’s rules.

3. **Grid Lines:** The lines that form the boundaries of the grid cells. They can be used to position grid items precisely.

   ![Grid line](https://css-tricks.com/wp-content/uploads/2018/11/terms-grid-line.svg)

4. **Grid Tracks:** The space between grid lines, forming the rows and columns of the grid.

   ![Grid Track](https://css-tricks.com/wp-content/uploads/2021/08/terms-grid-track.svg)

5. **Grid Cells:** The individual boxes that make up the grid where grid items can be placed.
   ![Grid Cell](https://css-tricks.com/wp-content/uploads/2018/11/terms-grid-cell.svg)
6. **Grid Areas:** A rectangular area on the grid defined by four grid lines. Grid items can span multiple cells, forming a grid area.
   ![Grid Area](https://css-tricks.com/wp-content/uploads/2018/11/terms-grid-area.svg)

### 2. Key Properties

#### 2.1 Grid Template Columns and Rows:

- **`grid-template-columns`:** Defines the number and size of columns in the grid.

- **`grid-template-rows`:** Defines the number and size of rows in the grid.

- **`grid-template`:** A shorthand for setting `grid-template-rows`, `grid-template-columns`, and `grid-template-areas` in a single declaration.

  ```css
  .grid-container {
    display: grid;
    grid-template-columns: 200px 1fr 2fr; /* 3 columns with different sizes */
    grid-template-rows: 100px auto; /* 2 rows with specified sizes */
  }

  .container {
    grid-template: none | <grid-template-rows> / <grid-template-columns>;
  }
  ```

#### 2.2 Grid Gap:

- **`gap`:** Defines the spacing between grid items.

```css
.grid-container {
  gap: 20px;
  /* gap: 15px 10px; */
  /* column-gap: 10px; add gap between cols*/
  /* row-gap: 10px;  add gap between rows*/
}
```

#### 2.3 Grid Area:

- **`grid-template-areas`:** Defines a grid template by naming grid areas.

```css
.grid-container {
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}
.header {
  grid-area: header;
}
.sidebar {
  grid-area: sidebar;
}
.main {
  grid-area: main;
}
.footer {
  grid-area: footer;
}
```

#### 2.4 Grid Column and Row Span:

- **`grid-column`:** Specifies how many columns an item should span.

- **`grid-row`:** Specifies how many rows an item should span.

```css
.item1 {
  grid-column: 1 / 3; /* Span from column line 1 to 3 */
  grid-row: 1 / 2; /* Span from row line 1 to 2 */
}
```

#### 2.5 Implicit Grid:

CSS Grid can automatically create rows and columns as needed when you place grid items outside the explicitly defined grid.

```css
.grid-container {
  grid-auto-rows: 100px; /* Automatically create rows with 100px height */
}
```

## CSS Grid Alignment

In CSS Grid Layout, the alignment and distribution of grid items within the grid container are controlled by several properties.

### 1. `justify-items`

Aligns grid items along the inline (row) axis within their grid area.

```css
.grid-container {
  display: grid;
  grid-template-columns: 100px 100px;
  grid-template-rows: 100px 100px;
}
.grid-item {
  justify-items: center; /* Center items horizontally in their grid area */
}

/* 
start: Aligns items to the start of the grid area.
end: Aligns items to the end of the grid area.
center: Centers items within the grid area.
stretch: Stretches items to fill the grid area (default behavior). 
*/
```

### 2. `align-items`

Aligns grid items along the block (column) axis within their grid area.

```css
.grid-container {
  display: grid;
  grid-template-columns: 100px 100px;
  grid-template-rows: 100px 100px;
}
.grid-item {
  align-items: start; /* Align items to the top of their grid area */
}

/* 
start: Aligns items to the start of the grid area.
end: Aligns items to the end of the grid area.
center: Centers items within the grid area.
stretch: Stretches items to fill the grid area (default behavior). 
*/
```

### 3. `place-items`

A shorthand property for setting both justify-items and align-items at once.

```css
.grid-container {
  display: grid;
  grid-template-columns: 100px 100px;
  grid-template-rows: 100px 100px;
}
.grid-item {
  place-items: center; /* Center items both horizontally and vertically in their grid area */
}

/* 
start: Aligns items to the start of the grid area.
end: Aligns items to the end of the grid area.
center: Centers items within the grid area.
stretch: Stretches items to fill the grid area (default behavior). 
*/
```

### 4. `justify-content`

Aligns the grid container’s content along the inline (row) axis.

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: 100px;
  justify-content: space-between; /* Distribute items with equal space between them */
}

/*
start: Aligns content to the start of the grid container.
end: Aligns content to the end of the grid container.
center: Centers content within the grid container.
stretch: Stretches content to fill the container (default behavior).
space-between: Distributes items with equal space between them.
space-around: Distributes items with equal space around them.
space-evenly: Distributes items with equal space between and around them.
*/
```

### 5. `align-content`

Aligns the grid container’s content along the block (column) axis.

```css
.grid-container {
  display: grid;
  grid-template-columns: 100px 100px;
  grid-template-rows: repeat(3, 100px);
  align-content: center; /* Center the grid content vertically in the container */
}

/*
start: Aligns content to the start of the grid container.
end: Aligns content to the end of the grid container.
center: Centers content within the grid container.
stretch: Stretches content to fill the container (default behavior).
space-between: Distributes items with equal space between them.
space-around: Distributes items with equal space around them.
space-evenly: Distributes items with equal space between and around them.
*/
```

### 6. `place-content`

A shorthand property for setting both align-content and justify-content at once.

```css
.grid-container {
  display: grid;
  grid-template-columns: 100px 100px;
  grid-template-rows: 100px 100px;
  place-content: center; /* Center the grid content both horizontally and vertically in the container */
}

/*
start: Aligns content to the start of the grid container.
end: Aligns content to the end of the grid container.
center: Centers content within the grid container.
stretch: Stretches content to fill the container (default behavior).
space-between: Distributes items with equal space between them.
space-around: Distributes items with equal space around them.
space-evenly: Distributes items with equal space between and around them.
*/
```

### 7. Summary

- `justify-items` and `align-items`: Control the alignment of items within their grid cells.

- `place-items`: A shorthand for `justify-items` and `align-items`.

- `justify-content` and `align-content`: Control the alignment of the grid container's content within the container.

- `place-content`: A shorthand for `justify-content` and `align-content`.

## Implicit Grid Properties in CSS Grid Layout

### 1. `grid-auto-flow`

Controls how the browser places grid items into the grid when items are added beyond the explicitly defined grid tracks.

#### 1.1 Values:

- `row`: The default value. Items are placed in rows, filling each row before moving to the next row.

- `column`: Items are placed in columns, filling each column before moving to the next column.

- `dense`: Items are placed into the grid as compactly as possible, filling any gaps created by larger items. This value is used in conjunction with row or column.

```css
.grid-container {
  display: grid;
  grid-template-columns: 100px 100px;
  grid-template-rows: 100px 100px;
  grid-auto-flow: row; /* Items will be placed in rows */
}
```

### 2. `grid-auto-columns`

Specifies the size of columns in the implicit grid, which is created when items are placed beyond the explicitly defined grid.

> You can use length values (`px`, `em`, `rem`, `%`, etc.), auto, or `min-content` and `max-content`.

```css
.grid-container {
  display: grid;
  grid-template-columns: 100px 100px;
  grid-template-rows: 100px;
  grid-auto-columns: 150px; /* Implicit columns will be 150px wide */
}
```

### 4. `grid-auto-rows`

Specifies the size of rows in the implicit grid, which is created when items are placed beyond the explicitly defined grid.

> You can use length values (`px`, `em`, `rem`, `%`, etc.), auto, or `min-content` and `max-content`.

```css
.grid-container {
  display: grid;
  grid-template-columns: 100px 100px;
  grid-template-rows: 100px;
  grid-auto-rows: 200px; /* Implicit rows will be 200px tall */
}
```

## Understanding the `fr` Unit

In CSS Grid Layout, The `fr` unit represents a fraction of the available space in the grid container. It allows grid items to take up a proportion of the remaining space after other units (like pixels or percentages) have been accounted for.

> When you use `fr`, you are essentially telling the browser to divide the available space into fractions and allocate those fractions to grid items.

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}

/* The grid container is divided into 4 equal fractions of space.
The first column takes up 1 fraction of the available space.
The second column takes up 2 fractions of the available space (twice as much as the first column).
The third column takes up 1 fraction of the available space. */
```

### 1. Combining with Fixed Sizes:

```css
.grid-container {
  display: grid;
  grid-template-columns: 100px 2fr 1fr;
}
```

- The first column is fixed at `100px`.
- The remaining space is divided into 3 fractions. `calc((100vw - 100px) / 3)`
- The second column takes up `2` fractions of the remaining space.
- The third column takes up `1` fraction of the remaining space.

## Advanced CSS Grid Functions and Keywords

### 1. `repeat()`

The `repeat()` function allows you to repeat a track definition a specified number of times. This function simplifies defining multiple tracks with the same size.

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Creates 3 equal-width columns */
}
```

### 2. `minmax()`

The `minmax()` function defines a size range for a grid track. It sets a minimum and maximum size for a track, allowing it to be flexible within that range.

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(
    3,
    minmax(100px, 1fr)
  ); /* Columns will be at least 100px wide but can grow to fill available space */
}
```

### 3. `auto-fit` and `auto-fill`

These keywords are used with the `repeat()` function to automatically create as many columns or rows as will fit in the container, based on the defined track size.

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(150px, 1fr)
  ); /* Automatically fit columns of at least 150px width */
}
```

> Note: `auto-fit` and `auto-fill` are used for creating responsive grids that adapt to varying screen sizes. `auto-fit` collapses empty tracks, making it more suitable for fluid layouts, while `auto-fill` keeps empty tracks, which can be useful for maintaining layout structure.
