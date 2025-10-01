//----------------------- Variable LookUp --------------------
// variable lookup means how the JavaScript engine searches for the value of a variable when it is used inside some code.

// The engine follows the scope chain to find the variable:
// Local Scope First – It first looks inside the current function or block where the variable is used.
// Outer Scopes – If not found, it moves outward to the parent function or block scope.
// Global Scope – If still not found, it checks the global scope.
// ReferenceError – If the variable doesn’t exist anywhere in the chain, it throws an error.

let x = 10;
function outerFn() {
    let y = 20;

    function innerFn() {
        let z = 30;

        console.log(x) // found in global scope
        console.log(y) // found in outer scope
        console.log(z) // found in inner scope

    }
    innerFn()

}
outerFn()


//----------------

let a = 5; // global a

function outer() {
    let a = 6; // shadows global a
    let b = 8; // outer b

    function inner() {
        let a = 10; // shadows outer a 

        console.log("a:",a) // first priority of inner scope
        console.log("b:",b) // found in outer scope
        console.log("c:",c) // assing before calling in global scope
    }

    return inner
}

let c = 15; // global c
const fn = outer() // return inner function
fn() // invoke/call inner function