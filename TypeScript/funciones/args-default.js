"use strict";
(() => {
    //Podemos ponerle valores por defecto
    const fullName = (firstName, lastName, upper = true) => {
        return `${firstName} ${lastName || '-----'}`;
    };
    const name = fullName('Tony');
    console.log(fullName);
})();
