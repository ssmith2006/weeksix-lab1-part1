"use strict";

let numArrays = ["100", "456", "98", "45", "43", "73"];

let evens = numArrays.filter((num) => num % 2 === 0);

let ul = document.createElement("ul"); 

let ulEvens = document.createElement("ul");

for (let i = 0; i < numArrays.length; i++) {

  let li = document.createElement("li"); 
  li.textContent = numArrays[i]; 
  ul.appendChild(li); 
}

for (let i = 0; i < evens.length; i++) {

  let li = document.createElement("li");
  li.textContent = evens[i];
  ulEvens.appendChild(li);
}

document.getElementById("numArrays").appendChild(ul);
document.getElementById("evens").appendChild(ulEvens);