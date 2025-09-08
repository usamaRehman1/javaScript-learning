// Primitive Data Types (Fundamental type: single and system define) --> It's work by the value
// In JavaScript, there are 7 primitive data types
// Predefined: They are built into the language.
// Single Value: They store only one value at a time.
// Fixed Size: The memory allocated for them is a fixed size (e.g., an int is typically 32 bits, a byte is 8 bits).

let str = "string";  // string
let boolean = true;  // boolean
let number = 25; // number
let _undefined = undefined; // undefined 
let _null = null; // null (empty)
const _symbol = Symbol("anything"); // Symbol -> always unique
let bigint = 123456789012345678901234567890n; //bigint -> large number the form of exponential
console.log(typeof str) // to check any type of data type ----> ans: string

// Examples of "by value" with primitives data type

let stu1Name = "usama";// primitive value
console.log(stu1Name) // usama
let stu2Name = stu1Name; // copy value stu1Name into stu2Name
console.log(stu2Name) // usama
stu1Name = "rehman" // changing stu1Name does NOT effect stu2Name
console.log(stu1Name) // rehman
console.log(stu2Name) // usama (still unchanged)

// Non-Primitive Values (Reference Types)
// They don’t store the actual value directly.
// Instead, they store a reference (memory address) pointing to the value.
// When you copy them, both variables refer to the same object in memory.

// Examples of "by Reference" with Non-Primitives data type

let stu1 = { name: "usama", course: "Web and App Development" } // Non-Primitive Value
let stu2 = stu1; // copy the reference
stu2.name = "rehman"; // change stu2 name 
console.log(stu1.name) // rehman (because both point to same memory reference)

// Array by reference
let arr1 = ["karachi", "lahore"]; // Non-Primitive Value 
let arr2 = arr1; // copy the arr1 reference 
arr2[1] = "islamabad"; // change the index 1 value
console.log(arr1) // ["karachi", "islamabad"] (also cnage index 1 in arr1 because of the reference)
console.log(arr2) // ["karachi", "islamabad"]

// Like objects, functions are also stored by reference.
function message() {
    return "Hello World";
}
// Both ref1 and ref2 point to the same function in memory
const ref1 = message;
const ref2 = ref1;

console.log(ref2()) // Hello World