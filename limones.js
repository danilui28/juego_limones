let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

const alturaSuelo = 40;
const alturaPersonaje = 60;
const anchoPersonaje = 40;
let personajeX = canvas.width/2;

function iniciar(){
    dibujarSuelo();
    dibujarPersonaje();
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

function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}

function actualizarPantalla(){
    limpiarCanva()
    dibujarSuelo()
    dibujarPersonaje()
}