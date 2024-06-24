let  userAdmin = ['Nelson','12345678','nelsondomingos412@gmail.com','Masculino',9399162258,'Angola','Domingos',''];
let newElement = JSON.parse(localStorage.getItem('newArrayElement')) || [];
let consult = JSON.parse(localStorage.getItem("agendada")) || [];

const linkPasswords = document.querySelector('#passorwChange');

let nameUser = document.querySelector('#nameUser').innerHTML = newElement.newName  + ' ' + newElement.newApelido  ?? userAdmin[6];

let emailUser = document.querySelector('#emailUser').innerHTML = newElement.newEmail ?? userAdmin[2];
console.log(newElement);

const tabs = document.querySelectorAll('.tab-btn');
tabs.forEach(tab => tab.addEventListener('click', () => tabclicked(tab)));

  let buttonNot = document.querySelector('#buttonNot');
  let checkBoxElement = document.querySelector('#sair');
  let confirm = document.querySelector('.confirmlogOut');
  let settings = document.querySelector('.settings');

  buttonYes = document.querySelector('#buttonYes');

  checkBoxElement.addEventListener('change', function () {
    if(this.checked) {
      confirm.style.display ="block"; 
      settings.style.transform = "translateY(-15px)"; 
    }
    else {
      confirm.style.display ="none"; 
    }
  });
  buttonNot.addEventListener('click', function () {
    confirm.style.display ="none";
    settings.style.transform = "translateY(10px)"; 
    location.reload();
  });

  buttonYes.addEventListener('click', function () {
    let reloading = document.querySelector('.carregando');
    reloading.style.display ="block";

    setTimeout(function () {
    reloading.style.display ="none";
    window.location ="loginUp.html";
    },2000);
  });

function tabclicked(tab) {
  const contents = document.querySelectorAll('.contant');
  contents.forEach(content => content.classList.remove('show'));
  
  const contentId = tab.getAttribute('content-id');
  const content = document.getElementById(contentId);
  content.classList.add('show');
}

window.onload = function() {
  document.querySelector('#text').focus();
};

const getItensBD = () => JSON.parse(localStorage.getItem('users')) ?? []
const setItensBD = () => localStorage.setItem('users', JSON.stringify(itens))
const user  = getItensBD()
const totalUser = document.querySelector('#pacients').innerHTML = user.length;
let totalAguardando = document.querySelector('.total4 h1').innerHTML = consult.length;
const modal = document.querySelector('.modal-container');
const tbody = document.querySelector('tbody');
const containerElement = document.querySelector('.containerElement');
const closeElement = document.querySelector('.closeElement');
const modal_container = document.querySelector('.modal-container');
const nome = document.querySelector('#nome');
const nascimento = document.querySelector('#data_nascimento');
const email = document.querySelector('#emailInformation');
const apelido = document.querySelector('#apelido');
const sexo = document.querySelector('#sexo');
const passaporte = document.querySelector('#passaporte');
const usuarioPag = document.querySelector('#usuario');

closeElement.addEventListener('click', function (event) {
  event.preventDefault();
  containerElement.style.display ="none";
  modal_container.style.backgroundColor = "transparent";
  location.reload();
});
let itens
let id

function openModal(edit = false,  index = 0) {
  modal.classList.add('active')

  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active')
    }
  }
  // Adicionar os valores do usuário
  nome.innerHTML = user[index].name || "Não informado";
  nascimento.innerHTML = user[index].dataNascimento || "Não informado";
  emailInformation.innerHTML = user[index].email || "Não infomado";
  apelido.innerHTML = user[index].apelido || "Não informado";
  sexo.innerHTML = user[index].genero || "Não informado";
  passaporte.innerHTML = user[index].passPortUser || "Não informado";
}

function editItem(index) {
  openModal(true, index)
}

