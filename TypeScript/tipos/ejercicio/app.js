"use strict";
(function () {
    // Tipos
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    // Tuplas
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    // Arreglos
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    var Enumeraciones;
    (function (Enumeraciones) {
        Enumeraciones[Enumeraciones["fuerzaFlash"] = 5] = "fuerzaFlash";
        Enumeraciones[Enumeraciones["fuerzaSuperman"] = 100] = "fuerzaSuperman";
        Enumeraciones[Enumeraciones["fuerzaBatman"] = 1] = "fuerzaBatman";
        Enumeraciones[Enumeraciones["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
    })(Enumeraciones || (Enumeraciones = {}));
    var fuerzaFlash = Enumeraciones.fuerzaFlash;
    var fuerzaSuperman = Enumeraciones.fuerzaSuperman;
    var fuerzaBatman = Enumeraciones.fuerzaBatman;
    var fuerzaAcuaman = Enumeraciones.fuerzaAcuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
