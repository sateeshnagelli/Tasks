let bikes = ["Hero", "Honda", "Bajaj","Sujiki","Yamaha"];
let person = {
    name : "rahul",
    age : 25,
    gender : "male"
};
let todos = [{
    todo : "Attending CCBP sessions",
    todoStatus : "Completed",
},
{
    todo : "Completing pratice sets",
    todoStatus : "Not Completed",
},
{
    todo: "Asking doubts",
    todoStatus : "Completed",
},
];

let valuesToStringify = [bikes, person , todos];

let jsonContainerEl = document.getElementById("jsonContainer");

function createAndAppendValue(stringifiedValue){
    let valueContainerEl = document.createElement("div");
    valueContainerEl.classList.add("value-container");
    jsonContainerEl.appendChild(valueContainerEl);

    let valueEl = document.createElement("span");
    valueEl.textContent = stringifiedValue;
    valueEl.classList.add("value");
    valueContainerEl.appendChild(valueEl);
}

function convertToJSONString(value){
    let stringifiedValue = JSON.stringify(value);
    createAndAppendValue(stringifiedValue);
}

for (let value of valuesToStringify){
    convertToJSONString(value);
}