const userDetail = {
    name: "usama",
    email: "usama@gmail.com",
    education: {
        matriculation: {
            schName: "Rising sun",
            grade: "A"
        },
        intermediate: {
            collName: "S.M Science College ",
            grade:"A"
        },
        graduation: {
            university: "University Of Karachi",
            department: "Applied Physics",
            division: "First"
        }
    },
    greet: () => `Hi, I am ${userDetail.name}`,
} 
console.log(userDetail)

// Best way when you know the property name in advance (and it’s a valid identifier, no spaces or special characters).
// By using (Dot Notation) objName.objProperty 
console.log(userDetail.name) // usama
console.log(userDetail.greet()) // Hi 
console.log(userDetail.education.intermediate.collName) // S.M Science College

// When Property name is in a variable, Property name has spaces or special characters.
console.log(userDetail['name']) // usama
console.log(userDetail['greet']()) // Hi, I am Usama
console.log(userDetail["education"]["graduation"].university) // University Of Karachi
console.log(userDetail["education"]["graduation"]["department"]) // Applied Physics

// Object destructuring in JavaScript 
let {name , email, education:{matriculation:{schName, grade} , intermediate, graduation}, greet} = userDetail;
console.log(greet()) // Hi, I am usama
console.log(schName)// Rising Sun

// rename the variables while destructuring
let {name:fullName} = userDetail
console.log(fullName); // usama

// If a property might be missing, set a default:
let { age = 27 } = userDetail
console.log(age) // 27