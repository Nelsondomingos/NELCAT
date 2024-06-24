let currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
 document.querySelector('#cardName').value = currentUser.name + ' ' + currentUser.apelido;
function validation () {
    let confirm = document.querySelector('.confirm');
    let $creditValue = document.querySelector('#cardNumber');
    let $nameUser = document.querySelector('#cardName');
    let $pinCredit = document.querySelector('#password');
    let $valueCard = document.querySelector('#valueCard');
    let $name = document.querySelector('#name');
    let $pinUser = document.querySelector('#pinUser');
    let $carregando = document.querySelector('.carregando')
    let $spnNone = document.querySelector('#spnNone');

    if($creditValue.value.length < 12 || $creditValue.value.trim() == '' ){
        $creditValue.style.border = "2px solid red";
        $valueCard.style.display = "block";
    } 
    else {
        $creditValue.style.border = "2px solid green";
        $valueCard.style.display = "none";
    }
    if($nameUser.value.length  < 8 || $nameUser.value.trim() == ''){
        $nameUser.style.border = "2px solid red";
        $name.style.display = "block";
    }
    else {
        $nameUser.style.border = "2px solid green";
        $name.style.display = "none";
    }
    if($pinCredit.value.length != 4 || $pinCredit.value.trim() == ''){
        $pinCredit.style.border = "2px solid red";
        $pinUser.style.display = "block";
        return;
    }
    else {
        $pinCredit.style.border = "2px solid green";
        $pinUser.style.display = "none";
    }
    if ($creditValue.value != '' && $creditValue.value != '' &&  $nameUser.value.length  >=  8 && $pinCredit.value != '') {
        let keepGoing = document.querySelector('#keepGoing').addEventListener('click', function () {
            
            let userInformation = JSON.parse(localStorage.getItem("contratoNelcat")) || [];
            let userInformationContrato = {
                email: currentUser.email,
            };
        
            let existentConsult = userInformation.find((user) => user.email === currentUser.email);
        
            if (!existentConsult) {
                userInformation.push(userInformationContrato);
        
                localStorage.setItem('contratoNelcat', JSON.stringify(userInformation));
                window.location = "../Contrado/index.html";
            } else {
                alert('Já tens contrato com a Nelcat');
            }
        });
        $spnNone.style.display = "none";
        $carregando.style.display = "block";

        setTimeout(function () {
            $spnNone.style.display = "none";
            confirm.style.display = "block";
            $carregando.style.display = "none";
            $spnNone.style.display = "block";
        }, 2000);
    } 
    else {
        $spnNone.style.display = "block";
        $carregando.style.display = "none";
    }
}