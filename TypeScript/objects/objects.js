"use strict";
(() => {
    var _a;
    //Al crear objetos podemos especificar que tipo de datos tendrá
    //Para el último dato decimos que es una función opcional de tipo string
    let flash = {
        name: 'Barry Alen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo']
    };
    flash = {
        name: 'Clark Kent',
        //age: 60,
        powers: ['Súper fuerza'],
        getName() {
            return this.name;
        }
    };
    console.log((_a = flash.getName) === null || _a === void 0 ? void 0 : _a.call(flash));
})();
