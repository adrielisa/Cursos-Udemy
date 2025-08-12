function Persona(){{
    this.nombre = "Juan";
    this.apellido = "Perez";
    this.edad = 30;

    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
}}

//Da undefined
var juan = Persona();
console.log(juan);

//Muestra un objeto vacío
var juan = new Persona();
console.log(juan);


console.log(juan.nombreCompleto());


function Persona2(nombre, apellido, edad){{
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

    this.imprimirPerson = function(){
        return this.nombre + " " + this.apellido + "(" + this.edad + ")";
    }
}}

var juan2 = new Persona2("Adriel", "Rodriguez", 20);
console.log(juan2.imprimirPerson());

