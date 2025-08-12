// Ejercicio 4: Prototipos y métodos
// Agrega al prototipo de Persona un método 'cumplirAnios' que aumente la edad en 1 y muestre la nueva edad.
// Crea un objeto Persona y haz que cumpla años dos veces.

// Escribe tu código aquí:


function Persona (edad){
    this.edad = edad
}

//Duda parati chatgpt, por qué sino pongo el this falla? No me queda claro,
//Ya lo corregí pero me quedo esa duda
Persona.prototype.cumplirAnios = function(){
    this.edad++ //Aquí antes tenía this.edad = this.edad++ y siempre me daba 11 el otuput sin importar cuantas veces llamara la función, por qué?
    (console.log(this.edad))
}

let Mateo = new Persona(10)
Mateo.cumplirAnios()
Mateo.cumplirAnios()