
// Declaro toda las constantes que se obtienen del html//

const ganador = document.getElementById('ganador');
const eleccionJugador = document.getElementById('eleccion-jugador');
const eleccionPC = document.getElementById('eleccion-pc');
const btnPiedra = document.getElementById('btn-piedra');
const btnPapel = document.getElementById('btn-papel');
const btnTijeras = document.getElementById('btn-tijeras');

// Inicio las variables para comparar las elecciones//

let opcionJugador;
let opcionPc;
let imgJugador;
let imgPc;


const imagenes =[
    {name: "Piedra", url: "assets/img/piedra.png"},
    {name: "Papel",url: "assets/img/papel.png"},
    {name: "Tijeras", url: "assets/img/tijera.png"} ];

//inicia el juego preguntando nombre de usuario y valida el campo//

function iniciar(){   
    

    let nombreJugador="";
    
    nombreJugador= prompt("Ingrese nombre de usuario");

    if(nombreJugador === "") {

        alert("Error: el nombre de usuario no puede estar vacio");

        iniciar();

    }else{        
        
        jugador.innerHTML = nombreJugador;}   
};


//elecciones, toma el boton del jugador y la guarda en opcion jugador y luego llama a la funcion eleccionPc//

btnPiedra.addEventListener('click', function(){
    opcionJugador = "Piedra";
    eleccionPc();
});

btnPapel.addEventListener('click', function(){
    opcionJugador = "Papel";
    eleccionPc();
});

btnTijeras.addEventListener('click', function(){
    opcionJugador = "Tijeras";
    eleccionPc();
})

//Elige aleatoriamente la opcion de la pc y llama a la funcion comparar//

function eleccionPc(){

    let n = Math.floor(Math.random() * 3);

    if(n == 0){
        opcionPc = "Piedra";

    }else if(n == 1){
        opcionPc = "Papel";
        
    }else if(n == 2){
        opcionPc = "Tijeras"
    };

    comparar();

};

//Compara las elecciones y da el ganador, llama a la funcion imagenes//

function comparar(){

    if(opcionJugador == opcionPc){
        ganador.innerHTML = "Empate";

    }else if(opcionJugador == "Piedra" && opcionPc == "Tijeras"){
        ganador.innerHTML = "Ganaste";

    }else if(opcionJugador == "Papel" && opcionPc == "Piedra"){
        ganador.innerHTML = "Ganaste";

    }else if(opcionJugador == "Tijeras" && opcionPc == "Papel"){
        ganador.innerHTML = "Ganaste";

    }else{
        ganador.innerHTML = "Perdiste";
    };

    addImagenes();

}

//Recorre el arreglo de las imagenes y coloca las elecciones//

function addImagenes(){

    for(let i=0;i<imagenes.length;i++){
        if(opcionJugador == imagenes[i].name){
            imgJugador = imagenes[i].url;
            var inserta = `<img class="versus" src=${imgJugador}>`;
            eleccionJugador.innerHTML = inserta;
            versus.innerHTML = "Vs";
        };
        
        if(opcionPc == imagenes[i].name){
            imgPc = imagenes[i].url;
            var inserta = `<img class="versus" src=${imgPc}>`;
            eleccionPC.innerHTML = inserta;
            versus.innerHTML = "Vs";
        };
        
    };
   
};


window.addEventListener('load', iniciar);

