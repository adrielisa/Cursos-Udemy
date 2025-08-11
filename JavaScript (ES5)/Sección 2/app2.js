//Al imprimirse tendrán el mismo valor/nombre

var a = 10;
var b = a;

console.log("a: ", a);
console.log("b: ", b);

a = 20;

var c = {
    nombre: "Juana"
}

var d = c;

console.log("c: ", c);
console.log("d: ", d);

c.nombre = "Maria";

console.log("c: ", c);
console.log("d: ", d);

d.nombre = "Pedro";

console.log("c: ", c);
console.log("d: ", d);
