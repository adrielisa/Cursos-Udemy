// Ejercicio 2: Funciones anónimas y alcance
// Crea una función anónima autoejecutable que defina una variable 'contador' con valor 0.
// Dentro de la función, crea otra función llamada 'incrementar' que aumente el contador en 1 y lo muestre en consola.
// Llama a 'incrementar' dos veces dentro de la función anónima.

// Escribe tu código aquí:


(function(){
    let contador = 0
    function incrementar(){
        contador ++;
        console.log(contador)
    }

    incrementar();
    incrementar();
    incrementar();
})();


