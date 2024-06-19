let greeting = '{"greetText":"Wishing that the new year will bring joy, love , peace and happiness to you.","from":Sateesh,"to":sagar}'

let parsedValue = JSON.parse(greeting);

let greetTextEl = document.getElementById("greetText");
let greetFormEl = document.getElementById("greetForm");
let greetToEl = document.getElementById("greetTo");

greetTextEl.textContent = parsedValue.greetText;
greetFormEl.textContent = "From:" + parsedValue.from;
greetToEl.textContent = "Top:" + parsedValue.to;