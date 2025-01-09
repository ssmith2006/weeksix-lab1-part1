"use strict";

const numArrays = ["100", "456", "98", "45", "43", "73"];

const evens = numArrays.filter((num) => num % 2 === 0);

const ul = document.createElement("ul"); 

for (let i = 0; i < numArrays.length; i++) {

  const li = document.createElement("li"); 
  li.textContent = numArrays[i]; 
  ul.appendChild(li); 
}

document.getElementById("numArrays").appendChild(ul);
document.getElementById("evens").textContent = "Even numbers: " + evens.join(", ");