function crearFunciones() {

    let arr = [];
    let numero = 1;

    arr.push(

        (function (numero) {
            return function () {
                console.log(numero);
            }

        })(numero)
    );

    numero = 2;

    arr.push(
        function () {
            console.log(numero);
        }
    );

    numero = 3;

    arr.push(function () {
        console.log(numero);
    })

    return arr;
}

let funciones = crearFunciones();

funciones[0]();
funciones[1]();
funciones[2]();

function crearFunciones2(){
    let arr = [];
    let numero = 1;

    for (let numero = 1; numero <= 5; numero++){

        arr.push(

            (function(numero){

                return function(){
                    console.log(numero);
                }
            })(numero)
        )
    }
    return arr;
}

let funciones2 = crearFunciones2();
funciones2[0]();
funciones2[1]();
funciones2[2]();
funciones2[3]();
funciones2[4]();

