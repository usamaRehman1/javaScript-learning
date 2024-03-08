// javaScript Loops : used to repeatedly execute a block of code as
// long as a specified condition is true.

// ------------- For Loop --------------

var array = [1,2,3,4,5,6,7,8,9];
for (let i = 0; i < array.length; i++) {
    const element = array[i]; 
    console.log(element)
}

// ------------- While Loop --------------

var i = 1; // assign initial value
while (i < 10) {
    console.log(i)
    i++; // post increment
}

// ------------- do While Loop --------------

var j = 1;
do{
    console.log(j)
    j++;
}while(j < 10);

// ------------- For in Loop --------------

let obj = { a:1, b:2, c:3 };
for (const key in obj) {
    console.log(key, obj[key])
}

// ------------- For of Loop --------------

const numbers = [1, 2, 3, 4, 5];
for (const number of numbers) {
    console.log(number);
}

// ------------- For of Loop --------------

numbers.forEach(function(number, index) {
    console.log(`Element at index ${index} is ${number}`);
});