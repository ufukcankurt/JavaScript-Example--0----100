let value ;

const value1 = 10;
const value2 = 4;


// ARİTMETİK İŞLEMLER

// value = value1 + value2 ;
// value = value1 - value2 ;
// value = value1 * value2 ;
// value = value1 / value2 ;
// value = value1 % value2 ;


value = Math.PI;
value = Math.E ; 
value = Math.round(3.6); // sayıları yuvarlamayı sağlar.

value = Math.ceil(3.2); // bütün ondalık değerlerimizi üst sayı olan integer'a yuvarlıyor.

value = Math.floor(3.2); // bütün ondalık değerlerimizi aşağı yuvarlar.

value = Math.sqrt(16); // karekök almamızı sağlar.

value = Math.abs(-10); // mutlak değeri işlemi demektir

value = Math.pow(8,3); // üst almak demektir. 8 ^3

value = Math.max(10 , -1 , 100 , 32); // En yüksek sayıyı bize döner

value = Math.min(3,5,6); // En düşük sayıyı bize döner

value = Math.random(); // rasgele sayı üretmemizi saglar.   0 ile 1  arasında değer üretir.  0 dahil 1 değil

value = Math.random() * 20 ; //   0  ile  20 arasında değerler üretir.  0 dahil 20 değil.

value = Math.random() * 20 + 1 ; // 1 ile 20 arasında değerler üretir.
value = Math.floor(Math.random()  * 20 + 1  ); // 1 ile 20 arasında değer üretir ama bu sefer ondalıktan kurtararak , tam sayı üretiririz.. mesela 18.3 ' ü , 18 olarak bize verecek..


console.log(value);

