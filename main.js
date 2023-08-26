
// Declaro toda las constantes que se obtienen del html//

const ganador = document.getElementById('ganador');
const eleccionJugador = document.getElementById('eleccion-jugador');
const eleccionPC = document.getElementById('eleccion-pc');
const btnPiedra = document.getElementById('btn-piedra');
const btnPapel = document.getElementById('btn-papel');
const btnTijeras = document.getElementById('btn-tijeras');
const contadorjugador = document.getElementById("contadorjugador");
const contadorpc = document.getElementById("contadorpc");

// Inicio las variables a usar dentro del jss//

let opcionJugador;
let opcionPc;
let imgJugador;
let imgPc;
let contadorJugador = 0;
let contadorPC = 0;
let imagenes = [
    { name: "Piedra", url: "assets/img/piedra.png" },
    { name: "Papel", url: "assets/img/papel.png" },
    { name: "Tijeras", url: "assets/img/tijera.png" }];

//inicia el juego preguntando nombre de usuario y valida el campo//

function iniciar() {
    let nombreJugador = prompt("Ingrese nombre de usuario");
    //el primero no permite espacios y el segundo que este vacío//
    if (/^\s*$/.test(nombreJugador) || nombreJugador === null) {
        alert("Error: el nombre de usuario no puede estar vacio ni ser solo espacios");
        iniciar();
    } else {
        jugador.innerHTML = nombreJugador;
    }
};

//Elige aleatoriamente la opcion de la pc y llama a la funcion comparar//

function eleccionPc() {
    let n = Math.floor(Math.random() * 3);
    if (n == 0) {
        opcionPc = "Piedra";
    } else if (n == 1) {
        opcionPc = "Papel";
    } else if (n == 2) {
        opcionPc = "Tijeras"
    };
    agregaImagenes();
    comparar();
};

//Compara las elecciones y suma el contador, llama a la funcion imagenes//

function comparar() {
    if (opcionJugador == opcionPc) {
    } else if (opcionJugador == "Piedra" && opcionPc == "Tijeras") {
        contadorJugador++;
    } else if (opcionJugador == "Papel" && opcionPc == "Piedra") {
        contadorJugador++;
    } else if (opcionJugador == "Tijeras" && opcionPc == "Papel") {
        contadorJugador++;
    } else {
        contadorPC++;
    };
    ganadorpartida();
}

//anuncia el ganador de la partida//

function ganadorpartida() {
    contadorjugador.innerHTML = contadorJugador;
    contadorpc.innerHTML = contadorPC;
    if (contadorJugador === 3) {
        alert("Ganaste la partida");
    } else if (contadorPC === 3) {
        alert("Perdiste la partida");
    }
}

//Recorre el arreglo de las imagenes y coloca las elecciones//

function agregaImagenes() {
    for (let i = 0; i < imagenes.length; i++) {
        if (opcionJugador == imagenes[i].name) {
            imgJugador = imagenes[i].url;
            //la comilla al reves es para colocar variables dentro de un string//
            var inserta = `<img class="versus" src=${imgJugador}>`;
            eleccionJugador.innerHTML = inserta;
            versus.innerHTML = "Vs";
        };
        if (opcionPc == imagenes[i].name) {
            imgPc = imagenes[i].url;
            var inserta = `<img class="versus" src=${imgPc}>`;
            eleccionPC.innerHTML = inserta;
            versus.innerHTML = "Vs";
        };
    };
};

//Luego de terminar la partida se tienen que borrar los campos//

function reset() {
    contadorJugador = 0;
    contadorPC = 0;
    contadorEmpate = 0;
    contadorjugador.innerHTML = 0;
    contadorpc.innerHTML = 0;
    ganador.innerHTML = "";
    eleccionJugador.innerHTML = "";
    versus.innerHTML = "";
    eleccionPC.innerHTML = "";
}

//al iniciar llama a la funcion iniciar//

window.addEventListener('load', iniciar);

//evento de eleccion de los botones, tambien se bloquea al terminar la partida//

btnPiedra.addEventListener('click', function () {
    if (contadorJugador < 3 && contadorPC < 3) {
        opcionJugador = "Piedra";
        eleccionPc();
    }
    else {
        btnPiedra.disabled = true;
    }
});

btnPapel.addEventListener('click', function () {
    if (contadorJugador < 3 && contadorPC < 3) {
        opcionJugador = "Papel";
        eleccionPc();
    }
    else {
        btnPapel.disabled = true;
    }
});

btnTijeras.addEventListener('click', function () {
    if (contadorJugador < 3 && contadorPC < 3) {
        opcionJugador = "Tijeras";
        eleccionPc();
    } else {
        btnTijeras.disabled = true;
    }
});






