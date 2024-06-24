let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
console.log(currentUser);
let bodyElement = document.querySelector('body');

if (currentUser) {
    
    infoUser = document.querySelector('#infoUser').innerText = currentUser.name[0];

    setTimeout(function(event){
        event.preventDefault();
    },5000);

} else {
    window.location = "../NÃO_LOGADO/Login.html";
}  