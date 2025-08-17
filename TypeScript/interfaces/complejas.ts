(()=>{
    interface Client{
        name: string;
        age?: number;
        address: Adress
        
    }

    interface Adress {
        id: number;
        zip: string
        city: string
    }

    const client: Client = {
        name: 'Adriel',
        age: 20,
        address: {
            id: 125,
            zip: '77511',
            city: 'Cancun'
        }
    }
})();
