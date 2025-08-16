(() => {

    type Avenger = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.123456
    }

    //Aquí destructuramos el objeto y sacamos los valores poder y vision
    const { poder, vision } = avengers

    //Imprime en consola
    console.log(poder.toFixed(2), vision.toLocaleUpperCase())

    //Esta función recibe los avengers, imprime ironma y el resto
    const printAvenger = ({ironman, ...resto }:Avenger) => {
        console.log(avengers, resto);
    }

    printAvenger(avengers)

})();