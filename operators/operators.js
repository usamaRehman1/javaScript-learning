// Opearators : There are various operator supported by javaScript

// ------------------ JavaScript Arithmetic Operators ------------------

let add = "java" + "Script"; // JavaScript
let sub = 5 - 2; // 3
let mul = 5 * 2; //25
let div = 5 / 5; //1
let modulus = 5 % 2; // reminder 1
let modulus1 = 10 % 2; // reminder 2
let exponentiation = 5 ** 2; // 25
let i = 5;
let inc = ++i; //6
let dec = --i; //5
// Unary ‘+’ is the fastest and preferred way of converting something into a number
i1 = +i;
console.log(i1) //5
// Negation ‘-‘ operator gives the negation of an operand.
i2 = -i;
console.log(i2) //-5

// ------------------ JavaScript Assignment Operators ------------------ 

let a = 3;
a += 1; //sum up right value
console.log(a) // 4

a -= 1;//subtract up right value
console.log(a); //3

a *= 2;
console.log(a)//6

var yoo = 3;
console.log(yoo ^= 2);
console.log(yoo <<= 2); //12
// So, yoo <<= 2 is equivalent to yoo = yoo << 2, which shifts the binary representation of
// 3 (00000011) two bits to the left, resulting in 00001100, which is 12 in decimal. Therefore,
// the output of console.log(yoo <<= 2); will be 12.
console.log(yoo >>= 2); //3
// So, yoo >>= 2 is equivalent to yoo = yoo >> 2, which shifts the binary representation of 12 (00001100)
//  two bits to the right, resulting in 00000011, which is 3 in decimal.

// AND OPERATOR
console.log(yoo &= 2); //3
// This code uses the bitwise AND assignment operator (&=) to perform a bitwise AND operation between
// the variables yoo and 2, and then assigns the result back to yoo.
// => yoo is assigned the value 3, which in binary is 11.
// => 2 in binary is 10.
// => 11 & 10 results in 10 (binary) or 2 (decimal).

// OR OPERATOR
console.log(yoo |= 2);//3
// => yoo is assigned the value 3, which in binary is 11.
// => 2 in binary is 10.
// => 11 | 10 results in 11 (binary) or 3 

// XOR OPERATOR Y = A ⊕ B = Acomplement(B) + complement(A)B
console.log(yoo ^= 2);//1
// => yoo is assigned the value 3, which in binary is 11.
// => 2 in binary is 10.
// => 11 ^ 10 results in 01 (binary) or 1

// ------------------ JavaScript Comparison Operators ------------------ 

console.log(yoo == 3) // equality operator output => true
console.log(yoo === "3") // Strict equality operator it will check data type also output => false
console.log(yoo != 2) // not equal
console.log(yoo !== "2") // Strict not equality operator 

// JavaScript Ternary Operators (?)
console.log(true ? "if condition is true" : "else condition is false");

// ------------------ JavaScript Relational Operators ------------------ 

// in
let car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2022
};

// Checking if a property exists using the 'in' operator
let hasMake = 'make' in car;
let hasColor = 'color' in car;

// Outputting the results
console.log('Has make property:', hasMake); // Output: true
console.log('Has color property:', hasColor); // Output: false

// instanceof
// Creating a constructor function
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

// Creating an instance of the Car constructor
let myCar = new Car('Toyota', 'Camry', 2022);

// Checking if the object is an instance of a particular class using the 'instanceof' operator
let isCarInstance = myCar instanceof Car;

// Outputting the result
console.log('Is myCar an instance of Car?', isCarInstance); // Output: true