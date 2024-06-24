// Verifica se há um item 'currentUser' no sessionStorage e se 'currentUser' é válido
let currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
let contratoTrue = JSON.parse(sessionStorage.getItem("contratado")) || false;

if(contratoTrue) {
  let nelcat = document.querySelector('.nelcat');
  let linkInicio = document.querySelector('.linkInicio');
  let linkPlanos = document.querySelector('.linkPlanos'); 
  let linkDepoimentos = document.querySelector('.linkDepoimentos'); 
  let comeToIndexPag = document.querySelector('.comeToIndexPag a');

  nelcat.setAttribute('href', '../Contrado/index.html');
  linkInicio.setAttribute('href','../Contrado/index.html');
  linkDepoimentos.setAttribute('href','../Contrado/index.html');
  linkPlanos.setAttribute('href','../Contrado/Planos.html');
  comeToIndexPag.setAttribute('href', '../Contrado/index.html');
} 
else{
  console.log('Nada')
}

let users = JSON.parse(localStorage.getItem("users")) || [];

function saveMainInformation(currentUser) {
  let indexCurrentUser = users.findIndex((user) => user.email == currentUser.email);
  if (indexCurrentUser !== undefined) {
    users[indexCurrentUser] = currentUser;
    localStorage.setItem("users", JSON.stringify(users));
  }
}
let nameElement = document.querySelector("#nameLabel");
let emailLabel = document.querySelector("#emailLabel");
let checkMark = document.querySelector(".checkMark");
let subName = document.querySelector("#subName");
let phoneUser = document.querySelector("#phoneLabel");
let phoneNumberCountry = document.querySelector('.phoneNumberCountry');
let genero = document.querySelector("#generoUser");
let date = document.querySelector("#date");
let countryOnly = document.querySelector('.countryOnly');
let buttonElement = document.querySelector("#buttonElement");
let passaport = document.querySelector('#passaport');
let passwordUser = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirm');
let saveElement = document.querySelector('#saveElement');
let verification = true;
let verificationConfirm = true;
let isNameValid = true;
let olhoPassword = document.querySelector('#olhoPassword');
let olhoConfirmPassword = document.querySelector('#olhoConfirmPassword');


buttonElement.addEventListener("click", function () {
  location.reload();

  if(passaport.value){
    currentUser.passPortUser = passaport.value;
  }
  if(date.value){
    currentUser.dataNascimento = date.value;
  }

  if(phoneUser.value.lenght >= 9){
    currentUser.phoneNumber = phoneUser.value;
  };
  if (nameElement.value) {
    currentUser.name = nameElement.value;
  };
  if(subName.value) {
    currentUser.apelido = subName.value;
  };
  if(genero.value == "Masculino" || genero.value == "Femenino"){
    currentUser.genero = genero.value;
  }
  saveDadosElement();
  saveMainInformation(currentUser);
});

saveElement.addEventListener("click", function () {
  location.reload();

  if (passwordUser.value === confirmPassword.value) {
    currentUser.password = passwordUser.value;
  } 
  else {
    confirmPassword.style.border ="1px solid red";
  }
  saveDadosElement();
  saveMainInformation(currentUser);
})

function saveDadosElement() {
  sessionStorage.setItem("currentUser", JSON.stringify(currentUser));
}


(function () {

  // Adicione valores aos elementos
  nameElement.value = currentUser.name ?? "";
  emailLabel.value = currentUser.email ?? "";
  subName.value = currentUser.apelido ?? "";
  countryOnly.value = currentUser.country ?? "";
  date.value = currentUser.dataNascimento ?? "";
  passaport.value = currentUser.passPortUser ?? "";
  phoneUser.value = currentUser.phoneNumber ?? ""; 
  genero.value = currentUser.genero ?? "";
  date.value = currentUser.dataNascimento ?? "";


  if(passaport.value.trim() == "" || passaport.value == null || passaport.value == undefined || passaport.value.lenght < 14){
    passaport.style.border ="1px solid red";
  }
  else {
    passaport.style.border ="1px solid green";
  }
  if(genero.value !== ""){
    genero.style.border ="1px solid green";
  }
  else {
    genero.style.border ="1px solid red";
  }
  if(phoneUser.value.trim() == "" || phoneUser.value == undefined || phoneUser.value.lenght < 9) {
    phoneUser.style.border ="1px solid red";
    phoneNumberCountry.style.border ="1px solid red";
  } 
  else {
    phoneUser.style.border  ="1px solid green";
    phoneNumberCountry.style.border ="1px solid green";
  }

  if(!genero.value.trim() || genero.value == null || genero.value == undefined || genero.value !== "Escolha o sexo") {
    genero.style.border = "1px solid green";
  } 
  else {
    genero.style.border = "1px solid red";
  }
  if (date.value.trim() !== '' ){
    date.style.border ="1px solid green";
  }
  else {
    date.style.border ="1px solid red";
  }

  if(countryOnly.value !== null || undefined ){
    countryOnly.style.border ="1px solid green";
  }
  else {
    countryOnly.style.border ="1px solid red";
  }

  if (currentUser && currentUser.name) {
    if (emailLabel.checkValidity()) {
      emailLabel.style.border = "1px solid green";
    } 
    else {
      emailLabel.style.border = "1px solid red";
    }
    if ( subName.value == "" || subName.value == undefined || subName.value == null ) {
      subName.style.border = "1px solid red";
    } 
    else {
      subName.style.border = "1px solid green";
    }
    // Verifica o elemento de nome
    if (!nameElement.value.trim() || !/^[a-zA-Z\s]+$/.test(nameElement.value) || !/^[A-Z]/.test(nameElement.value)) {
      nameElement.style.border = "1px solid red";
      isNameValid = false;
      checkMark.style.display = "none";
    } 
    else {
      nameElement.style.border = "1px solid green";
      checkMark.style.display = "block";
    }
  }
})();