try {
    let a = 10;
    if (a === 100) {
        console.log("El valor de a: ", a)
    }
    else throw ('No papito, valor incorrecto')
}
catch (e) {
    console.log('Error de catch: ', e)
}
finally {
    console.log("Finalmente")
}

console.log("-------------------------------------------------");

try {

    throw new Error('Error tipo 1')
    console.log("Esta parte nunca se ejecuta")
}

catch (e) {
    console.log(e.message );
}

finally {
    console.log("Finalmente")
}

console.log("-------------------------------------------------");

try {

    let numerox = 3

    if (numerox === 1) throw {
        nombreError:"Error de tipo 1",
        accion:"Salir corriendo y tirarle agua al servidor",
        coderror: 1
    }
    
    else if (numerox === 2) throw{
        nombreError:"Error de tipo 2",
        accion:"Salir corriendo y tirarse por la ventana de la oficina",
        coderror: 2
    }

    else if (numerox === 3) throw{
        nombreError:"Error de tipo 3",
        accion:"Llorar",
        coderror: 3
    }

}catch (e) {
    if (e.coderror === 1) {
        console.log('Error: ' + e.coderror +  '. Te recomendamos '+ e.accion)
        console.log('Servidor mojado, sequelo en el sol')
    }
    else if (e.coderror === 2){
        console.log('Error: ' + e.coderror +  '. Te recomendamos '+ e.accion)
        console.log('Levantarse e ir al hospital')
    }
    else if (e.coderror === 3){
        console.log('Error: ' + e.coderror +  '. Te recomendamos '+ e.accion)
        console.log('Limpiarse las lágrimas')
    }
}

finally {
    console.log("¿Se te solucionó o no se te solucionó el error?")
}

