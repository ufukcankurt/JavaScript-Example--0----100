const name = "Ufuk Can Kurt";
const department = "Bilişim";
const salary = 4000 ;


// const a = "İsim: " + name + "\n" + "Departman: " + department + "\n" + "Maaş: " + salary;


// const a = `İsim:${name}\nDepartman:${department}\nMaaş:${salary}`;


// const html = "<ul> " +
//              "<li>" + name + "</li>" +
//              "<li>" + department + "</li>" +
//              "<li>" + salary + "</li>" +
//              "</ul>"


function a(){
    return "merhaba";
}

const html = `
            <ul>
              <li>${name}</li>
              <li>${department}</li>
              <li>${salary}</li>
              <li>${a()}</li>
              <li>${10 / 2}</li>
            </ul>
        `;


document.body.innerHTML = html ;

console.log(a);