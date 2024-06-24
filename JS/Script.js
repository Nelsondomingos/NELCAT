let currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
let userInformationContrato = JSON.parse(localStorage.getItem("contratoNelcat")) || [];

let bodyElement = document.querySelector("body");
let testimony = document.querySelector("#testimony");
let toastifyElement = document.querySelector(".toast");
let toast = document.querySelector("#toast");
let name = document.getElementById("name");
let isNameValid = true;
let email = document.getElementById("email");
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let isEmailValid = true;

function checkekContrato() {
  let errorContrato = document.querySelector("#errorContrato");

  let existentContrato = userInformationContrato.find((user => user.email == currentUser.email));

  if(existentContrato) {
    plantinumElement.style.cursor = "no-drop";
    errorContrato.style.display = "block";

    setTimeout(function () {
      errorContrato.style.display = "none";
    }, 2000);
  }
  else {
    plantinumElement.style.cursor = "pointer";
    errorContrato.style.display = "none";
    window.location = "Plantinum.html";
  }
}

(function () {
  name.value = currentUser.name;
  email.value = currentUser.email;

  if (!name.value.trim()) {
    especialSpan.innerHTML = "O nome não pode estar vazio";
    name.style.border = "1px solid red";
    isNameValid = false;
  } else if (!/^[a-zA-Z\s]+$/.test(name.value)) {
    especialSpan.innerHTML = "O nome deve conter apenas letras e espaços.";
    name.style.border = "1px solid red";
    isNameValid = false;
  } else if (!/^[A-Z]/.test(name.value)) {
    especialSpan.innerHTML = "O nome deve começar com uma letra maiúscula";
    especialSpan.style.marginLeft = "-67px";
    name.style.border = "1px solid red";
    isNameValid = false;
  } else {
    name.style.border = "1px solid green";
    especialSpan.style.display = "none";
  }
  if (isNameValid) {
    name.style.border = "1px solid green";
    especialSpan.style.display = "none";
  }
  if (!email.value.trim()) {
    isEmailValid = false;
    email.style.border = "1px solid red";
    especialSpanEmail.innerHTML = "O email não pode estar vazio";
  } else if (!emailPattern.test(email.value)) {
    especialSpanEmail.innerHTML = "Formato de email inválido";
    email.style.border = "1px solid red";
    isEmailValid = false;
  }
  if (isEmailValid) {
    email.style.border = "1px solid green";
    especialSpanEmail.style.display = "none";
  }
})();

let close = document.querySelector(".close").addEventListener("click", function () {
    toastifyElement.style.display = "none";
  });

document.querySelector("#closeElementTwo").addEventListener("click", function () {
    toast.style.display = "none";
    $darkModeOverlay.style.display = "none";
    $loadin.style.display = "none";
    $GetbodyElement.style.overflow = "visible";
  });

if (currentUser) {
  user = document.querySelector("#user").innerText = currentUser.name[0];
  if (!localStorage.getItem("justOnce")) {
    toastifyElement.style.display = "block";

    localStorage.setItem("justOnce", "true");
  } else {
    toastifyElement.style.display = "none";
  }
  setTimeout(function () {
    toastifyElement.style.display = "none";
  }, 5000);
} else {
  window.location = "../NÃO_LOGADO/Login.html";
  let toastDisplayed = false;
}
logOut = () => {
  localStorage.removeItem("justOnce");
  sessionStorage.removeItem("currentUser");
};

let $loadin = document.querySelector(".carregando");
let $getOpenElement = document.querySelector(".hidden");
let $getCheckBoxElement = document.querySelector("#botao");
let $userImg = document.querySelector(".user").addEventListener("click", userInformation);
let $toSchedule = document.querySelector(".toSchedule").addEventListener("click", toggleEments);
let $darkModeOverlay = document.querySelector(".darkModeOverlay");
let $cadastroElement = document.querySelector(".cadastro");
let $closeElement = document.querySelector(".closeElement").addEventListener("click", closeCard);

function closeCard() {
  $cadastroElement.style.display = "none";
  $darkModeOverlay.style.display = "none";
  $GetbodyElement.style.overflow = "visible";
}

let $GetbodyElement = document.querySelector("body");
let $closeX = document.querySelector("#fechar");
let $userImgCheckBox = document.querySelector("#userImg");
let $close = document.querySelector(".close");

function userInformation() {
  let informationAboutPerfile = document.querySelector(
    ".informationAboutPerfile"
  );
  if ($userImgCheckBox.checked) {
    informationAboutPerfile.style.display = "block";
  } else {
    informationAboutPerfile.style.display = "none";
    informationAboutPerfile.style.display = "none";
  }
}

