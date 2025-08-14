(() => {

    //Le digo que si trae ambos datos los imprima, sino que imprima solo el primer nombre
    const fullName = (firstName: string, lastName?: string): string => {
        if (firstName && lastName) {
            return (`${firstName}, ${lastName}`)
        } else {
            return (`${firstName}`)
        }
    }

    const name = fullName('Adriel')
    const name2 = fullName('Adriel', 'Isai')


    console.log({ name })

    console.log({ name2 })

})();