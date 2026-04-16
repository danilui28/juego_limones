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
let puntaje = 0;
let vidas = 3;
let velocidadCaida = 100;

function iniciar(){
    setInterval(bajarLimon,velocidadCaida)
    dibujarSuelo();
    dibujarPersonaje();
    aparecerLimon();
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
    detectarColision()
    detectarPiso()
}

function detectarColision(){
    if(limonX + anchoLimon > personajeX && 
    limonX < personajeX + anchoPersonaje &&
    limonY + alturaLimon > personajeY &&
    limonY < personajeY + alturaPersonaje){
    aparecerLimon();
    puntaje = puntaje + 1
    mostrarEnSpan("txtPuntaje",puntaje)
    }
}

function detectarPiso(){
    if(limonY + alturaLimon == canvas.height-alturaLimon){
        aparecerLimon();
        vidas=vidas-1;
        mostrarEnSpan("txtVidas",vidas)
    }

    if(vidas == 0){
        alert("GAME OVER")
    }
}

function aparecerLimon(){
    limonX = generarAleatorio(0,canvas.width-anchoLimon);
    limonY = 0;
    actualizarPantalla();
}