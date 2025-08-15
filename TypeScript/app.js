"use strict";
var msg = 'Hola mundo';
var hero = {
    name: 'SpiderMan',
    age: 45
};
hero.age = 50;
console.log(hero.age + 1);
//Debemos declarar siempre que tipo de dato es
var a = 10;
var b = 10;
//Sino declaramos será de tipo any
var c;
c = 1;
c = 'No tengo tipo de dato asignado ^^';
b = 3.1416;
//Le decimos que el parámetro que recibe la función es un string
//Debemos tener el parámetro noImplicitAny: true en tsconfig
function sayHello(msg) {
    console.log(msg);
}
//Al usar la función solo podemos usar strings
console.log(sayHello('Holi'));
(function () {
    var d = 10;
    console.log(a);
})();
