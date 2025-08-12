function obtenerAleatorio(){
    return Math.random();
}

console.log(obtenerAleatorio() + 10 );

function obtenerNombre(){
    return "Juan";
}

console.log(obtenerNombre() + " Padilla");

function esMayor05(){
    if (obtenerAleatorio() > 0.5) {
        return true;
    } else {
        return false;
    }
}

console.log("Es mayor a 0.5: " + esMayor05());

if (esMayor05()) {
    console.log("La función esMayor05() devolvió true");
} else {
    console.log("La función esMayor05() devolvió false");
}

