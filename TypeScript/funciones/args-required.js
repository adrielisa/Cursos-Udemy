"use strict";
(function () {
    //Podemos hacer que se reciban 2 tipos de datos distintos
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName);
    };
    var name = fullName('Adriel', 'Chan');
    console.log({ name: name });
})();
