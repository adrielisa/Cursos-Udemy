var arr = [
    true,
    {
        nombre:"Adriel",
        apellido:"Chan"
    },
    true,
    function(){
        console.log("Vivo en un arreglo beibi ;)")
    },
    function (persona) {
        console.log (persona.nombre + " " + persona.apellido);
    },
    ["Fernando", "Carlos","Hernando", "Jazmin"]
];

console.log( arr);
console.log(arr [0]);
console.log( arr[1].nombre + " " + arr[1].apellido );

//Invicamos una función, se usa el 3 porque esa es la posición del
//Arreglo a la que pertenece la función anónima
arr[3]();

arr[4](arr[1]);

console.log(arr[5][3])