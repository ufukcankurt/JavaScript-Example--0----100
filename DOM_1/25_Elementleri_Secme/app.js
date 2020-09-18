// Element Id'e Göre Secme

let element ; 

element = document.getElementById("todo-form");
element = document.getElementById("tasks-tittle");


// Element Class'a Göre Secme 

element = document.getElementsByClassName("list-group-item");
element = document.getElementsByClassName("card-header");

// Element Tag'a Göre Secme 

element = document.getElementsByTagName("div");

// Query Selector - Css Selector  // sayfadaki tek bir elementi seçiyor..
// diyelim ki class'a göre secmek istedik ,sayfada bulduğu ilk elementi seciyor.

element = document.querySelector("#todo-form");
element = document.querySelector("#tasks-tittle");


element = document.querySelector(".list-group-item"); // bu class'a sahip ilk elementi secti.

element = document.querySelector("li");
element = document.querySelector("div");


// QuerySelectorAll - Tüm Elementleri Secmek İstersek Bunu Kullanacagız.

element = document.querySelectorAll(".list-group-item"); // bu class'a sahip tüm elementleri seçer // NodeList döner


element.forEach(function(el){
    console.log(el);
});

// console.log(element);









