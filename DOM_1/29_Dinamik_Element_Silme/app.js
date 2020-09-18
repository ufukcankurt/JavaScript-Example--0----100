// Dinamik Element Silme


const todoList = document.querySelector("ul.list-group");
const todos = document.querySelectorAll("li.list-group-item");

// Remove Metodu

todos[1].remove(); // 2. elemanı sildik

// Remove Child

todoList.removeChild(todoList.lastElementChild);
todoList.removeChild(todos[3]);


console.log(todos);
console.log(todoList);



