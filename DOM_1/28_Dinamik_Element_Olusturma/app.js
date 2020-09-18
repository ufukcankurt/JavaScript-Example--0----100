// Yeni Element Olusturma



const newLink = document.createElement("a");
const cardbody = document.getElementsByClassName("card-body")[1];

newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com";
newLink.target = "_blank";

newLink.appendChild(document.createTextNode("Farklı Sayfaya Git"));

cardbody.appendChild(newLink); // son çocuk olarak eklemeyi sağlar.


                            // Text Content ---> bununla eklediğimizde , içindeki herşey gider..

                            // cardbody.textContent = "saewqeqweqw";

                            // Text Node  ---> Text node ile yeni bir şey olusturup onu , en son cocuk olarak ekliyoruz..

                                // const text = document.createTextNode("Naber");
                                // cardbody.appendChild(text);
                                // console.log(cardbody);


console.log(newLink);