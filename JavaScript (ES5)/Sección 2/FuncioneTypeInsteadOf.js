function identifical (param){
    console.log (typeof param);
    console.log (param instanceof Persona);
}

function Persona(){
    this.nombre = "Adriel";
    this.edad = 30;
}

let  adriel = new Persona();

identifical ( adriel );