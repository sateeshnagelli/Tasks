let todoItemsContainer = document.getElementById("todoItemsContainer");
let addTodoButton = document.getElementById("addTodoButton");

let todoList =[{
    text: "Learn HTML",
    UniqueNo: 1
},
{
    text: "Learn CSS",
    UniqueNo: 2
},
{
    text: "Learn JavaSCript",
    UniqueNo: 3
}
];

let todosCount = todoList.length;

function onTodoStatusChange(checkboxId, labelId){
    let checkboxElement = document.getElementById(checkboxId);
    let labelElement = document.getElementById(labelId);

    labelElement.classList.toggle('checked');
    
}

function onDeleteTodo(todoId){
    let todoElement = document.getElementById(todoId);

    todoItemsContainer.removeChild(todoElement);

}

function createAndAppendTodo(todo){
    let todoId = 'todo' + todo.UniqueNo;
    let checkboxId = 'checkbox' + todo.UniqueNo;
    let labelId = 'label' + todo.UniqueNo;

    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex","flex-row");
    todoElement.id = todoId;
    todoItemsContainer.appendChild(todoElement);

    let inputElement = Document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxId;

    inputElement.onclick = function(){
        onTodoStatusChange(checkboxId, labelId);
    };


    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex","flex-row");
    todo.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for",checkboxId);
    labelElement.id = labelId;
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-containet");
    labelContainer.appendChild(deleteIconContainer);
    
    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");

    deleteIcon.onclick = function(){
        onDeleteTodo(todoId);
    };

    deleteIconContainer.appendChild(deleteIcon);

}

for( let todo of todoList){
    createAndAppendTodo(todo);
}

function OnAddTodo(){
let userInputElement = document.getElementById("todoUserInput") ;
let userInputValue = userInputElement.value;

if(userInputValue ===""){
    alert("Enter Valid Text");
    return;
}

todosCount = todosCount+1;

let newTodo = {
    text: userInputValue,
    UniqueNo : todosCount
};

createAndAppendTodo(newTodo);
userInputElement.value = "";
}

addTodoButton.onclick = function(){
    OnAddTodo();
};