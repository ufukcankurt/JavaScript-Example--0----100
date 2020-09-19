const todoInput = document.getElementById("todo");
let element ;


element = todoInput;
element = todoInput.classList;

// todoInput.classList.add("newClass");
// todoInput.classList.add("newClass2");
// todoInput.classList.remove("form-control");



element = todoInput;
element = todoInput.placeholder;   // placeholder'i görmek için
element = todoInput.getAttribute("placeholder");  // üsttekiyle aynı işi görüyor. 2 şekilde de placeholder'ı görmüş oluruz.
todoInput.setAttribute("placeholder","Naber");  // placeholderi, naber olarak degistirdik
todoInput.setAttribute("title","Input"); // olmayan bir attribut'u de ekleyebiliriz.. title hiç yoktu ama şimdi ekledik. 

todoInput.removeAttribute("name"); // name özelliğini kaldırabiliriz..

// element = todoInput.hasAttribute("required");  // bu attribute var mı diye kontrol ederiz... varsa true , yoksa false döner..


console.log(element);



