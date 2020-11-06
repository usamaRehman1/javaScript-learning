var getTask = document.getElementById("getTask");
var ul = document.getElementById("taskList");

const addTask = () => {

    let ulLen = document.querySelectorAll("#taskList li");
    let flag = true;

    for (var i = 0; i < ulLen.length; i++) {
        // console.log(getTask.value.toString())
        // console.log(ulLen[i].childNodes[0].nodeValue.toString())
        if (ulLen[i].childNodes[0].nodeValue.toString() === getTask.value.toString()) {
            // flag = false
            console.log("asd")
        }
    }



    if (getTask.value !== '' && getTask.value !== ' ' && flag !== false) {

        var currli = document.createElement("LI");
        var textNode = document.createTextNode(getTask.value);
        currli.appendChild(textNode);

        // create edit btn
        let editBtn = document.createElement("BUTTON");
        var editBtnText = document.createTextNode("EDIT");
        editBtn.setAttribute("onclick", "edit(this)");
        editBtn.appendChild(editBtnText);

        // create delete btn
        let delBtn = document.createElement("BUTTON");
        let delBtnText = document.createTextNode("DELETE");
        delBtn.setAttribute("onclick", "del(this)");
        delBtn.appendChild(delBtnText);

        currli.appendChild(editBtn);
        currli.appendChild(delBtn);

        ul.appendChild(currli);

        getTask.value = '';
    }else{
        alert('somthig will be wrong in the task')
        flag = true
    }


}

function edit(e) {
    var oldText = e.parentNode.childNodes[0];
    var newText = prompt("enter Edit Text ..", e.parentNode.childNodes[0].nodeValue);
    e.parentNode.childNodes[0].nodeValue = newText

}

function del(e) {
    e.parentNode.remove();
}