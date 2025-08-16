(()=>{
    type ShonenCharacter = {
        name: string,
        power: string
    }

    const goku: ShonenCharacter = {
        name: 'Son Goku',
        power: 'K'
    }

    const gon: ShonenCharacter = {
        name: 'Gon Freeks',
        power: ''
    }

        const naruto: ShonenCharacter = {
        name: 'Naruto Uzumaku ',
        power: 'Chakra'
    }

    const ShonenCharacters = [goku, naruto, gon];
    
    for (const ShonenCharacter of ShonenCharacters){
        console.log(ShonenCharacter)
    }
})