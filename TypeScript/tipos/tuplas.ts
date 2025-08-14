//JavaScript no tiene tuplas pero TypeScript si las tiene

(()=>{
    //Defino que tipos de datos quiero
    const hero: [string, number, boolean] = ['Dr Strange', 100, true]

    hero[0] = 'Ironman';
    hero[1] = 60;
    hero[2] = false;

})