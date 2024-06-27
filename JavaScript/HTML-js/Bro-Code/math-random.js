 const myButton = document.getElementById("myButton");
 const label1 = document.getElementById("label1");
 const label2 = document.getElementById("label2");
 const label3 = document.getElementById("label3");

 const min = 1;
 const max = 6;
 let randonNum1;
 let randonNum2;
 let randonNum3;

 myButton.onclick = function(){
   randonNum1 = math.floor(math.random()* max)+min;
   randonNum2 = math.floor(math.random()* max)+min;
   randonNum3 = math.floor(math.random()* max)+min;

   label1.textContent = randonNum1;
   label2.textContent = randonNum2;
   label3.textContent = randonNum3;
 }