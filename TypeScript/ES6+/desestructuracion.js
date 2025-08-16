"use strict";
(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.123456
    };
    //Aquí destructuramos el objeto y sacamos los valores poder y vision
    const { poder, vision } = avengers;
    //Imprime en consola
    console.log(poder.toFixed(2), vision.toLocaleUpperCase());
    //Esta función recibe los avengers, imprime ironma y el resto
    const printAvenger = ({ ironman, ...resto }) => {
        console.log(avengers, resto);
    };
    printAvenger(avengers);
    // array que sólo aceptará strings
    const periodosAzulesArr = ['Yatora', 'Mori', 'Yuka', 'teacher'];
    // Le digo que quiero el primer valor del objeto
    const [Yatora] = periodosAzulesArr;
    console.log({ Yatora });
    //Le digo que quiero el tercer valor del objeto
    const [, , Yuka] = periodosAzulesArr;
    console.log({ Yuka });
})();
