let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

const alturaSuelo = 40;
const alturaPersonaje = 60;
const anchoPersonaje = 40;
let personajeX = canvas.width/2;

const alturaLimon = 20;
const anchoLimon = 20;
let limonX = canvas.width/2;
let limonY = 5;

function iniciar(){
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
}

function dibujarSuelo(){
    ctx.fillStyle="blue";
    ctx.fillRect(0,canvas.height-40,canvas.width,40)
}

function dibujarPersonaje(){
    ctx.fillStyle="yellow";
    ctx.fillRect(personajeX,canvas.height-(alturaSuelo+alturaPersonaje),anchoPersonaje,alturaPersonaje)
}

function moverIzquierda(){
    personajeX=personajeX-10;
    actualizarPantalla()
}

function moverDerecha(){
    personajeX=personajeX+10;
    actualizarPantalla()
}

function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}

function actualizarPantalla(){
    limpiarCanva()
    dibujarSuelo()
    dibujarPersonaje()
    dibujarLimon();
}

function dibujarLimon(){
    ctx.fillStyle="green";
    ctx.fillRect(limonX,limonY,anchoLimon,alturaLimon)
}

function bajarLimon(){
    limonY = limonY + 10;
    actualizarPantalla()
}