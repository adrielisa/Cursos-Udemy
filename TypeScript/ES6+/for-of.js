"use strict";
(() => {
    const goku = {
        name: 'Son Goku',
        power: 'K'
    };
    const gon = {
        name: 'Gon Freeks',
        power: ''
    };
    const naruto = {
        name: 'Naruto Uzumaku ',
        power: 'Chakra'
    };
    const ShonenCharacters = [goku, naruto, gon];
    for (const ShonenCharacter of ShonenCharacters) {
        console.log(ShonenCharacter);
    }
});
