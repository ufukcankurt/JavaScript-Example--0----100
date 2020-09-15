let value ;


const now = new Date(); // Suanki zamanı almamızı sağlar.


const date1 = new Date("9-19-1999 06:15:00");

const date2 = new Date("September 19 1993");

const date3 = new Date("9/19/1993");

value = date1;

value = date1.getMonth();  // 0'dan başlar , yani eylül için 08 alır..
value = date1.getDate(); // O ayın kacıncı günü
value = date1.getDay(); // pazardan 0 olarak başlar , gün bilgisini almamızı saglar.


value = date1.getHours();



date1.setMonth(7); // doğum ayımızı değiştiririz.
date1.setDate(15); // günü değiştiririz... ayın 15'i yaptık.


value = date1 ;









console.log(value);