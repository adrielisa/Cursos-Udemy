"use strict";
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola ".concat(name); };
    var saveTheWorld = function () { return "El mundo est\u00E1 salvado!"; };
    //Le decimos que myFunction solo aceptará funciones
    var myFunction;
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction('Brissa'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
