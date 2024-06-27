decreaseBtn = document.getElementById("decreaseBtn");
increaseBtn = document.getElementById("increaseBtn");
resetBtn = document.getElementById("resetBtn");
countLabel = document.getElementById("countLabel");

let count = 0;

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}