"use strict";
(() => {
    class Avenger {
        name; //Si lo pongo privado no tengo acceso
        team;
        realName;
        static avgAge = 35; //Se pueden consumir accediendo a la clase
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    const antman = new Avenger('Antman', 'Capitan');
    console.log(antman);
})();
