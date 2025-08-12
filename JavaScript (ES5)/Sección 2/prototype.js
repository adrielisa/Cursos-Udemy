function Persona() {
    this.nombre     = "Adriel";
    this.apellido   = "Rodriguez";
    this.edad       = 30;
    this.pais       = "Costa Rica";

    /*  Se elimina porque pasó a prototype
    this.imprimirInfo = function(){
        console.log( this.nombre + " " + this.apellido + "("+ this.edad + ")");
    }*/
}

Persona.prototype.imprimirInfo = function() {
    console.log(this.nombre + " " + this.apellido + " (" + this.edad + ")");
}

var adriel = new Persona();

/*Con esto puedo usarlo para saber si un número es positivo, por ejemplo
Declaramos: a = 1
Usamos el prototype: a.esPositivo()
*/

Number.prototype.esPositivo = function() {
    if (this > 0){
        return true;
    } else {
        return false;
    }
}

