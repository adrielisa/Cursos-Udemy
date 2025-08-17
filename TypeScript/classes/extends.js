"use strict";
(() => {
    class Avenger {
        name;
        realName;
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor Avenger llamado!!');
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        isMutant;
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log('Constructor Xmen llamado');
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error('El nombre debe ser mayor de 3 letras');
            }
            this.name = name;
        }
        getFullnameDesdeXmen() {
            console.log(super.getFullName());
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    console.log(wolverine);
    wolverine.getFullnameDesdeXmen();
    //Aquí se usa un getter
    console.log('Se ejecuta un getter: ' + wolverine.fullName);
    wolverine.fullName = 'Isai';
    //Aquí se usa el setter, cambiando el nombre
    console.log('Se ejecuta un setter: ' + wolverine.fullName);
})();