function deleteItem(index) {
  itens.splice(index, 1)
  console.log(index)
  setItensBD()
  loadItens()
}
function insertItem(item, index) {
  let tr = document.createElement('tr')
  tr.innerHTML = `
    <td>${item.name}</td>
    <td>${item.apelido || "Nenhum"}</td>
    <td> ${item.phoneNumber || "Nenhum"}</td>

    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-info-circle idit' ></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash  delit'></i></button>
    </td>
  `
  tbody.appendChild(tr)
}

function loadItens() {
  itens = getItensBD()
  tbody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
  })
}
loadItens();

let messages = JSON.parse(localStorage.getItem('messages')) || [];
function showDepoimentosUsers() {
  remenderDepoimentos();

  function remenderDepoimentos(){
    let depoimentosUser = document.querySelector('.depoimentosUser');
    depoimentosUser.innerHTML =``;
    messages.forEach((message,index)  =>  {
      let dep = `<li>  
      <h3>${message.nameUserNow}</h3>
      <p>${message.messageUserNow}</p>
      <div class="buttons">
          <button class="btnPost" onclick ="postDepoimento(${index})">Postar</button>
          <button class="btnPost" onclick="deletDep(${index})">Excluir</button>
      </div>
      </li> `;
      depoimentosUser.innerHTML += dep;
    });
  }
}
function deletDep (id){
  messages.splice(id,1);
  localStorage.setItem('messages',JSON.stringify(messages));
  showDepoimentosUsers();
}

function postDepoimento (id) {
  console.log(id);
}
showDepoimentosUsers();
// As consultas disponiveis

let arrayConsults = [
  "Cardiologia",
  "Geriatria",
  "Ginocologia e Obstetrícia",
  "Infectologia",
  "Nefrologia",
  "Neurologia",
  "Oftamologia",
  "Pediatria",
  "Urologia",
  "Dermatologia",
  "Hematologia e Hemoterapia",
  "Médico de família",
  "Neurologia Pediátrica",
  "Psiquiatra",
  "Pneumologia",
  "Psicóloga Generalista",
  "Psicóloga Generalista Adulto e Infantil",
  "Psicóloga Generalista Infantil",
  "Psiquiatra Adulto e Infantil",
  "Otorrinolaringogia",
  "Ortopedia e Traumatologia"
];

let consultsList = document.querySelector('.listsConsults');
let elementNameDelet = document.querySelector('#elementNameDelet');
let consultsContainer = document.querySelector('#consults');

let consultDados = JSON.parse(localStorage.getItem("consults")) || arrayConsults;
localStorage.setItem('consults', JSON.stringify(consultDados));

let idClicado;

function renderConsults() {
  consultsList.innerHTML = '';
  consultDados.forEach((consult, index) => {
    let p = `<p onclick="clicou(${index})">
    <img src="../../IMG/check-mark.png" width="13px" alt="">
    ${consult}
    </p>`;
    consultsList.innerHTML += p;
  });
}

function clicou(id) {
  consultsContainer.style.overflowY = "hidden";
  spaceConsultDelet.style.display = "block";
  background.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  elementNameDelet.innerHTML = `${consultDados[id]}`;
  idClicado = id;
}
let delitConsult = document.querySelector('.delitConsult').addEventListener('click', function removeConsult() {
  spaceConsultDelet.style.display = "none";
  background.style.backgroundColor = "transparent";
  consultsContainer.style.overflowY = "auto";
  if (typeof idClicado !== 'undefined') {
    if (idClicado >= 0 && idClicado < consultDados.length) {
      consultDados.splice(idClicado, 1);
      localStorage.setItem('consults', JSON.stringify(consultDados));
      renderConsults(); 
      elementNameDelet.innerHTML = '';
    }
  }
});
renderConsults(); 

let background = document.querySelector('.background');
let closeButton = document.querySelector('.close');
let spaceConsultDelet = document.querySelector('#spaceConsultDelet');

closeButton.addEventListener('click', function () {
  spaceConsultDelet.style.display ="none";
  background.style.backgroundColor ="transparent";
  consults.style.overflowY = "auto";
});

