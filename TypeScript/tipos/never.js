"use strict";
(function () {
    //No tiene un punto alcanzable , por eso se usa never
    var error = function (message) {
        throw new Error(message);
    };
    error('Auxilio');
})();
