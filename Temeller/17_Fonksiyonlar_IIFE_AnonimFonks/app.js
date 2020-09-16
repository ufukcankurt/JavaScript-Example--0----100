// Fonksiyon tanımlama


// function merhaba( name = "Bilgi Yok" , age = "Bilgi yok"){

//     // if(typeof name === "undefined") name = "Bilgi Yok.";

//     // if(typeof age === "undefined") age = "Bilgi yok.";


//     console.log(`İsim : ${name} Yaş : ${age}`);
// }


// merhaba("Ufuk Can Kurt" , 21);

// merhaba(); // Fonksiyon Çağrısı ( Function Call )



// function square(x){
//     return x * x;

//     console.log("Naber"); // daha öncesinde return yaptığımız için burası hiç bir zaman çalışmaz..
// }

// function cube(x){
//     return x*x*x ;
// }

// let a = cube(square(12));

// console.log(a);





// FUNCTİON EXPRESSİON

// const merhaba = function(name){
//     console.log("Merhaba" + name)
// };





// Immediately Invoked Function Expression (IIFE) // tanımlandığı yerde çalışan fonksiyonlar. 

// (function(name){
//     console.log("Merhaba : " + name);
// })("Ufuk");



const database = {

    host:"localhost",
    add: function(){
        console.log("Eklendi");
    },
    get: function(){
        console.log("Elde Edildi");
    },
    update: function(id){
        console.log(`Id : ${id} Güncellendi`);
    },
    delete: function(id){
        console.log(`Id : ${id} Silindi`);
    }
}


console.log(database.host);

database.add();

database.delete(10);


