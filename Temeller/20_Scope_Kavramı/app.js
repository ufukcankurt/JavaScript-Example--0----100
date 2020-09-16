// Scope Kavramı


        // Global Scope

 //       function a(){
 //        // Function Scope
 //       }

 //       if(){
 //           // Blok Scope
 //       }



 var value1 = 10 ;
 let value2 = 20;
 const value3 = 30;

function Func(){
    var value1 = 40;
    let value2 = 50;
    const value3 = 60;
    console.log(value1, value2, value3);
}

Func();                             // 40 , 50 , 60
 console.log(value1, value2, value3); // 10 , 20 ,30   bu degerler birbirine karışmaz... 
                                    // Fonksiyonun içinde degerler calısır ve sonra yok olur.




