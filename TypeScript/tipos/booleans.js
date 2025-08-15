"use strict";
(function () {
    var isSuperman = true;
    isSuperman = true && false;
    var isBatman = false;
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman: isSuperman });
})();
