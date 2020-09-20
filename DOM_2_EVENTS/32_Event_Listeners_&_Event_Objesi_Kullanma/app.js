const filterInput = document.getElementById("filter");   // 
const todoForm = document.getElementById("todo-form");     // formumuzu seçiyoruz




  todoForm.addEventListener("submit",submitForm); // submit olduğunda bir tane fonksiyon çalıştırmak istiyorum.

  function submitForm(e){

    console.log("Submit Eventi"); // bu yazı consolda hemen cıkıyor ama kayboluyor cünkü sayfa yenileniyor

    // default olarak sayfamız yenileniyor ancak biz bunun yenilenmesini istemiyoruz , alttakini yaparak bunu elde edeceğiz.
    e.preventDefault(); // Bu methodu işlemlerin en altında yapmamız daha iyi olur. // default olan özelliklerini engellemiş oluyoruz bunu yaparak
  }


 

  

filterInput.addEventListener("focus",function(e){ // ilk olarak hangi eventin olustugunu söylüyoruz "focus" , daha sonra callback fonksiyonu calısacak , "function(e)" .... 
                                        // js otomatik olarak bize event parametresi gönderiyor.."e , event ---> bunları diyebiliriz paramaetre olarak."
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.placeholder);  // eventin farklı özelliklerini elde ettik.
    console.log(e.target.className);


    // console.log("Naber");
});

filterInput.onfocus = function(){  // yukarıdaki ile aynı işlemi yapıyoruz.
    console.log("Naber");
}





