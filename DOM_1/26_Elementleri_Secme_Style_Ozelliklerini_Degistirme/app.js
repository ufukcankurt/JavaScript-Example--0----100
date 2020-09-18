const element = document.querySelector("#clear-todos");

// Element Ozellikleri

// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.classList[1]);
// console.log(element.textContent);
// console.log(element.href);
// console.log(element.style);


// STYLE VE ELEMENT ÖZELLİKLERİNİ DEĞİŞTİRME

// element.className = "btn btn-primary";
// element.style.color = "#000";
// element.style.marginLeft = "50px";
// element.href = "https://www.google.com.tr";
// element.target = "_blank";
// element.textContent = "Silin";
// element.innerHTML = "<span style = 'color:green'>Silin</span>"



// const elements = document.querySelectorAll(".list-group-item"); // Node List

// elements.forEach(function(el){
//     el.style.color = "red";
//     el.style.background = "#ccc";
// });




let element2 = document.querySelector("li:last-child");

element2 = document.querySelector("li:nth-child(2)");
element2 = document.querySelector("li:nth-child(3)");
element2 = document.querySelector("li:nth-child(4)");
element2 = document.querySelector("li:nth-child(odd)"); // tek sayi olanları // 1-3-5...'nci elemanları secer
element2 = document.querySelector("li:nth-child(even)"); // çift sayı olanları // 2-4-6.... 'nci elemanları secer.

element2.forEach(function(el){
    el.style.background = "#ccc";
    el.style.color = "red";
})

console.log(element2);
