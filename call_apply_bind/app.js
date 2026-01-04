// -------------------- call(), aplpy(), bind() ------------------
// In JavaScript, call, apply, and bind are methods available on functions.
// They are used to control the value of this and (optionally) pass arguments to a function.

// Arrow Functions ❌
// call, apply, and bind do not work with arrow functions for changing this. 
// Arrow functions take this from lexical scope.

const firstPerson = {
    firstName: "Muhammad",
    lastName: "Usama",
    displayFullName: function (city) {
        console.log(this.firstName + " " + this.lastName + " " + city);
    }
}
firstPerson.displayFullName("lahore")

const secondPerson = {
    firstName: "Huzaifa",
    lastName: "Rehman",
    city: "Islamabad",
}
// secondPerson borrow func from firstPerson
firstPerson.displayFullName.call(secondPerson, secondPerson.city)

const thirdPerson = {
    firstName: "Ismail",
    lastName: "Taj",
}

const printFullName = function (city) {
    console.log(this.firstName + " " + this.lastName + " " + city)
}

// thirdPerson borrow func from outside of the object
printFullName.call(thirdPerson, "karachi")

// 1️⃣ What is this?
// this refers to the object that is executing the function.

const user = {
    _name: "usama",
    greet: function () {
        console.log(`welcome ${this._name}`)
    }
}
user.greet() // welcome usama (this refers to user)

// But problems arise when a function is borrowed or called outside its object.

const person1 = {
    _name: "usama",
}
const person2 = {
    _name: "rehman",
}

// borrowed function
function greet(city, country) {
    console.log(this)
    console.log(`welcome ${this._name} you are in ${city} ${country}`)
}
greet() // welcome undefined (this is not pointing to the object we want)

// Solution: call, apply, bind

// ----------------- call() --------------------------
// call() invokes a function immediately and sets the value of this.
// Syntax : functionName.call(thisArg, arg1, arg2, ...)

greet.call(person1) // welcome usama
greet.call(person2) // welcome rehman

// arguments
greet.call(person1, "Karachi", "Pakistan") // welcome usama you are in karachi Pakistan

// ----------------- apply() --------------------------
// apply() is exactly like call(), but arguments are passed as an array.
// syntax: functionName.apply(thisArg, [arg1, arg2, ...])

greet.apply(person1, ["Karachi", "Pakistan"]) // welcome usama you are in karachi Pakistan

// Useful when arguments are already in an array:

const number = [1, 2, 3, 4, 5]
console.log(Math.max(number)) // NaN
console.log(Math.max(3, 5, 7, 1)) // 7
console.log(Math.max(...number))// 5
console.log(Math.max.apply(null, number)) // 5
console.log(Math.min.apply(null, number)) // 1

// ----------------- bind() --------------------------
// bind() does NOT execute the function.
// It returns a new function with this permanently bound.
// syntax: const newFunc = functionName.bind(thisArg, arg1, arg2, ...)

const boundGreet = greet.bind(person1, "Karachi", "Pakistan")
console.log(boundGreet) // return greet funtion
boundGreet() // welcome usama you are in Karachi Pakistan

setTimeout(user.greet, 1000) // welcome undefined
setTimeout(user.greet.bind(user), 1000) //welcome usama

const obj = {
    name: "Usama"
};

function sayName() {
    console.log(this.name); // usama
}

const bound = sayName.bind(obj);
bound.call({ name: "Ali" });

// summary
// Feature              call	    apply   	bind
// Executes immediately	 ✅	        ✅	      ❌
// Returns function	     ❌      	❌	      ✅
// Arguments	       comma-separated	array	comma-separated
// Changes this	       Temporary	Temporary	Permanent