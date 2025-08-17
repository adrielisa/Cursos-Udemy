(() => {

    class Avenger {
        //private name: string; Las propiedades private solo son accesibles dentro de la misma clase
        //Las propiedades public son accesibles desde cualquier lugar, es la default
        //Se pueden consumir accediendo a la clase, pertecencen a esta, no a las instancias
        //Las propiedades protected son accesibles desde la clase y sus subclases (protected)
        static avgAge: number = 35;

            //Se ejecuta cuando se crea una nueva instancia
        constructor(
            private name: string, 
            private team: string,
            public realName?: string
        ) 
            { }
    }

    const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
    console.log(antman)

})();

(() => {

    class Avenger {
        static avgAge: number = 35;
        static getAvgAge(){
            return this.name //Accede al NOMBRE de la clase
        }
        
        constructor(
            private name: string, 
            private team: string,
            public realName?: string
        ){}

        bio(){
            return `${this.name } (${this.team})`
        }
    }

    const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
    console.log(antman)
    console.log(antman.bio())
    console.log(Avenger.getAvgAge)

    
})();