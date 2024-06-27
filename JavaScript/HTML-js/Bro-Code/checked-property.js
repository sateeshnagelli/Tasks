 let myCheckBox = document.getElementById("myCheckBox");
 let visaBtn = document.getElementById("visaBtn");
 let masterCardBtn = document.getElementById("masterCardBtn");
 let payPalBtn = document.getElementById("payPalBtn");

 let mySubmit = document.getElementById("mySubmit");

 let subResult = document.getElementById("subResult");
  let paymentResult = document.getElementById("paymentResult");

 mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = `You are Subscribed.`;
    }
    else{
        subResult.textContent = `You are NOT Subscribed.`;
    }

    if (visaBtn.checked){
        paymentResult.textContent =`You are paying with visacard`;
    }
     else if(masterCardBtn.checked){
        paymentResult.textContent =`You are paying with Mastercard`;
     }

     else if (payPalBtn.checked){
        paymentResult.textContent =`You are paying with Paypalcard`;
     }

     else{
        paymentResult.textContent =`Choose one`
     }
 }
