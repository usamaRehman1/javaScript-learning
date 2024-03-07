// Variables
// In JavaScript, variables are used to store and manage data.
// They are created using the var, let, or const keyword.

// var ; It has a function-scoped or globally-scoped behavior.
function varScoping() {
    var x = 10;
    console.log(x); // 10

    if (true) {
        var x = 20;
        console.log(x); // 20
    }
    console.log(x) //20
}
varScoping();

// let : It has a block-scoped variables.
function letScoping() {
    let y = 10;
    console.log(y); // 10

    if (true) {
        let y = 20;
        console.log(y); //20
    }
    console.log(y) //10
}
letScoping()

//const : Declares variables that cannot be reassigned. It’s block-scoped as well.
function constScoping() {
    const pi = 3.142;
    console.log(pi); // 3.142

    if (true) {
        const pi = 2.34;
        console.log(pi) // 2.34
    }
    console.log(pi) // 3.124

    // const pi = 4.23 ; // erorr 'pi' has already been declared
    // console.log(pi); 
}
constScoping();

// Data Types: The latest ECMAScript standard defines eight data types Out of which
// seven data types are Primitive(predefined) and one complex or Non-Primitive.

// Primitive Data Types
// 1)Number 2)String 3)Boolean 4)Null 5)Undefined 6)Symbol 7)BigInt

let a = 23;
console.log(typeof a) // Number

let b = "usama";
console.log(typeof b)// String

let flag = true;
console.log(typeof flag) //Boolean

let number = null;
//The output of typeof number in JavaScript will be "object". This is because null
//is considered an empty object reference in JavaScript. It's a quirk of the language
//that has been around since the beginning. Even though null is technically a primitive
//type, when you use typeof on it, it will return "object".
console.log(typeof number) //object

function areaOfSqr(length) {
    return length < 10 ? length ** 2 : null;
}
console.log(areaOfSqr(10)) // null

let _name;
console.log(typeof _name) // undefined
_name = "rehman";
console.log(typeof _name) // String

let symbol1 = Symbol("Geeks")
let symbol2 = Symbol("Geeks")

// Each time Symbol() method 
// is used to create new global 
// Symbol 
console.log(symbol1 == symbol2); // false
console.log(typeof symbol1) // symbol

let int = 100n;
console.log(int) //100n
console.log(typeof int) //bigint

// BigInt is a built-in object in JavaScript that provides a way to represent whole numbers
// larger than Math.pow(2,53)-1. The largest number that JavaScript can reliably represent with the 
// Number primitive is Math.pow(2,53)-1, which is represented by the MAX_SAFE_INTEGER constant.
let bigNum = BigInt("123422222222222222222222222222222222222");
console.log(typeof bigNum); //bigint


// Data type complex or Non-Primitive
// The data types that are derived from primitive data types of the JavaScript language are known
// as non-primitive data types.

let obj = {email : "urehman739@gmail.com",};
console.log(typeof obj) // object

let _obj = Object("ASD");
console.log(_obj)
console.log(typeof _obj) // object