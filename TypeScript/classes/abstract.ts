// Una clase define la forma y el comportamiento de objetos.
// Una clase abstracta define una base (plantilla) para crear otras clases (subclases).
(()=>{

    abstract class Artist{
        constructor(
            public name: String,
            public looksLike: String
        ){}
    }

    //Se crea una subclase que extiende de artist con su propio método
    class GeidaiStudent extends Artist{
        inspiration(){
            'I wanna be an artist'
        }
    }

    class HighSchoolStudent extends Artist{
        painting(){
            return 'I like painting'
        }
    }

    const Yatora = new GeidaiStudent('Yatora', 'Handosme tall guy');
    const Yuka = new HighSchoolStudent('Yuka', 'Pretty girl?Boy')
    console.log(Yatora)
    console.log(Yuka)

    const printName = (character: Artist) =>{
        console.log(character.name)
    }

    printName(Yuka)
})();