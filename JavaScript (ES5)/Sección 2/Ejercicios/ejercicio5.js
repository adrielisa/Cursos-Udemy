// Ejercicio 5: Callbacks y funciones de orden superior
// Escribe una función 'operar' que reciba dos números y una función callback.
// La función debe ejecutar el callback pasando los dos números y mostrar el resultado en consola.
// Prueba 'operar' con una suma, una resta y una multiplicación usando funciones anónimas.

// Escribe tu código aquí:

function operar(num1, num2, callback){
    let resultado = callback (num1, num2);
    console.log(resultado); //Gracias a esto cuando llamemos las funciones abajo se imprimirán en consola
}

operar(2,5, function (a,b){
    return 'La suma es: ' + (a+b);
})

operar(2,5, function (a,b){
    return 'La resta es: ' + (a - b);
})

operar(2,5, function (a,b){
    return 'La multiplicación es: ' + (a*b);
})