console.log("Bienvenido al juego 'Adivina el número'. 🥰");

let numeroMaquina = Math.floor(Math.random() * (10 - 1)) + 1;
console.log(numeroMaquina);

let vidas = 3;

let numberUsser = parseInt(prompt("¡Adivine el número del 1 al 10!"))


while(numeroMaquina !== numberUsser && vidas>1){

    let mensaje =
     (numeroMaquina>numberUsser) 
         ? 'El número de la máquina es mayor' 
         : 'El número de la máquina es menor';

    console.log("¡Te equivocaste!" + mensaje);
    // Otro intento

    numberUsser = parseInt(prompt("¡Número del 1 al 10!"))
    vidas --
}

if (numeroMaquina === numberUsser){
    console.log("¡Ganaste!🥳");
} else{
    console.log("¡Perdiste!😲");
}