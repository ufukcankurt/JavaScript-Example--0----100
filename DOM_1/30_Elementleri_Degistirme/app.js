// REPLACE


const cardbody = document.querySelectorAll(".card-body")[1];

const newElement = document.createElement("h3");  // yeni bir h3 olusturduk.

newElement.className = "card-title";
newElement.id = "tasks-title";
newElement.textContent = "Yeni todolar.";


// Eski Elementi Seciyoruz.

const oldElement = document.querySelector("#tasks-title"); // eski elementi seçtik

cardbody.replaceChild(newElement,oldElement); // eski ile yeniyi yer değiştirdik.

console.log(newElement);

