// Array Methods
let num = [1,2,3,4,5];                                       // decleration and initialization of array num

let atMethod = num.at(2)                                     // at(index) find the element on array, index will be +ve, if the index value give -ve so it will count the element from the end
let pushMethod = num.push(6)                                 // add element to the end: [1,2,3,4,5,6] 
let popMethod = num.pop()                                    // remove element to the end: [1,2,3,4,5]
let shiftMethod = num.shift()                                // remove element from the start: [2,3,4,5]
let unshiftMethod = num.unshift(1)                           // add element from the start: [1,2,3,4,5]
let fillMethod = num.fill(1)                                 //fill(elementValue) all element: [1,1,1,1,1]
let reverseMethod = num.reverse()                            // sort in desending order: [5,4,3,2,1]
let includesMethod = num.includes(2)                         // is array contains a specified value: true ,if dosent contains value: false
let mapMethod = num.map((val, ind)=> val**2)                 // map() method in is used to create a new array.It does not modify the original array. [25,16,9,4,1]
let filterMethod = num.filter(item => item < 4);             //filter() method in JavaScript creates a new array containing only the elements that pass a test.
let findIndexMethod = num.findIndex(item => item === 2);     // return index number 3
let reduceMethod = num.reduce((totalVal, currVal) => totalVal + currVal ,0 ) //array.reduce((totalVal, currVal) =>  totalVal + currVal }, startingValue); return single value 15
let stringMethod = num.toString()                            // convert into : 5,4,3,2,1
let joinMethod = num.join(" * ")                             // 5 * 4 * 3 * 2 * 1
let spliceMethod = num.splice(1,0,8)                         // splice(start, deletCount, addElement) return empty array: []'
let sliceMethod = num.slice(2,4)                             // slice(startIndex, afterEndingIndex) slice copy array: [4,3]
let sortMethod = num.sort()                                  // [1,2,3,4,5,8]
let sortAscendingMethod = num.sort((a,b)=> a-b)              // sort array as ascending order
let sortdescendingMethod = num.sort((a,b)=> b-a)             // sort array as descending order
let sortRandomMethod = num.sort((a,b)=> 0.5 - Math.random()) // sort array as random order