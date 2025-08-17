(()=>{

    interface Hero {
        name: string,
        age?: number,
        powers: string[]
        getName?: () => string;
    }

    let flash: Hero = {
        name: 'Barry Alen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo']
    }

    let superman: Hero = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super velocidad'],
        getName(){
            return this.name
        }
    }

    console.log(flash.getName?.())
})();