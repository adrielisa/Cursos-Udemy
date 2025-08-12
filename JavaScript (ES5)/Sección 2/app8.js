//Métodos y el objeto this
var nombre = "Isai Rodriguez"

var persona = {

    nombre: "Maria",
    apellido: "Dubon",
    imprimirNombre: function () {
        console.log(this.nombre + " " + this.apellido);
    },
    direccion: {
        pais: "Costa Rica",
        obtenerPais: function () {
            //Se usa para apuntar a este objeto, para que podamos 
            //usar el valor de país que pertenece a el objeto
            
            var self = this;

            var nuevaDireccion = function () {
                console.log(self);
                console.log("La dirección es en: " + self.pais); //Usamos el self declarado anteriormente para acceder al objeto y obtener país
            }
            nuevaDireccion();
        }
    }

};

persona.nombre = "Andres";

persona.imprimirNombre();