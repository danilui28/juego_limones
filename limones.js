let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

const alturaSuelo = 20;
const alturaPersonaje = 60;
const anchoPersonaje = 40;
let personajeX = canvas.width/2;
let personajeY = canvas.height-(alturaSuelo+alturaPersonaje);

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
    ctx.fillRect(0,canvas.height-20,canvas.width,20)
}

function dibujarPersonaje(){
    ctx.fillStyle="yellow";
    ctx.fillRect(personajeX,personajeY,anchoPersonaje,alturaPersonaje)
}

function moverIzquierda(){
    personajeX=personajeX-10;
    actualizarPantalla()
    detectarColision()
}

function moverDerecha(){
    personajeX=personajeX+10;
    actualizarPantalla()
    detectarColision()
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

function detectarColision(){
    if(limonX + anchoLimon > personajeX && 
    limonX < personajeX + anchoPersonaje &&
    limonY + alturaLimon > personajeY &&
    limonY < personajeY + alturaPersonaje){
        alert("ATRAPADO!!")
    }
}