function toggleEments() {
  if ($getCheckBoxElement.checked) {
    $getCheckBoxElement.style.display = "none";
  }

  if ($getCheckBoxElement.checked) {
    $cadastroElement.style.display = "block";
    $darkModeOverlay.style.display = "block";
    $GetbodyElement.style.overflow = "hidden";
    $closeX.style.visibility = "visible";
  } 
  else {
    $darkModeOverlay.style.display = "none";
    $cadastroElement.style.display = "none";
    $GetbodyElement.style.overflow = "visible";
  }
}
$getCheckBoxElement.addEventListener("click", toggleEments);

function validarFormulario() {
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    let isDateValid = true;
    let isTypeValid = true;
    let especialSpan = document.getElementById("especialSpan");
    let especialSpanEmail = document.querySelector("#especialSpanEmail");
    let especialSpanDate = document.querySelector("#especialSpanDate");
    let especialSpanType = document.querySelector("#especialSpanType");
    let date = document.getElementById("date");
    let type = document.querySelector("#consult");

    if (type.value == "Escolha uma consulta") {
      especialSpanType.innerHTML = "O tipo da consulta é obrigatório";
      type.style.border = "1px solid red";
      isNameValid = false;
      isTypeValid = false;
    } else {
      especialSpanType.style.display = "none";
      type.style.border = "1px solid green";
      isTypeValid = true;
    }
    if (date.value.trim() == "") {
      date.style.border = "1px solid red";
      isDateValid = false;
      especialSpanDate.innerHTML = " A data não pode estar vazia";
    } else {
      date.style.border = "1px solid green";
      especialSpanDate.style.display = "none";
    }

    if (isNameValid && isEmailValid && isDateValid && isTypeValid) {
      $cadastroElement.style.display = "none";
      $darkModeOverlay.style.display = "block";
      $loadin.style.display = "block";

      setTimeout(function () {
        let consultDados = JSON.parse(localStorage.getItem("agendada")) || [];
      
        let userDados = {
          name: name.value,
          email: email.value,
          type: type.value,
          date: date.value,
        };
      
        let existentConsult = consultDados.find((user) => user.email === userDados.email);
      
        if (!existentConsult) {
          consultDados.push(userDados);
          localStorage.setItem("agendada", JSON.stringify(consultDados));
          window.location = "../LOGADO/consultAgend.html";
        }
         else {
          setTimeout(function () {
            toast.style.display = "none";
            $darkModeOverlay.style.display = "none";
            $loadin.style.display = "none";
            $GetbodyElement.style.overflow = "visible";
          }, 5000);
          document.querySelector(".text").innerText = "Já tens uma consulta marcada";
          toast.style.display = "block";
        }
      }, 3000);
    }
  });
}

(function () {
  let nameTesteArea = document.querySelector(".inptOne");
  let emailTesteArea = document.querySelector(".inptTwo");
  let textarea = document.querySelector(".textarea");
  let errorNotification = document.querySelector(".spaceToSendMessageAndInpts p");

  nameTesteArea.value = currentUser.name;
  emailTesteArea.value = currentUser.email;

  if ((nameTesteArea.value && emailTesteArea.value !== "") || undefined || null) {
    nameTesteArea.style.border = "2px solid green";
    emailTesteArea.style.border = "2px solid green";
  }
  function messageUser() {
    let data = {
      messageUserNow: textarea.value.trim(),
      nameUserNow: nameTesteArea.value,
    };

    if (textarea.value.trim() !== "") {
      textarea.style.border = "2px solid green";
      errorNotification.style.display = "none";

      let messages = JSON.parse(localStorage.getItem("messages")) || [];
      messages.push(data);
      localStorage.setItem("messages", JSON.stringify(messages));
      location.reload();
    } else {
      textarea.style.border = "1px solid red";
      errorNotification.style.display = "block";
    }
  }
  let inptToSendMessage = document.querySelector(".inptToSendMessage");
  inptToSendMessage.addEventListener("click", function () {
    messageUser();
  });
})();

let arrayConsults = JSON.parse(localStorage.getItem ("consults")) || [];
let consultsDeponiveis = document.querySelector(".containers");
let conteiner1 = consultsDeponiveis.querySelector(".container1");
let conteiner2 = consultsDeponiveis.querySelector(".container2");
let conteiner3 = consultsDeponiveis.querySelector(".container3");
let cont1 = 0;

arrayConsults.forEach((consult) => {
  let p = `  <p>
  <img src="../../IMG/check-mark.png" width="13px" alt="">
  ${consult}
 </p>`;
  if (cont1 <= 7) {
    conteiner1.innerHTML += p;
    cont1++;
  } else if (cont1 <= 15) {
    conteiner2.innerHTML += p;
    cont1++;
  } else {
    conteiner3.innerHTML += p;
    cont1++;
  }
});