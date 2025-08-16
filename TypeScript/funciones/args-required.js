"use strict";
(() => {
    //Podemos hacer que se reciban 2 tipos de datos distintos
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Adriel', 'Chan');
    console.log({ name });
})();
