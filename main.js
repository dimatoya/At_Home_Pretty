/*---BUTTON LIST---*/
document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
});



/*---SUSCRIPTION---*/
/*let = alert("Welcome to At Home Pretty..!!, We are happy to receive you, we invite you to subscribe to be part of the raffles that we carry out on a weekly basis.")*/



/*---PAGE MODE DARK---*/
    /*let DarkBackground = confirm("¿Do you want to see it in mode dark?");
        if (DarkBackground == true) {
            let body = document.getElementById("background");
            body.style.backgroundColor = "#383f49";

    /*BUTTONS - PARAGRAPH DARK*/
    /*let paragraph = document.querySelectorAll("a, p");
    for (let i = 0; i <= paragraph.length; i++) {
        paragraph[i].style.color = "#ffffff";
    };
};*/



/*---SCROLL REVEAL---*/
    /*HOME-MAIN*/
        ScrollReveal().reveal('.banner');
        ScrollReveal().reveal('.news-cards', { delay: 300});
        ScrollReveal().reveal('.cards-banner-one', { delay: 300});

    /*ELECTRONICS*/
        ScrollReveal().reveal('.news-cards1', { delay: 400});
        ScrollReveal().reveal('.news-cards2', { delay: 350});

    /*FORM*/
        ScrollReveal().reveal('.text', { delay: 400});
        ScrollReveal().reveal('.parent', { delay: 400});



/*---FORM---*/
var usuario = document.getElementById('usuario');
var apellido = document.getElementById('apellido');
//let Contact = document.getElementById('Contact');

    /*VALIDATE DATA*/
        function validardatos() {
            usuario.addEventListener ('input', validarusuario)
            apellido.addEventListener ('input', validarapellido)

            validarusuario()
            validarapellido()
        }

    /*VALIDATE FIRSTNAME*/
        function validarusuario() {
            if(usuario.value.trim == '') {
                usuario.setCustomValidity ('Please enter your Firstname. Only Letters')
            } else {
                usuario.setCustomValidity ('')
            }
    }

    /*VALIDATE LASTNAME*/
        function validarapellido() {
            if(apellido.value.trim == '') {
                apellido.setCustomValidity ('Please enter your Lastname. Only Letters')
            } else {
                apellido.setCustomValidity ('')
            }
        }

    /*CALL FUNCTION VALIDATE*/
        window.addEventListener ('Load', validardatos)



/*---CONTROLS VIDEO---*/
var video_control = document.querySelector('#mivideo')
var btn_rep = document.querySelector('#repr')

function reproducir() {
    if(video_control.paused) {
        video_control.play()
        btn_rep.innerHTML = '<img src="image/pause.svg">'
    } else {
        video_control.pause()
        btn_rep.innerHTML = '<img src="image/play.svg">'
    }
}

function frenar() {
    video_control.pause()
    video_control.currentTime=0
    btn_rep.innerHTML = '<img src="image/play.svg">'
}

function saltar(fotograma) {
    video_control.currentTime += fotograma
}



/*---CLOCK---*/
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    let color = '#09303a';

    ctx.strokeStyle = '#09303a';
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.shadowBlur = 25;
    ctx.shadowColor = '#09303a';

    function degToRoad(degree)
    {
        let factor = Math.PI / 180;
        return factor * degree;
    }

    function renderTime()
    {
        let now = new Date();
        let today = now.toDateString();
        let time = now.toLocaleTimeString();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        let milliseconds = now.getMilliseconds();
        let newSconds = seconds + (milliseconds / 1000);

        //Background
        let gradient = ctx.createRadialGradient(125, 125, 1, 125, 125, 150);
        gradient.addColorStop(0, '#ffffff');
        gradient.addColorStop(1, 'white');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 500, 500);

        //Hours
        ctx.beginPath();
        ctx.arc(250,250,200,degToRoad(270),degToRoad((hours*15)-90));
        ctx.stroke();

        //Minutes
        ctx.beginPath();
        ctx.arc(250,250,170,degToRoad(270),degToRoad((minutes*6)-90));
        ctx.stroke();

        //Seconds
        ctx.beginPath();
        ctx.arc(250,250,140,degToRoad(270),degToRoad((newSconds*6)-90));
        ctx.stroke();

        //Date
        ctx.fillStyle = color;
        ctx.font = '24px Playfair Display';
        ctx.fillText(today, 170, 250);

        //Time
        ctx.fillStyle = color;
        ctx.font = '15px Playfair Display';
        ctx.fillText(time, 170, 280);
}
    setInterval(renderTime,40);