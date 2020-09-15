let value;

// Veri Tiplerini String'e Cevirme


value = String(123);
value = String(3.14);
value = String(true);
value = String(false);
value = String(function() {console.log()});
value = String([1,2,3,4]);

// Yani her şeyi stringe cevirebiliriz.

value = (10).toString();    // 10 degerini de aynı sekilde stringe cevirir.
 

// Veritiplerini Sayilara Cevirme

value = Number("123");
value = Number(null); //    0   Number
value = Number(undefined);  //  NaN    Number   - Not a Number : bir sayi değil.
value = Number("Hello World");  //   NaN    Number
value = Number(function(){ console.log});   //   NaN   Number 
value = Number([1,2,3,4]);  //   NaN  Number 

// Sadece sayılar ve null degerleri number'a cevrilebilir.

value = Number("3.14");  //  3.14   Number
value = parseFloat("3.14"); // --> bu da bir üst satırdaki gibi aynı işlemi görür ve sayıya cevirir.
value = parseInt("3");  // bu da sayiyi integer , yani sayiya cevirir


const a = "Hello" + 34 ; //  Hello34    String


console.log(value);
console.log(typeof value);




