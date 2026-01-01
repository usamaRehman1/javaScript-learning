// this refers to the object that is currently calling the function.
// Its value depends on how and where the function is called, not where it is written.

// 1 => this in the Global Scope
console.log(this) // window

// 2 => this Inside an Object Method
let stu = {
    name: "usama",
    greet: function () {
        console.log(this) // obj
        console.log("Welcome ", this.name) // welcome usama
    }
}
stu.greet()

let stu2 = {
    fullName: "Usama Rehman",
    greet: () => {
        console.log(this) // window
        console.log("Welcome ", this.fullName) // Welcome undefined
        return "func completed"
    }
}
console.log(stu2.greet()) // func completed

var stuName = "Ismail Taj";
let age = 25;
const edu = "Master";

const stu3 = {
    stuName: "Talha Ahmed",
    age: 27,
    edu: "Graduation",
    greet: () => {
        console.log(this) // window
        console.log("welcome ", this.stuName) // welcome Ismail Taj
        console.log(this.age) // undefined
        console.log(this.edu) // undefined
    }
}
stu3.greet()

// 3 => this Inside a Normal Function
function foo() {
    console.log(this)
}
foo() // window

const foo = () => {
    console.log(this)
}
foo() // window

// In strict mode:
function show() {
    console.log(this) // undefined
}
show()

// 4 => this Inside a Constructor Function
function Person(name, section) {
    this.name = name;
    this.section = section;
}

const preson1 = new Person("usama", "A")
console.log(preson1) // create person object

// this Inside Event Handlers

// Arrow funtion
document.querySelector("#btn").addEventListener('click', () => {
    console.log(this) // window
})

// normal funtion
document.querySelector("#btn").addEventListener('click', function () {
    console.log(this) // refers to the HTML element that triggered the event.
})