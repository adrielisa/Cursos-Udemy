"use strict";
(() => {
    const goku = {
        name: 'Son Goku',
        power: 'Ki'
    };
    const gon = {
        name: 'Gon Freeks',
        power: 'Nen, Ren, Hatsu'
    };
    const naruto = {
        name: 'Naruto Uzumaki',
        power: 'Chakra'
    };
    const ShonenCharacters = [goku, naruto, gon];
    for (const ShonenCharacter of ShonenCharacters) {
        console.log('El protagonista ' + ShonenCharacter.name + ' tiene el poder del ' + ShonenCharacter.power);
    }
})();
