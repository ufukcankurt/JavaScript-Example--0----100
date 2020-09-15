let value ; 

const firstName = "Louis";
const lastName = "Armstong";


const langs = "Java,Python,C++";

value = firstName + lastName;

value = firstName + " " + lastName;

value = "Ufuk Can ";

value += "Kurt"; // value = value + "Kurt";

value = firstName.length; // uzunluğunu bulmamızı sağlar.

value = firstName.concat( " " , lastName, " " ,"Caz"); // Firstname + " " + ... // firstname'in sonuna içine girdiğimiz parametreleri ekleyerek devam eder.

value = firstName.toLowerCase(); // firstname'in tüm harflerini küçük yapar

value = firstName.toUpperCase(); // aynı sekilde tüm harfleri büyük yapar.

value = firstName[2]; // 2. indekste hangi karakter varsa ona ulasıyoruz.


// INDEX OF --- bizim içine verdiğimiz karakterimizin nerede olduğunu bize söyler.
// içerisinde aradığımız karakter yoksa bize -1 döner.

value = firstName.indexOf("L");


// CHAR AT

value = firstName.charAt(0); // 0'nci indeksi bize verir.

// SPLİT - çok önemli
// bir tane dosyada virgüller ile ayrılmış bir elemanımız varsa bunları tek tek almamızı sağlayabilir.

value = langs.split(","); // bunu virgüle göre parçala demiş oluyoruz.. Ve her bir elemanı alıp , bir tane array'e yerleştirir.


// REPLACE

value = langs.replace("Pyhton","CSS"); // --> burada Pyhton , yerine "CSS" yazmamızı sağlar.


// INCLUDES - belli alanları sorgulamayı sağlar. True / False degerlerini döner.

value = langs.includes("Java"); // bu stringin içinde Java var mı diye kontrol eder.




console.log(value);