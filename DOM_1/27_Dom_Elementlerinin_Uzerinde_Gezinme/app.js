let value ;

const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardrow = document.querySelector(".card.row");


value = todoList;
value = todo;
value = cardrow;

// Child Nodes -- Text dahil , herşeyi alır ,yani aşağı atlayan <br> yi de alır

value = todoList.childNodes;
value = todoList.childNodes[0];

// Children - Element -- Sadece elementleri secer ve textleri almaz.. yani <br> leri almaz..

value = todoList.children;
value = todoList.children[todoList.children.length -1 ]; // son element
value = todoList.children[2].textContent = "Degisti"; 


value = cardrow;
value = cardrow.children;
value = cardrow.children[2].children[1].textContent = "Burası da değişti"; // <br> de cocuk sayılıyor.


value = todoList;
value = todoList.firstElementChild;  // todoList.children[0];
value = todoList.lastElementChild;   // todoList.children[todoList.children.length -1 ];
value = todoList.children.length;  // Kaç tane cocugu olduğunu bize verir.
value = todoList.childElementCount; // Aynı sekilde bu da ,,, Kaç tane cocugu olduğunu bize verir.


value = cardrow;
value = cardrow.parentElement; // container oluyor
value = cardrow.parentElement.parentElement; // body oluyor   /// yani üst üste annelerine çıkıyoruz..

// element kardeşleri --- ebeveyni ortak olan elementlerimizdir.

value = todo ;  // buna 2. element dersek
value = todo.previousElementSibling; // 1. elemente gitmiş oluruz
value = todo.nextElementSibling; // 3. elemente gitmiş oluruz
value = todo.nextElementSibling.nextElementSibling;  // 4. elemente gitmiş oluruz





console.log(value);