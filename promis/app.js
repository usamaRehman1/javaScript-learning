// sync  => javascript is a syncranance programing it run line by line ;
// async  => async programing is when any load data coming any data base so compiler without waiting it run next line '
// callBack => callBack function is that when we call it and they call another function 

// console.log("one line running time is 0.0005") //0.0005

// async <<====
// Promises 

// function getData(){
//     let data =  (Math.floor(Math.random() * 10) % 2 === 0 ) ? true : false ;
//     return data;
// }

// const success =  () => console.log("data mil gaya");
// const failure = () =>  console.log("data nai mila")

// let promise = new Promise(function(resolve , reject){
//     setTimeout(()=>{ getData() ? resolve() : reject() } ,3000)
// })

// promise.then(()=>{
//     success()
// }).catch(()=>{
//     failure()
// })

async function data(){
    let promise = new Promise(function(resolve, reject){
        let obj = {
            name : "usama",
            email : "urehman739@gmail.com",
        }

        if(obj){
            resolve(obj);
        }else{
            reject();
        }
    })

    let showData = await promise ;
    console.log("data => ", showData)
}

data()

// ----------------------------------------------
// ----------------------------------------------

// callback function <<===== 

// function checkDayTime (msg , callback){
//     if(msg === "morning"){
//         morning(callback);
//     }
//     else if(msg === 'evening'){
//         evening(callback);
//     }else{
//         night(callback);
//     }
// }

// function morning(callback){
//     alert("Good Morning");
//     callback("Hello world")
// }

// function evening(callback){
//     alert("Good Evening");
//     callback("Hello world")
// }

// function night(callback){
//     alert("Good Night");
//     callback("Hello world")
// }

// function callback(msg){
//     alert(msg)
// }
// checkDayTime("evening", callback);

// -------------------------------------------------
// -------------------------------------------------