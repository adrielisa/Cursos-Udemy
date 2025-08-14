"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let Enumeraciones;
    (function (Enumeraciones) {
        Enumeraciones[Enumeraciones["fuerzaFlash"] = 5] = "fuerzaFlash";
        Enumeraciones[Enumeraciones["fuerzaSuperman"] = 100] = "fuerzaSuperman";
        Enumeraciones[Enumeraciones["fuerzaBatman"] = 1] = "fuerzaBatman";
        Enumeraciones[Enumeraciones["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
    })(Enumeraciones || (Enumeraciones = {}));
    const fuerzaFlash = Enumeraciones.fuerzaFlash;
    const fuerzaSuperman = Enumeraciones.fuerzaSuperman;
    const fuerzaBatman = Enumeraciones.fuerzaBatman;
    const fuerzaAcuaman = Enumeraciones.fuerzaAcuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
