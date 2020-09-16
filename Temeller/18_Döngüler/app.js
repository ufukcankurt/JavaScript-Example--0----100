// while döngüleri


// let i = 0;

// while(i < 10){
//     console.log(i);
//     i++;
// }



// let i = 10 ; 

// while( i > 0){
//     console.log(i);
//     i-- ; //   i -= 2 ; ---> i = i - 2 ;
// }


// BREAK VE CONTİNUE

// Eğer continue koyarsak , döngünün kalan kısımları calıstırılmadan , döngümüz en başına dönüyor..



// let i = 0 ;

// while( i < 10){
//     console.log(i);
    
//     if( i === 5)
//         break;

//     i++;
// }


// while( i < 10){
//     if ( i == 3 || i == 5){
//         i++;
//         continue ;
//     }

//     console.log(i);
//     i++;
// }



// DO WHİLE -- en az 1 defa çalışma garantisi var.

// let i = 0;
// do{                     // ilk başta koşulumuzu kontrol etmiyoruz...
//     console.log(i);     // ilk önce bloğumuz çalışıyor ve sonra koşulu kontrol ediyoruz..
//     i++;                // tabi böyle olunca da , koşul sağlansa da sağlanmasa da 1 kez çalışmış oluyor.
// }
// while(i<10);


const langs = ["Pyhton" , "JavaScript" , "Java"];

// let index = 0 ;

// while( index < langs.length ){
//     console.log(langs[index]);
//     index++;
// }


// for(let i = 0 ; i < langs.length ; i++){
//     console.log(langs[i]);
// }


// FOR EACH yapısı

// langs.forEach(function(lang){
//     console.log(lang);
// });




// MAP 

// const users = [
//     {name:"Ufuk",age:21},
//     {name:"Zeynep",age:25},
//     {name:"Osman",age:27}
// ];

// const names = users.map(function(user){
//     return user.name;
// });

// const ages = users.map(function(user){
//     return user.age;
// });
// console.log(names);
// console.log(ages);



const user = {
    name ="Ufuk",
    age: 21
};

for( let key in user ){ // FOR İN DÖNGÜSÜ ----- her bir key üzerinden 
    console.log(key , user[key]);
}




