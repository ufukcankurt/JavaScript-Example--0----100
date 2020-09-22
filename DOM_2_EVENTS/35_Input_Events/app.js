const filter = document.getElementById("filter");



// sayfamızdaki herşeyin yüklenmesi bittikten sonra bu eventimiz oluşacak , 
// ve bizde bunu load fonksiyonu  sayesinde yakalamış olacağız.
document.addEventListener("DOMContentLoaded")


function load(e){
    console.log("Sayfa Yüklendi.")
}


// Focus

filter.addEventListener("focus",run); // bir inputa girdiğimizde focus olur

// Blur

filter.addEventListener("blue",run); // o inputtan cıktığımızda ise ,blur olur..
 
// Paste 

filter.addEventListener("paste",run);  // herhangi bir şeyi yapıştırdığımızda yada CTRL + V yaptığımızda 
// bu event etkin olur.

// Copy

filter.addEventListener("copy",run);  // herhangi bir şeyi kopyaladığımızda bu event çalışır.. CTRL + C 


// Cut

filter.addEventListener("cut",run); // Herhangi bir yazıyı kestiğimizde bu event olusur .. CTRL + X

// Select

filter.addEventListener("focus",run); // herhangi bir şeyi seçtiğimizde ve seçme işlemini bitirdiğimizde
// bu event çalışmış olur.. ne kadar seçtiğimizin önemi yok..




function run(e){
    console.log(e.type);
}



