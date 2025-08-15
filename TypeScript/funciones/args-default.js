"use strict";
(function () {
    //Podemos ponerle valores por defecto
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = true; }
        return "".concat(firstName, " ").concat(lastName || '-----');
    };
    var name = fullName('Tony');
    console.log(fullName);
})();
