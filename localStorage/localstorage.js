// Sample data
var userData = {
    name: "John",
    age: 30,
    email: "john@example.com"
};

// Step 1: Convert data to JSON
var jsonData = JSON.stringify(userData);

// Step 2: Store JSON data in localStorage
localStorage.setItem('userData', jsonData);

// Step 3: Retrieve JSON data from localStorage and parse it
var storedData = localStorage.getItem('userData');
var parsedData = JSON.parse(storedData);

// key(index): Returns the name of the key at the specified index in localStorage.
let key = localStorage.key(0);
// console.log(key)

// length: Returns the number of items stored in localStorage.
let len = localStorage.length;
// console.log(len)

// --------- destructuring assignment ------------------- 
// This is a concise way to extract values from an object
var { name, age, email } = parsedData;

// You can now use the parsedData object
console.log(name); // Output: John
console.log(age); // Output: 30
console.log(email); // Output: john@example.com

// removeItem(key): Removes the key-value pair associated with the specified key from localStorage.
let removeUser = localStorage.removeItem("userData");

// clear(): Removes all key-value pairs from localStorage.
localStorage.clear();

// In Google Chrome, you can check the data stored in localStorage.
// => Open Chrome.
// => Right-click on any webpage and select "Inspect" from the context menu.
// => Go to the "Application" or "Storage" tab.
// => Expand the "Local Storage" section in the sidebar.
// => View and inspect the stored data. 