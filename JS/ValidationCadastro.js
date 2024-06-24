let isNameValid = true;
let passwordElement = document.querySelector("#password");
let confirmCadastro = document.querySelector(".confirm");
let errorCadastro = document.querySelector(".errorCadastro");
let error = document.querySelector("#errorEmail");
let errorPassword = document.querySelector(".password");
let errorName = document.querySelector("#errorName");
let nameElement = document.querySelector("#nameInput");
let emailInput = document.querySelector("#emailInput");
let errorLog = document.querySelector("#errorLog");
let mainContainer = document.querySelector(".mainContainer");
emailInput.setAttribute("pattern", "[a-zA-Z-0-9]+@gmail.com");

function validarInputs(event) {
  if (!nameElement.value.trim()) {
    nameElement.style.border = "1px solid red";
    isNameValid = false;
    errorName.innerHTML = "O nome não pode estar vazio";
  } else if (!/^[a-zA-Z\s]+$/.test(nameElement.value)) {
    errorName.innerHTML = "O nome deve conter apenas letras e espaços.";
    nameElement.style.border = "1px solid red";
    isNameValid = false;
  } else if (!/^[A-Z]/.test(nameElement.value)) {
    errorName.innerHTML = "O nome deve começar com uma letra maiúscula";
    nameElement.style.border = "1px solid red";
    isNameValid = false;
  } else {
    nameElement.style.border = "1px solid green";
    errorName.style.display = "none";
  }

  if (isNameValid) {
    nameElement.style.border = "1px solid green";
    errorName.style.display = "none";
  }
  // Apenas validar o email
  if (emailInput.checkValidity()) {
    emailInput.style.border = "1px solid green";
    error.style.display = "none";
  } else {
    emailInput.style.border = "1px solid red";
    error.style.display = "block";
  }
  // Verificar a senha
  if (passwordElement.value.length < 6 || passwordElement.value == "") {
    errorPassword.style.display = "block";
    passwordElement.style.border = "1px solid red";
  } else {
    errorPassword.style.display = "none";
    passwordElement.style.border = "1px solid green";
  }

  event.preventDefault();
}
document.querySelector("#signUp").addEventListener("click", () => {
  validarInputs();
});

document.querySelector("#myForm").addEventListener("submit", function (event) {
  document.querySelector("#specialSpan").style.display = "none";

  let carregando = document.querySelector(".carregandoo");
  carregando.style.display = "block";

  setTimeout(function () {
    carregando.style.display = "none";
    document.querySelector("#specialSpan").style.display = "block";

    function cadastrarUsersSalvarNoLocalStorage() {
      let nameValue = nameElement.value;
      let email = emailInput.value;
      let passwordValue = passwordElement.value;

      if (passwordValue.length < 6) {
        // Mostrar mensagem de erro
        return;
      } 
      else {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let usuario = {
          name: nameValue,
          email: email,
          password: passwordValue,
          apelido: "",
          phoneNumber: "",
          dataNascimento: "",
          genero: "",
          country: 'Angola',
          passPortUser:"",
          contrato: "",
        };
        let usuarioExistente = users.find((user) => user.email === usuario.email);

        if (!usuarioExistente) {
          errorLog.style.display = "none";
          users.push(usuario);
          localStorage.setItem("users", JSON.stringify(users));
          sessionStorage.setItem("currentUser", JSON.stringify(usuario)); 
          let currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
          window.location = "../LOGADO/index.html";
          localStorage.removeItem("userLog");
        }
        else {
          errorLog.style.display = "block";
          mainContainer.style.height = "490px";
          emailInput.value = "";
          emailInput.style.border = "1px solid red";
          return;
        }
      }
    }
    cadastrarUsersSalvarNoLocalStorage();
  }, 2000);
  event.preventDefault();
});
