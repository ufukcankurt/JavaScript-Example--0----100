const cardBody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");

// Click Event

title.addEventListener("click",run);  // mouse ile tıkladığımızda aktif olur

// Double Click

title.addEventListener("dblclick",run);  // mouse ile " 2 kez " tıkladığımızda aktif olur

// Mouse Down

title.addEventListener("mousedown",run); // click'ten neredeyse hiç bir farkı yok

// Mouse Up

title.addEventListener("mouseup",run);  // mouse basıp ,, tam bıraktıktan sonra aktif olur.

// Mouse Over

title.addEventListener("mouseover",run);  // Biz o elementin üzerine geldiğimiz zaman oluşur. 
//                                       // Tıklamaya gerek yok sadece üzerine gelmemiz yeterli


// Mouse Out 
// elementin üzerine geldik , ve tam olarak onun üzerinden ayrıldığımız anda oluşur 

title.addEventListener("mouseout",run); 


cardBody.addEventListener("mouseover",run); // en geniş kapsayıcıya verdiğimizde , tam onun alanına girdiğimizde oluşur.
cardBody.addEventListener("mouseout",run); // ve bu alanın içindeki herhangi bir elemnte girersek yine bir kez daha oluşur
//                                          // örneğin <li> gibi.. Farklı elementlere girdiği sürece sürekli olusacak.
///   mouseout ve mouseover için aynı seyler gecerli..


// Mouse Enter   ve   Mouse Leave  ----> Bu sefer cardBody'nin sınırına girdiğimizde MouseEnter aktif olur 
// Ve sınırından cıktığımız anda ise , MouseLeave aktif olur.. yani içerisindeki başka elementlere girsek bile
// yukarıdakiler gibi herhangi bir şeye etki etmez... sadece ve sadece CardBody'nin sınırlarına girip cıkmakla alakalı.

cardBody.addEventListener("mouseenter",run); // 
cardBody.addEventListener("mouseleave",run); 

                                        


function run(e){
    console.log(e.type);
}

