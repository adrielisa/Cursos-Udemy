(() => {


    class Apocalipsis {

        static instance: Apocalipsis;

        constructor(public name: string) {

        }
        static callApocalipsis(){
            if (!Apocalipsis.instance){
                Apocalipsis.instance = new Apocalipsis('Soy apocalipsis');
            }
            return Apocalipsis.instance
        }

    }

    const apocalipsis1 = Apocalipsis.callApocalipsis()

})();
