// -------- Spread Operator & Rest Operator in JavaScript --------------
// Spread → expands values
// Rest → collects values

// Rests (Collects) multiple values into one array.
// Interview Tip ( ...Rest = ...Spread )
// If ... is on the right side, it is usually Spread
// If ... is on the left side, it is usually Rest

// ------------------------ Spread Operator (Expands Data) ------------------------------

const cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawer", "Hyderabad"]
const copyCities = [...cities];
// console.log("copyCities => ", copyCities) // ['Karachi', 'Lahore', 'Islamabad', 'Queta', 'Peshawer', 'Hyderabad']
cities[1] = "Multan";
// console.log(cities) // ['Karachi', 'Multan', 'Islamabad', 'Quetta', 'Peshawer', 'Hyderabad']
// console.log(copyCities) // ['Karachi', 'Lahore', 'Islamabad', 'Queta', 'Peshawer', 'Hyderabad']

//  Merge Array
const arr1 = [3, 4, 5, 6]
const arr2 = [7, 8, 9, 10]
const mergeArr = [...arr1, ...arr2]
// console.log(mergeArr) // [3, 4, 5, 6, 7, 8, 9, 10]
const newArr = [1, 2, ...arr1, ...arr2]
// console.log(newArr) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const personal = {
    name: "Muhammad Usama",
}
const detail = {
    trainer: "Sir Sufyan",
    course: "Web and App",
    campus: "Bhadurabad",
}
// Merge Object 
const stu1 = { ...personal, ...detail }
// console.log(stu1) // {name: 'Muhammad Usama', trainer: 'Sir Sufyan', course: 'Web and App', campus: 'Bhadurabad'}

// Wrong Order (No Overwrite)
const stu2 = {
    name: "Abdur Rehman",
    ...stu1,
}
// console.log(stu2) // {name: 'Muhammad Usama', trainer: 'Sir Sufyan', course: 'Web and App', campus: 'Bhadurabad'}

// name is overwritten because it comes after ...user.
const stu3 = {
    ...stu1,
    name: "Yasir",
}
// console.log(stu3) // {name: 'Yasir', trainer: 'Sir Sufyan', course: 'Web and App', campus: 'Bhadurabad'}

// Spread Operator create shallow copy only
// --> A shallow copy copies only the top-level properties, while nested objects still reference the same memory location.

const user = {
    name: "usama",
    address: { city: "Karachi" },
}
const shallowCopy = { ...user }
shallowCopy.address.city = "Islamabad";
console.log(shallowCopy) // {name: 'usama', address: {city: 'Islamabad'}}
console.log(user) // {name: 'usama', address: {city: 'Islamabad'}}

// Deep Copy (not use spread operator)
// A deep copy duplicates an object and all of its nested objects so no references are shared.

const deepCopy = JSON.parse(JSON.stringify(user));
deepCopy.address.city = "Lahore"
console.log(deepCopy) // {name: 'usama', address: {city: 'Lahore'}}
console.log(user) // {name: 'usama', address: {city: 'Islamabad'}}

// spread on string
const word = "Heloo"
const spreadWord = [...word]
console.log(spreadWord) // ['H', 'e', 'l', 'o', 'o']

// ------------------------ Rest Operator (Collect Data) ------------------------------

const [one, two, ...rest] = [1, 2, 3, 4, 5, 6, 7]
console.log(one, two) // 1  2
console.log(rest) // [3, 4, 5, 6, 7]

//Rest in Function Parameters
// function test(...a, b) {} // Error

function foo(name, ...skills) {
    console.log(name)
    console.log(skills)
}

foo("usama", "HTML", "CSS", "JavaScript")

// combine rest and spread operator
function show(...rest) {
    console.log(rest)
}
let showArr = [1, 2, 3, 4, 5]
show(showArr)
console.log(...showArr) // 1 2 3 4 5
const [first, second, ...restOfOther] = [...showArr]