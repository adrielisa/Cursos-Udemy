// Ejercicio 4: Prototipos y métodos
// Agrega al prototipo de Persona un método 'cumplirAnios' que aumente la edad en 1 y muestre la nueva edad.
// Crea un objeto Persona y haz que cumpla años dos veces.

// Escribe tu código aquí:


function Persona (edad, nombre){
    this.edad = edad
    this.nombre = nombre
}

//Duda para ti chatgpt, por qué sino pongo el this falla? No me queda claro,
//Ya lo corregí pero me quedo esa duda
Persona.prototype.cumplirAnios = function(){
    this.nombre
    this.edad++ //Aquí antes tenía this.edad = this.edad++ y siempre me daba 11 el otuput sin importar cuantas veces llamara la función, por qué?
    (console.log( this.nombre +' ha cumplido ' + this.edad))
}

let Mateo = new Persona(10, 'Mateo')
Mateo.cumplirAnios()
Mateo.cumplirAnios()

let Itzel = new Persona(20, 'Brissa')
Itzel.cumplirAnios()
Itzel.cumplirAnios()