// Write your code here!


const mainNode = document.querySelector("#main");
mainNode.remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "John Doe is the champion";


document.body.appendChild(newHeader);
