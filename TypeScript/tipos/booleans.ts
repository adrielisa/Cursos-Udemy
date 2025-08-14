(()=>{
    let isSuperman = true;
    isSuperman = true && false;

    let isBatman: boolean = false;
    
    isSuperman = ( isBatman ) ? true: false;

    console.log({isSuperman})
})() 