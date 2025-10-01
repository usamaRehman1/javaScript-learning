// text will be capitalized
let text = "i am muhammad usama and i live in sher shah";
//.split() method is used to split a string into an array of substrings, based on a specified separator.
let textToArr = text.split(" "); 
let newTextArr = []; //empty array

for (let i = 0; i < textToArr.length; i++) {
    //.charAt() method in JavaScript is used to return the character at a specific index in a string.
    //.toUpperCase() for capital letter
    //.slice() for for copy remain string
    const element = textToArr[i].charAt(0).toUpperCase() + textToArr[i].slice(1);
    newTextArr.push(element)
}
// .join() method in JavaScript is used to combine the elements of an array into a single string, using a specified separator between each element
let arrToText = newTextArr.join(" ");
console.log(arrToText)