let nameLabel = document.querySelector('#nameLabel');
let subName = document.querySelector('#subName');
let emailLabel = document.querySelector('#emailLabel');
let date = document.querySelector('#date');
let generoUser = document.querySelector('#generoUser');
let countryOnly = document.querySelector('.countryOnly');
let save = document.querySelector('#save');
let carregandooo = document.querySelector('.carregandooo');

(function adcionarDados () {
  let admiUserInformation = JSON.parse(localStorage.getItem('admnistrador'));

  let newElement = JSON.parse(localStorage.getItem('newArrayElement')) || [];

  if(newElement){
    nameLabel.value = newElement.newName ?? admiUserInformation[0];
    subName.value = newElement.newApelido ?? admiUserInformation[6];
    emailLabel.value = newElement.newEmail ?? admiUserInformation[2];
    date.value = newElement.newDate ?? 'Não informado';
    generoUser.value = newElement.newGenero ?? 'Escolhe o sexo';
  }
  else {
  // Adicionar os valores nos inputs
  nameLabel.value = admiUserInformation[0];
  subName.value = admiUserInformation[6];
  emailLabel.value = admiUserInformation[2];
  }
}) ();

(function verificarDados () {
  if(nameLabel.value !== '' || undefined) {
    nameLabel.style.border = "1px solid green";
  } 
  else {
    nameLabel.style.border = "1px solid red";
  }
  if(subName.value !== '' || undefined){
    subName.style.border = "1px solid green";
  }
  else {
    subName.style.border = "1px solid red";
  }
  if(emailLabel.value !== ''  || undefined){
    emailLabel.style.border = "1px solid green";
  }
  else {
    emailLabel.style.border = "1px solid red";
  }
  if(date.value !== '' || undefined) {
    date.style.border ="1px solid green";
  }
  else {
    date.style.border ="1px solid red";
  }
  if(generoUser.value == 'Escolhe o sexo' ){
    generoUser.style.border = "1px solid red";
  } 
  else {
    generoUser.style.border = "1px solid green";
  }
  countryOnly.style.border ="1px solid green";
})();

let buttonElement = document.querySelector('#buttonElement').addEventListener('click', function () {
  localStorage.setItem("admnistrador", JSON.stringify(userAdmin));
  save.style.display ="none";
  carregandooo.style.display ="block";

  setTimeout(function () {
    save.style.display ="block";
    carregandooo.style.display ="none";

    location.reload();
  },2000);

  var newArray = {
    newName: nameLabel.value,
    newApelido: subName.value,
    newEmail: emailLabel.value,
    newDate: date.value,
    newGenero: generoUser.value,
  }
  localStorage.setItem('newArrayElement', JSON.stringify(newArray));
});

function editPassword (){
  let errorPass = document.querySelector('#errorPass');
  let confirm = document.querySelector('#confirm');
  let password = document.querySelector('#password');
  let carreg = document.querySelector('#carreg');
  let spanSave = document.querySelector('#saveElement span');

  if(password.value == '' || undefined || null) {
    password.style.border ="1px solid red";
  }
  else {
    password.style.border ="1px solid green";
  }
  if(confirm.value == '' || undefined || null) {
    confirm.style.border ="1px solid red";
  }
  else {
    confirm.style.border ="1px solid green";
  }

  if(password.value !== '' && confirm.value !== '') {

    spanSave.style.display ="none";
    carreg.style.display ="block"

    setTimeout(function () {
      spanSave.style.display ="block";
      carreg.style.display ="none";

      if(password.value !== confirm.value) {
        errorPass.style.display ="block";
        confirm.style.border ="1px solid red";
      }
      else {
        let newPass = JSON.parse(localStorage.getItem('newPassword')) || {};
        if (Object.keys(newPass).length > 0) {
          localStorage.removeItem('newPassword');
        }
        let newPasswdObjeto = {
          newPassElement:password.value,
        }
        localStorage.setItem('newPassword', JSON.stringify(newPasswdObjeto));
      }
    },2000);
  }
}