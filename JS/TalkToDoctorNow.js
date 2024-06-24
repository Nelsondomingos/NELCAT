let calling = document.querySelector('#calling');
let getBody = document.querySelector('body');
titleElemnt = document.querySelector('h1');
clicou = () => {
   alert('Nelson Domingos');
}
   let videoElement = document.getElementById('videoElement');
   videoElement.addEventListener('click',clicou);

// videoElement
document.addEventListener("DOMContentLoaded", function () {
   const video = document.getElementById('videoElement');
   // Tente acessar a câmera do usuário
   if (navigator.mediaDevices.getUserMedia) {
       navigator.mediaDevices.getUserMedia({ video: true })
           .then(function (stream) {
               // Associar o stream da câmera ao elemento de vídeo
               video.srcObject = stream;

                setTimeout(function (){
                    titleElemnt.style.display ="none";
                    calling.style.display ="none";
                    getBody.style.backgroundImage = "url('../../IMG/Doutor.webp')";
                },5000);
           })
           .catch(function (error) {
               console.error("Erro ao acessar a câmera: ", error);
           });
   }
    else {
       console.error("getUserMedia não é suportado neste navegador");
   }
});