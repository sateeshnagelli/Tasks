decreaseBtn = document.getElementById("decreaseBtn");
increseBtn = document.getElementById("increaseBtn");
resetBtn = document.getElementById("resetBtn");
countLabel = document.getElementById("countLabel");

let count = 0;

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

increseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}