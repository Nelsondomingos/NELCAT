let GetInpuElement = document.querySelector("#password");
let eyes = document.querySelector("#geteyes .olho");

let verification = true;
function showPassWord() {
  if (verification == true) {
    GetInpuElement.setAttribute("type", "text");
    document.querySelector("#eyes").style.backgroundImage =
      "url('../../IMG/hidden.png')";
    verification = false;
  } else {
    verification = true;
    GetInpuElement.setAttribute("type", "password");
    document.querySelector("#eyes").style.backgroundImage =
      "url('../../IMG/visiblite.png')";
  }
}
