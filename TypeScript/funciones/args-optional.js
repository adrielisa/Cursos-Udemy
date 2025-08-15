"use strict";
(function () {
    //Le digo que si trae ambos datos los imprima, sino que imprima solo el primer nombre
    var fullName = function (firstName, lastName) {
        if (firstName && lastName) {
            return ("".concat(firstName, ", ").concat(lastName));
        }
        else {
            return ("".concat(firstName));
        }
    };
    var name = fullName('Adriel');
    var name2 = fullName('Adriel', 'Isai');
    console.log({ name: name });
    console.log({ name2: name2 });
})();
