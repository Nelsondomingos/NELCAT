const userAdmin = [
  "Nelson Domingos",
  "12345678",
  "nelsondomingos412@gmail.com",
  "Masculino",
  9399162258,
  "Angola",
];
let admiUser = JSON.parse(localStorage.getItem("admnistrador")) || [];
localStorage.setItem("admnistrador", JSON.stringify(userAdmin));
let userInformation = JSON.parse(localStorage.getItem("contratoNelcat")) || [];

var caminhoAtual = window.location.pathname;
let GetInpuElement = document.querySelector("#password"),
  eyes = document.querySelector("#eyes");
verification = true;
(userInter = document.querySelector(".confirm")),
  (errorLog = document.querySelector("#errorLog"));

function showPassWord() {
  if (verification == true) {
    GetInpuElement.setAttribute("type", "text");
    document.querySelector("#eyes").style.backgroundImage ="url('../../IMG/hidden.png')";
    verification = false;
  } else {
    verification = true;
    GetInpuElement.setAttribute("type", "password");
    document.querySelector("#eyes").style.backgroundImage =
      "url('../../IMG/visiblite.png')";
  }
}

function validarFormulario() {
  document.getElementById("email").innerHTML = "";
  document.getElementById("password").innerHTML = "";

  let input1Value = document.getElementById("email").value.trim();
  let input2Value = document.getElementById("password").value.trim();

  if (
    input1Value === "" ||
    !input1Value.includes("@") ||
    !input1Value.includes(".com")
  ) {
    document.getElementById("email").style.border = "1px solid red";
    document.getElementById("btn").style.cursor = "no-drop";
    return;
  } else {
    document.getElementById("email").style.border = "1px solid green";
    document.getElementById("btn").style.cursor = "pointer";
  }
  // Validando Input 2
  if (input2Value.trim() === "" || input1Value < 6) {
    document.getElementById("password").style.border = "1px solid red";
    let button = (document.getElementById("btn").style.cursor = "no-drop");
    return;
  }
}
let button = document
  .getElementById("btn")
  .addEventListener("click", validarFormulario);
let myForm = document
  .querySelector("#myForm")
  .addEventListener("submit", function (event) {
    document.querySelector("#specialSpan").style.display = "none";
    let carregando = (document.querySelector(".carregando").style.display =
      "block");
    let input2Value = (document.getElementById("password").style.border =
      "1px solid green");

    setTimeout(function timeoutFunction() {
      document.querySelector("#specialSpan").style.display = "block";
      document.querySelector(".carregando").style.display = "none";

      function verificarLoginNoLocalStorage(event) {
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        if (
          caminhoAtual ===
          "/C:/Users/nelso/Documents/.UnyDevTech/Meus%20Projectos/Projeto%20final_Nelcat/HTML/ADMINISTRADOR/loginUp.html"
        ) {
          let usuarioExistenteAdmin = admiUser.find(
            (user) => admiUser[2] === email && admiUser[1] === password
          );
          if (usuarioExistenteAdmin) {
            sessionStorage.setItem(
              "currentUserAdmin",
              JSON.stringify(usuarioExistenteAdmin)
            );
            window.location = "index.html";
            let currentUserAdm = JSON.parse(
              sessionStorage.getItem("currentUserAdmin")
            );
          } else {
            errorLog.style.display = "block";
            document.querySelector(".cadastre").style.marginTop = "-3rem";
            document.querySelector(".otherWay").style.display = "none";
            document.getElementById("email").style.border =
              "1px solid  rgb(238, 230, 230)";
            document.getElementById("password").style.border =
              "1px solid  rgb(238, 230, 230)";
          }
        } else {
          let users = JSON.parse(localStorage.getItem("users")) || [];
          let usuarioExistente = users.find(
            (user) => user.email === email && user.password === password
          );

          if (usuarioExistente) {
            let userContratoDone = userInformation.find(
              (user) => user.email == email
            );
            if (userContratoDone) {
              sessionStorage.setItem("currentUser",JSON.stringify(usuarioExistente));
              window.location = "../Contrado/index.html"; //Vai para área dos contratados;
              localStorage.removeItem("userLog");
              let currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
            }
             else {
              sessionStorage.setItem("currentUser",JSON.stringify(usuarioExistente));
              window.location = "../LOGADO/index.html"; 
              localStorage.removeItem("userLog");
              let currentUser = JSON.parse(
                sessionStorage.getItem("currentUser")
              );
            }
          } else {
            errorLog.style.display = "block";
            document.querySelector(".cadastre").style.marginTop = "-3rem";
            document.querySelector(".otherWay").style.display = "none";
            document.getElementById("email").style.border = "1px solid  rgb(238, 230, 230)";
            document.getElementById("password").style.border = "1px solid  rgb(238, 230, 230)";
          }
        }
        event.preventDefault();
      }
      verificarLoginNoLocalStorage();
      document.querySelector("#myForm").submit();
    }, 2000);
    event.preventDefault();
  });