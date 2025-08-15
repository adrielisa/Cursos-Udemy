"use strict";
(function () {
    var _a;
    var flash = {
        name: 'Barry Alen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo']
    };
    var superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super velocidad'],
        getName: function () {
            return this.name;
        }
    };
    console.log((_a = flash.getName) === null || _a === void 0 ? void 0 : _a.call(flash));
})();
