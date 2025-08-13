function determinaDato( a ){
    if (a === undefined){
        console.log("A es undefined...no sé que hacer unu")
    }

    if (typeof a === "number"){
        console.log("A es un número, y puedo hacer operación con números ^^ ")
    }

    if (typeof a === "string" ){
        console.log("A es un texto, puedo hacer operaciones contextos")
    }

    if (typeof a === "object"){
        console.log("A es un objeto... pero puede ser cualquier cosa...")
        console.log(a)
        if (a instanceof Number){
            console.log("A es un objeto númerico...")
        }
    }
}

//Al declararse b aquí no es un número, sino un objeto de tipo número
let b = new Number(3)

console.log(b)
determinaDato(b) //Number {3}