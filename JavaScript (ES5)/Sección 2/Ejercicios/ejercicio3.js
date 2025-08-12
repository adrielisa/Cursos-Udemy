// Ejercicio 3: Objetos y métodos
// Crea una función constructora llamada 'Persona' que reciba nombre y edad.
// Agrega un método 'presentarse' que muestre en consola: 'Soy <nombre> y tengo <edad> años.'
// Crea dos objetos Persona y haz que se presenten.

// Escribe tu código aquí:

function Persona (nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
} 

Persona.prototype.presentarse = function () {
        return(console.log ('Soy ' + this.nombre + ' y tengo ' + this.edad))
}

const Adriel = new Persona ('Adriel', 20)
const Brissa = new Persona ('Brissa', 16)
const Jimena = new Persona ('Jimena', 19)

Adriel.presentarse()
Brissa.presentarse()