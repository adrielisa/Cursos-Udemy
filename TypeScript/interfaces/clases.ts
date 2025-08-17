(()=>{

    interface Friends {
        name: string;
        realName: string
        power(id: number):string;
    }

    interface Age {
        age: number
    }

    class UT implements Friends, Age {
        public age: number;
        public name: string;
        public realName: string;
        power(id: number): string {
            return this.name + ' ' + this.realName
        }
    }

})();