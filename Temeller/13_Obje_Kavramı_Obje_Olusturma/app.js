let value;

const programmer = {
    name : "Ufuk Can Kurt",
    age : 25,
    email : "ufuk.cnk@gmail.com",
    langs : ["HTML" , "CSS" , "JavaScript"],

    address : {
        city : "Denizli",
        street : "Bağbaşı",
    },

    work : function(){
        console.log("Programcı Calısıyor...");
    }
}


value = programmer;

value = programmer.email;   // genel olarak bunu kullanırız.
value = programmer["email"];

value = programmer.langs;

value = programmer.address.city;

programmer.work();


const programmers = [
    {name: "Ufuk Can Kurt", age:25},
    {name: "Osman Sağlam", age: 22}
];

value = programmers[0].name;




console.log(value);