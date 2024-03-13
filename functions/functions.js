// javaScript function: JavaScript function is a set of statements
// that take inputs, do some specific computation, and produce output

// -------------------Regular Functions-------------------
// These are the standard functions defined using the function keyword.

function anyname(parameter) {
    // perform any specific task
    return parameter
}
console.log(anyname(argument = "Hello World"))

// -------------------Arrow Functions-------------------
// Introduced in ES6, arrow functions provide a more concise syntax,
// especially for simple, single-expression functions.

let x = 9;
const square = (x) => x ** 2;
console.log(square(x))

// -------------------Generator Functions-------------------
// These functions can pause execution and return intermediate results
// using the yield keyword. They are defined using the function* syntax.

function* generator() {
    yield 1;
    yield "usama";
    yield "usama739@gmail.com";
}
const iterator = generator();

// The next() method returns an object with two properties:
// value: the value yielded by the generator function.
// done: a boolean indicating whether the generator function has 
// finished executing (true if it has, false otherwise).

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

// -------------------Anonymous Functions-------------------
// Functions without a name are called anonymous functions. They can
// be assigned to variables or passed as arguments to other functions.

const add = function (a, b) {
    return a + b;
};
console.log(add(3, 4)); // Output: 7

// ------Immediately Invoked Function Expressions (IIFE)---------
// These are functions that are executed immediately after they are
// created. They are often used to create a separate scope and avoid
// polluting the global namespace.

(function () {
    console.log('This function is immediately invoked.');
})();

// -------------------Callback Functions-------------------
// Functions passed as arguments to other functions to be executed
// later, often used in asynchronous programming.

function fetchData(callback) {
    // Asynchronous operation
    setTimeout(() => {
        const data = 'Some data';
        callback(data);
    }, 1000);
}
fetchData((data) => {
    console.log(data);
});

// -------------------Constructor Functions-------------------
// Functions used to create objects with the new keyword. They
// initialize the newly created object's properties and methods.

function Person(name, age) {
    this.name = name;
    this.age = age;
}
const person1 = new Person('Alice', 30);