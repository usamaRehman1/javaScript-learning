const email = document.querySelector("[placeholder='example@mail.com']");
const password = document.querySelector("[placeholder='enter password']");

// ----------------- Regex (Regular Expression) --------------------------------
// Regex is a pattern used to search, match, validate, or replace text.

// test() → returns true / false
// match() → returns matched value
// replace() → replaces matched text

// Email Regex
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
// ^ start
// [a-zA-Z0-9._%+-]+ username
// @ mandatory
// [a-zA-Z0-9.-]+ domain
// \. dot
// [a-zA-Z]{2,} domain extension
// $ end

// Password Regex
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
// (?=.*[a-z]) lowercase
// (?=.*[A-Z]) uppercase
// (?=.*\d) number
// (?=.*[@$!%*?&]) special char
// . {8,} minimum length

// const passwordRegex = /^.{8,}$/; // Minimum 8 characters (Not a strong passwordF)

// -------------------------- test -----------------------------------
const test = emailRegex.test("usama@mail.com");
// console.log(test) // true

// ---------------------------- match --------------------------------
const match = "Usam@12345".match(passwordRegex)
// console.log(match) // ['Usam@12345', index: 0, input: 'Usam@12345', groups: undefined]
// console.log(match.input) // Usam@12345

// ------------------------------ replace -----------------------------
const replaceNumWithString = "usama123".replace(/\d+/, ""); // replace all number with empty string
// console.log(replaceNumWithString) // usama

// -------------------------- Search ---------------------------------
// search() finds the first match of a regex in a string and returns its index (position).
// If nothing is found → it returns -1.

const findFirstNumberIndex = "usama123".search(/\d/);
// console.log(findFirstNumberIndex) // 5 (The first digit is "1".Its index is 5)

const login = () => {
    if (emailRegex.test(email.value.trim()) && passwordRegex.test(password.value.trim())) {
        console.log("Valid User")
    } else {
        console.log("invalid Input")
    }
}