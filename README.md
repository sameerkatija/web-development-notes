# Further Updates & Advanced Concepts of JS

- [Further Updates \& Advanced Concepts of JS](#further-updates--advanced-concepts-of-js)
  - [Maps in Js](#maps-in-js)
    - [Creating a Map](#creating-a-map)
    - [Basic Operations with Maps](#basic-operations-with-maps)
    - [Iterating Over Maps](#iterating-over-maps)
    - [Advantages of Using Maps](#advantages-of-using-maps)
    - [Comparison with Objects](#comparison-with-objects)

## Maps in Js

In JavaScript, `Maps` are a collection of key-value pairs where the keys can be of any data type (including objects and functions), and the values can also be of any type. Maps offer a more efficient and predictable way to manage key-value data than plain objects, especially when you need to preserve the order of entries or work with non-string keys.

### Creating a Map

```Js

let myMap = new Map();

let myMap = new Map([
  ['name', 'John'],
  ['age', 30],
  ['country', 'USA']
]);

```

### Basic Operations with Maps

```Js

// To add or update a key-value pair in the map
myMap.set('email', 'john@example.com');

// To retrieve the value associated with a specific key
console.log(myMap.get('name')); // 'John'

// To check if a key exists in the map

console.log(myMap.has('age')); // true
console.log(myMap.has('address')); // false

// To remove a key-value pair
myMap.delete('country');
console.log(myMap.has('country')); // false


// To remove all key-value pairs from the map
myMap.clear();
console.log(myMap.size); // 0

// To get the number of key-value pairs
console.log(myMap.size);


```

### Iterating Over Maps

```Js
// Using forEach Method

myMap.forEach((value, key) => {
  console.log(key, value);
});

// using for of loop
for (let [key, value] of myMap.entries()) {
  console.log(key, value);
}
```

### Advantages of Using Maps

- `Order is preserved:` Maps remember the order of key-value pairs based on insertion.
- `Any type of key:` Unlike objects, Maps can have keys of any type (`objects`, `functions`, `primitives`).
- `Efficient:` Maps have better performance when frequently adding and removing key-value pairs.
- `Size property:` You can easily get the number of items in a Map with the `size` property.

### Comparison with Objects

| Feature                      | Object                                | Map                                      |
| :--------------------------- | :------------------------------------ | :--------------------------------------- |
| **Key Types**                | Only strings or symbols               | Any data type (objects, functions, etc.) |
| **Order of Keys**            | Not guaranteed                        | Maintains insertion order                |
| **Performance (add/remove)** | Slower for large datasets             | Faster for large datasets                |
| **Size Property**            | Requires `Object.keys().length`       | Direct access via `size`                 |
| **Iteration**                | `for...in` loop or `Object.entries()` | `forEach`, `for...of`, etc.              |

Maps are a great choice when you need a collection of key-value pairs and expect to frequently interact with the data, whether you're adding, removing, or querying entries.
