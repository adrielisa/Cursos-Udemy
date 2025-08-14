(()=>{

    //No tiene un punto alcanzable , por eso se usa never
    const error = (message: string):never =>{
        throw new Error(message)
    }

    error('Auxilio')
})();