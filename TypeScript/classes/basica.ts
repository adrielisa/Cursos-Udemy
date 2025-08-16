(() => {

    class Avenger {
        private name: string; //Las propiedades private solo son accesibles dentro de la misma clase
        public team: string;  //Las propiedades public son accesibles desde cualquier lugar, es la default
        public realName?: string;
        static avgAge: number = 35; //Se pueden consumir accediendo a la clase, pertecencen a esta, no a las instancias
        //Las propiedades protected son accesibles desde la clase y sus subclases (protected)

        //Se ejecuta cuando se crea una nueva instancia
        constructor(name: string, team: string, realName?: string) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }

    const antman: Avenger = new Avenger('Antman', 'Capitan');
    console.log(antman)

})();