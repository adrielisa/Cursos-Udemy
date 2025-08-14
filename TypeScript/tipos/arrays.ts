(()=> {

    //Podemos definir el tipo de dato que aceptará nuestro arreglo
    const numbers: (string | number | boolean)[] = [1,2,3,4,5,6,7,8,9,10]
    numbers.push(1)
    numbers.push(true)
    numbers.push('Hello')

    console.log(numbers)

})();