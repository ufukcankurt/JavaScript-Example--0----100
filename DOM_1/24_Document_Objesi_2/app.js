let value ;

value = document;

// Scriptler

value = document.scripts; // index.html'in içindeki script taglarini bize verir.

value = document.scripts.length;
value = document.scripts[0];


// Linkler

value = document.links;
value = document.links[0];
value = document.links[document.links.length-1];
value = document.links[document.links.length-1].getAttribute("class"); // clear-todos btn btn-dark
value = document.links[document.links.length-1].getAttribute("href"); // #
value = document.links[document.links.length-1].className; // clear-todos btn btn-dark
value = document.links[document.links.length-1].classList; 



// Formlar 

value = document.forms;
value = document.forms.length; // 1 
value = document.forms[0];  // 0'nci indeksteki formu alıyoruz.
value = document.forms["form"];  // Formumuzun   name : özelliği varsa , name ile de ulasbiliriz , bu sekilde
value = document.forms[0].id;
value = document.forms[0].getAttribute("id");
value = document.forms[0].name;
value = document.forms[0].getAttribute("name");

value = document.forms[0].method; // get 


console.log(value);