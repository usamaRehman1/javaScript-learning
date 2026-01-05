// -------------------------- What is a Set ----------------------
// A Set is a collection of unique values in JavaScript that provides fast lookup and automatic duplicate removal.
// It does not allow duplicates.
// Faster for checking existence than arrays.

// set[0]; // undefined
// set.key = "value"; // Wrong

let fruits = ["apple", "mango", "apple", "banana", "apple", "mango"]
let uniqueFruitsArr = [...new Set(fruits)]
console.log("uniqueFruitsArr => ", uniqueFruitsArr) // ['apple', 'mango', 'banana'] 

const set1 = new Set(fruits) // Set is a constructor its return object
console.log(set1) // {'apple', 'mango', 'bananna'}
console.log(typeof set1) // object

set1.add("pineapple")
set1.add("pineapple") // ignore dublicate
console.log(set1) // {'apple', 'mango', 'bananna', 'pineapple'}

console.log(set1.size) // 4 (size length batata hai)
console.log(set1.has("avocado")) // false
console.log(set1.has("banana")) // true
console.log(set1.delete("apple")) // return true if removed
console.log(set1.delete("grapes")) // return false is not find
console.log(set1.clear()) // return undefined if clear all element
console.log(set1) // {size: 0}

const set2 = new Set(fruits)
console.log(set2)

set2.forEach(value => {
    console.log(value)
})

for (let value of set2.values()) {
    console.log("value => ", value)
}
// value => apple
// value =>  mango
// value =>  banana

for (let key of set2.keys()) {
    console.log("keys => ", key)
}
// keys =>  apple
// keys =>  mango
// keys =>  banana

for (let entries of set2.entries()) {
    console.log("entries =>", entries)
}
// entries => (2) ['apple', 'apple']
// entries => (2) ['mango', 'mango']
// entries => (2) ['banana', 'banana']

// Even though content is same, references are different.
const obj1 = { a: 1 };
const obj2 = { a: 1 };

const set = new Set();
set.add(obj1);
set.add(obj2);

console.log("set => ", set)
console.log("set size =>", set.size);

// Array.from(iterable, mapFn?, thisArg?)
const _set = new Set([1, 2, 3]);
const arr = Array.from(_set);
console.log("arr =>", arr) // [1, 2, 3]