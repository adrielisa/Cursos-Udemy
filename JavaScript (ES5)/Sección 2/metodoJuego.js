function Anime(nombre) {
    this.nombre = nombre;
    this.calificacion = 0;

    this.reseñar = function (puntaje) {
        this.calificacion += puntaje;
        this.estado();
    }
    this.estado = function () {
        console.info(this.calificacion);
    }
}

var FLCL = new Anime("FLCL");
var EVA = new Anime("Evangelion");

console.log(FLCL.reseñar);