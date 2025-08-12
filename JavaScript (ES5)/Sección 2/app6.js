function crearPersona (nombre, apellido){
    return {
        nombre: nombre,
        apellido: apellido
    }
}

var persona = crearPersona("Isai","Paz");

function crearFuncion( nombre ){

    return function(){
        console.log("Me ha creado " + nombre + " Muajajaja!!")

        return function(){
            console.log("Segunda función")
        }
    }
}

var nuevafuncion = crearFuncion( persona.nombre );
nuevafuncion();

