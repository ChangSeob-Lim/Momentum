const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODO_KEY = "todos";
let delId;

let toDoArray = [];

/*
array -> string
JSON.stringify()

string -> array
JSON.parse(value)
*/

function saveToDo(event) {
    localStorage.setItem(TODO_KEY, JSON.stringify(toDoArray));
}

function deleteToDo(event) {
    const liDel = event.target.parentElement;
    liDel.remove();
    
    // filter는 true 값으로 return 되는 Array 값만 return
    toDoArray = toDoArray.filter((item) => item.id !== parseInt(liDel.id));
    saveToDo();
}

function paintToDo(newToDo) {
    const liToDo = document.createElement("li");
    const spanToDo = document.createElement("span");
    const delBtn = document.createElement("button");
    
    liToDo.id = newToDo.id;

    // spanToDo.innerText = newToDo;
    spanToDo.innerText = newToDo.text;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);

    liToDo.appendChild(spanToDo);
    liToDo.appendChild(delBtn);
    toDoList.appendChild(liToDo);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;    
    toDoInput.value = "";
    
    // toDoArray.push(newToDo);
    // saveToDo();
    // paintToDo(newToDo);
    
    newToDoObj = {
        id: Date.now(),
        text: newToDo,
    };

    toDoArray.push(newToDoObj);
    saveToDo();
    paintToDo(newToDoObj);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function getToDoList(item) {
//     toDoArray.push(item);
//     paintToDo(item);
// }

const saveToDoStr = localStorage.getItem(TODO_KEY);

if (saveToDoStr !== null) {
    const parseToDoArray = JSON.parse(saveToDoStr);
    // parseToDoArray.forEach(getToDoList);
    // parseToDoArray.forEach((item) => { 
    //     toDoArray.push(item); 
    //     paintToDo(item); 
    // });
    toDoArray = parseToDoArray;
    parseToDoArray.forEach(paintToDo);
}

// function arrayFilter(item) {
//     if (item === 3) {
//         return false;
//     }
//     return true;
// };

// console.log([1,2,3,4].filter(arrayFilter));