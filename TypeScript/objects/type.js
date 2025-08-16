"use strict";
(() => {
    let flash = {
        name: 'Barry Alen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo']
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super velocidad'],
        getName() {
            return this.name;
        }
    };
    console.log(flash.getName?.());
})();
