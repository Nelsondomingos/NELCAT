let informationConsult = JSON.parse(localStorage.getItem("agendada"));
let currentUser = JSON.parse(sessionStorage.getItem("currentUser")) ?? 'Nelson Domingos';
let toast = document.querySelector(".toast");
let userInformation = JSON.parse(localStorage.getItem("contratoNelcat")) || [];
let verificarConsultUserNow = informationConsult ? informationConsult.find((user => user.email == currentUser.email)) : null;

let userInformationContratoHere = userInformation ? userInformation.find((user => user.email == currentUser.email)) : null;
if (!verificarConsultUserNow) {
  toast.style.display = "block";
  setTimeout(function close() {
    if(userInformationContratoHere) {
      window.location = "../Contrado/index.html";
    }
    else {
      window.location = "index.html";
    }
  }, 5000);
} 
else {
  toast.style.display = "none";
  let name = (document.querySelector("#name"));
  email = document.querySelector("#email");
  typeConsult = document.querySelector("#consulta");
  date = document.querySelector("#date").innerHTML = verificarConsultUserNow.date;

  loadin = document.querySelector(".carregando");
  btn = document.querySelector(".btn");
  container = document.querySelector(".container");

  name.innerHTML = verificarConsultUserNow.name;
  email.innerHTML = verificarConsultUserNow.email;
  typeConsult.innerHTML = verificarConsultUserNow.type;

  let userInformationContrato = userInformation.find((userLookin => userLookin.email == currentUser.email ))
  closeElement = document.querySelector("#close").addEventListener("click", function () {

    if(userInformationContrato){
      window.location = "../Contrado/index.html";
    }
    else {
      window.location = "index.html";
    }
  });


  btn.addEventListener("click", function () {
    let modalElement = document.querySelector('.modalInformation');
    modalElement.style.display ="block";
    container.style.display = "none";
    loadin.style.display ="none";

    let buttonNot = document.querySelector('#not');
    let buttonYes = document.querySelector('#yes');
    let elimiando = document.querySelector('#elimiando');

    buttonNot.addEventListener('click', function () {
      container.style.display = "block";
      loadin.style.display ="block";
    });

    buttonYes.addEventListener('click', function () {

      let positionNow = informationConsult.findIndex((user => user.email == currentUser.email))
      informationConsult.splice(positionNow, 1);

      localStorage.setItem("agendada", JSON.stringify(informationConsult));

      modalElement.style.display ="none";
      loadin.style.display ="block";
      elimiando.style.display ="block";
      
      setTimeout(function () {
        loadin.style.display ="none";
        elimiando.style.display ="none";
        if (userInformationContratoHere) {
          window.location = "../Contrado/index.html";
        } else {
          window.location = "index.html";
        }
      },700)
    });
  });
  container.style.display = "block";
  date.style.display = "none";
}


