(()=>{

    //Podemos hacer que se reciban 2 tipos de datos distintos
    const fullName = (firstName: string, lastName: (string|boolean )): string =>{
        return `${firstName} ${lastName}`;
    }

    const name = fullName ('Adriel', 'Chan')
    console.log({name})

})();