"use strict";
(() => {
    let isSuperman = true;
    isSuperman = true && false;
    let isBatman = false;
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman });
})();
