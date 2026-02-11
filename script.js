// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn

//noBtn.addEventListener("mouseover", () => {
    //const min = 200;
    //const max = 200;

    //const distance = Math.random() * (max - min) + min;
    //const angle = Math.random() * Math.PI * 2;

    //const moveX = Math.cos(angle) * distance;
    //const moveY = Math.sin(angle) * distance;

    //noBtn.style.transition = "transform 0.3s ease";
    //noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
//});

// Logic to make YES btn to grow

 /*let yesScale = 1;

 yesBtn.style.position = "relative"
 yesBtn.style.transformOrigin = "center center";
 yesBtn.style.transition = "transform 0.3s ease";

 noBtn.addEventListener("click", () => {
    yesScale += 2;

    if (yesBtn.style.position !== "fixed") {
         yesBtn.style.position = "fixed";
         yesBtn.style.top = "50%";
        yesBtn.style.left = "50%";
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
     }else{
         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
    }
 });*/

// YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "YEIIII!";

    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
});

function reproducirEnPantallaCompleta() {
    var video = document.getElementById("miVideo");

    // Mostramos el elemento video
    video.style.display = "block";

    // Intentamos activar pantalla completa según el navegador
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { // Firefox
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { // Chrome, Safari y Opera
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { // IE/Edge
        video.msRequestFullscreen();
    }

    // Iniciamos la reproducción
    video.play();
}

// Opcional: Ocultar el video de nuevo cuando se salga de pantalla completa
document.addEventListener('fullscreenchange', exitHandler);
document.addEventListener('webkitfullscreenchange', exitHandler);
document.addEventListener('mozfullscreenchange', exitHandler);
document.addEventListener('MSFullscreenChange', exitHandler);

function exitHandler() {
    if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
        var video = document.getElementById("miVideo");
        video.pause();
        video.style.display = "none";
    }
}