(()=>{
    //Podemos ponerle valores por defecto
    const fullName = (firstName: string, lastName?: string, upper: boolean = true): string =>{
        return `${firstName} ${lastName || '-----'}`;
    }

    const name = fullName('Tony');

    console.log(fullName)
})();