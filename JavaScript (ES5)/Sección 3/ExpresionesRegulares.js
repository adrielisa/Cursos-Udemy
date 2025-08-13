//Declaramos que es exactamente lo que queremos encontrar
let reg1 = RegExp("a m");
let reg2= /hol/;

let texto = "Hola mundo";

//Le decimos que queremos buscar dentro de texto lo que declaramo
let arr = texto.match(reg1);
console.log (arr)

//Busca el primer carácter
var arr2 = texto.match( /^H/)
console.log( arr2 );
