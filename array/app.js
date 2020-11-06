var showArr = document.getElementById('arrShow');
let fruitArr = [];
// let fruitArr = [7,4,1,0];
let assendingArr = [];

function Add(){
    let newFruit = document.getElementById('fruitVal') ;
    var flag = true;
    
    for(var i = 0 ; i < fruitArr.length ; i++ ){
        if(newFruit.value == fruitArr[i]){
            flag = false
        }
    }

    if(flag){
        fruitArr.push(newFruit.value);
        showArr.innerHTML = `[${fruitArr} ]`
    }else{
        alert("already Present")
        flag = true 
    }
    newFruit.value = ''
}

const assending = ()=>{
    fruitArr.sort();
    showArr.innerHTML =  `[${fruitArr} ]` ;
}

const desending = ()=>{
    fruitArr.reverse();
    showArr.innerHTML =  `[${fruitArr} ]` ;
}

