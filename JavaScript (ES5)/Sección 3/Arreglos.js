let arr = [5,4,3,2,1];
console.log(arr);

console.log( arr[2]) //Tercera posición del arreglo

arr.reverse()
console.log (arr)

//Permite mapear los arreglos y decidir que hacer con ellos, en este caso multiplicarlos por si mismo
arr = arr.map (function(elem){
    elem *= elem;
    return elem;
});
console.log( arr )

//Revertimos a su raíz cuadrada
arr = arr.map( Math.sqrt );
console.log(arr);

//Separa los valores del arreglo, ejemplo: 1|2|3|4|5
arr = arr.join("|");
console.log (arr);

//Separa un string y lo vuelve un arreglo
arr = arr.split("|");
console.log( arr )

//Añade un valor a la última posición del arreglo
arr.push("6");
console.log( arr );

//Añade un valor a la primera posición del arreglo
arr.unshift("0");
console.log( arr );

//Separa el arreglo por comas, es más eficiente que el split
console.log( arr.toString() );

//Elimina el último valor del arerglo
let elimine = arr.pop();
console.log (arr, elimine);

//Elimina la segunda posición del arreglo 
arr.splice(1, 1);
console.log(arr)


//Elimina la primera posición del arreglo hasta la cuarta
arr.splice(0, 3);
console.log(arr)

//Corta desde el primer número que le indicas hasta el último indicado
arr = arr.slice(0,2);



