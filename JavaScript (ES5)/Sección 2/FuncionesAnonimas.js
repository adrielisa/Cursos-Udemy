/* Esta es una función anonima, al encapsularla ya no aparece en el
objeto global
*/

( function(){    
    let a = 10;

    console.log (a);

    function cambiarA(){
        a = 20;
    }

    cambiarA();

    console.log (a);

})();


// console.log(a); Esto no funcionará porque 'a' está encapsulada en la función anónima

function ejecutarFuncion(fn){

    if( fn() === 1){
        return true;
    } else {
        return false;
    }
}

console.log (
    ejecutarFuncion ( function(){
    console.log("Función anónima ejecutada");
    return 1;
})
)

