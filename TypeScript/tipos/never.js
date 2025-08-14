"use strict";
(() => {
    //No tiene un punto alcanzable , por eso se usa never
    const error = (message) => {
        throw new Error(message);
    };
    error('Auxilio');
})();
