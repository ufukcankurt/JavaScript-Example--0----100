// Window Object

let value ;


value = document;
value = document.all;   // html içindeki , tüm elementleri bize verir
value.document.all.length;
value = document.all[0];    //


// const elements = document.all; // HTML Collection
// for( let i = 0 ; i< elements.length ;i++){
//     console.log(elements[i]);  // HTML Collection'un içindeki tüm elementlerimizi buraya yazdırmış oluruz.
// }

// elements.forEach(function(element){ // HTML collection üzerinde forEach , kullanamayız.
//     console.log(element);           //  Sadece yukarıdaki  gibi for döngüsü kullanabiliriz.
// });


// const collection = Array.from(document.all); // HTML collection'u array'e dönüştürdük.


// collections.forEach(function(collection){  // Array'e cevirdiğimiz için artık , forEach olarak kullanabildik.
//     console.log(collection);    
// });



value = document.all[8]; // 8. indekste olduğu için , body'e erişmiş olduk.
value = document.body ; // yine bu sekilde body'e erişebiliriz.
value = document.head;
value = document.location;
value = document.location.hostname;
value = document.location.port;

value = document.URL;

value = document.characterSet; // UTF-8 , bunu alırız.



console.log(value);