let password1 = document.querySelectorAll('input.input1');
let password2 = document.querySelectorAll('input.input2');
let btn = document.querySelector('button');

btn.onclick = function(){
    let pass1 = password1.values;
    let pass2 = password2.values;

    if (pass1 == pass2) {
        alert("Palavra passe correcta");
    }else{
        alert("Palavra passe incorrecta");
    }
}

