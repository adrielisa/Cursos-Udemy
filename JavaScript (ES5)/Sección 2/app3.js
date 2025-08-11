var persona = {
    nombre: "Juana", 
    apellido: "Herrera",
    edad: 25,
    direccion: {
        pais: "Costa Rica",
        ciudad: "San José",
        edificio:{
            nombre: "Edificio principal",
            telefono: "1234-5678"
        }
    }
}

console.log (persona.direccion.pais);
console.log (persona.direccion);

persona.direccion.zipcode = 1010;
console.log (persona.direccion.zipcode);

//Es muy tedioso hacer tan largo esto
console.log (persona.direccion.edificio.telefono);

//Por eso es bueno declarar una variable
var edificio = persona.direccion.edificio;

//Ya declarada la variable podemos llamar a edificio de manera más
//rápida y directa
edificio.nopiso = "9vo piso";