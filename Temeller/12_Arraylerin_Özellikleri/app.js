let value ;

const numbers = [43 , 54 , 11 ,23 , 53 , 64];

// const numbers2 = new Array(1,2,3,4,5,6,7); 

const langs = ["Pyhton" , "Java" , "C++" , "JavaScript"];

const a = ["merhaba" , 22 , null , undefined , 3.14];


// Uzunluk
value = numbers.length;
// İndeksleme
value = numbers[2];

// Herhangi bir indeksteki değeri değiştirme
numbers[2] = 1000 ; // 2. indeksteki degeri 1000 ile değiştirmiş olduk.

// İndex of 
value = numbers.indexOf(1000); // 1000 degerinin hangi indekste olduğunu bize verir.

// Arrayin sonuna deger ekleme - push
numbers.push(2000);

numbers.unshift(3000); // bu da array'in başına değer eklemeyi saglar.


// Sonundan deger atma
numbers.pop(); // en son degeri direk cıkartır.
numbers.shift; // en baştaki değeri direk cıkartır.



numbers.splice(0,3); // belli bir indeksten belli bir indekse kadar deger atmamızı saglayacak.


// REVERSE

numbers.reverse(); // Arrayimizi ters çevirmeyi sağlar.

// SIRALAMALAR İÇİN

value = numbers.sort(); // sadece bu sekilde olursa sadece sayının ilk hanesine bakarak sıralıyor.

value = numbers.sort(function(x,y){ // küçükten büyüğe sıralama
    return x - y ;
})

value = numbers.sort(function(x,y){ // büyükten kücüğe sıralama
    return y - x ; 
})


console.log(value);