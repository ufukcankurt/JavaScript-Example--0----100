//  Klavye Eventleri



const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup",changeText);

function changeText(e){

    header.textContent = e.target.value;  // klavyeye basıldıkça inputun üstündeki  başlık ile , eşdeger zamanlı değişir.. 
    console.log(e.target.value); // bir input alanından deger almak istiyorsak bu şekilde yaparız.

}






// Keypress

document.addEventListener("keypress",run); // sadece sayılar ve harfler

function run(e){
    
    console.log(e.which); // hangi tuşa bastığımızı anlamak için // ASCII tablosundaki o tuşun degerini verir.
    console.log("Naber");
    console.log(e.key); // bu şekilde de , hangi tuşa bastıysakk... o tuşun kendisini bize verir.. 

}


//  keydown

document.addEventListener("keydown",run); // sadece sayılar ve harflerin yanı sıra diğer tüm tuşlara bastığımızda da aktif olur.

function run(e){

    console.log(e.key); // bu şekilde de , hangi tuşa bastıysakk... o tuşun kendisini bize verir.. 

}



//   Keyup    // bir tane tuşu bıraktığımız anda bu olusur.


document.addEventListener("keyup",run); // tuşu bıraktığımızda aktif olur.  // tüm tuşlar kullanılabilir

function run(e){

    console.log(e.key); // bu şekilde de , hangi tuşa bastıysakk... o tuşun kendisini bize verir.. 

}