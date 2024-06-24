$getCheckBoxElement.addEventListener('click',toogleElements);

$userImg.addEventListener("mouseover", function() {
    document.querySelector('.informationAboutPerfile').style.display = "block";
});

$userImg.addEventListener("mouseout", function() {
    document.querySelector('.informationAboutPerfile').style.display = "none";
});

let $toSchedule = document.querySelector('.toSchedule');
let $userImg = document.querySelector('.user');
let $getCheckBoxElement = document.querySelector('#botao'); 
let $getCadastroElement = document.querySelector('.cadastro');
let $getOpenElement = document.querySelector('.hidden');
let $GetbodyElement = document.querySelector('body');
let $darkModeOverlay = document.querySelector('.darkModeOverlay');
let $closeX = document.querySelector('#fechar');

function toogleElements () {
    if($getCheckBoxElement.checked){
        $getCheckBoxElement.style.display = "none";
    }
    if ($getCheckBoxElement.checked){
        $getCadastroElement.style.display = "block";
        $darkModeOverlay.style.display = "block";
        $closeX.style.visibility = "visible";
        $GetbodyElement.style.overflowY = "hidden";
    } else {
        $darkModeOverlay.style.display = "none";
        $getCadastroElement.style.display = "none";
        $GetbodyElement.style.overflowY = "auto";
        $closeX.style.visibility = "hidden";
    }
}