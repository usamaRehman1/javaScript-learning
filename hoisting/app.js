
// ----------------------------- Hoisting--------------
// Hoisting is JavaScript’s behavior of moving variable and function declarations to the top of their scope (before code execution).

// var → hoisted, initialized with undefined.
// let & const → hoisted but in Temporal Dead Zone(TDZ) → can’t access before declaration.
// Function Declarations → fully hoisted.
// Function Expressions / Arrow Functions → behave like variables (var/let/const).

// Important:
// Only declarations are hoisted, not initializations (assignments).
// That’s why sometimes you get undefined instead of an error.

// ------------------- Hoisting With Var --------------------------

// --------
console.log(x) // undefined ( Not Error)
var x = 10;

//---------
var y; // decleration is hoisted
console.log(y) // undefined
y = 10; // initilization
console.log(y) // 10

// ----------- Hoisting With Let And Const ------------------------
// let and const are also hoisted, but they are placed in the Temporal Dead Zone (TDZ) until their line of code is executed.
// So, you cannot access them before initialization.

// let and const dosen't allow before decleration
console.log(z) // RefferenceError (TDZ)
let z = 10;

// ------------------ Hoisting With Function ---------------------------
// Function declarations are fully hoisted.

foo() // Hello World
function foo() {
    console.log("Hello World..")
}

greet() // TypeError: greet is not a function
// if replaceing var with let and const so Error will be => ReferenceError: Cannot access 'greet' before initialization
var greet = () => {
    console.log("Welcome")
}

// --------------- Advance Level Hoisting ----------------------------

var x = 1;
function demo() {
    console.log(x); // undefined, not 1
    var x = 2;
    console.log(x); // 2
}
demo();