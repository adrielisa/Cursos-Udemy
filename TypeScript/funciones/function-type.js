"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado!`;
    //Le decimos que myFunction solo aceptará funciones
    let myFunction;
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction('Brissa'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
