let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

const alturaSuelo = 40;
const alturaPersonaje = 60;
const anchoPersonaje = 40;

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
    ctx.fillRect(canvas.width/2,canvas.height-(alturaSuelo+alturaPersonaje),anchoPersonaje,alturaPersonaje)
}