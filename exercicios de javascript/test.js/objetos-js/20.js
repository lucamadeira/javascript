class mascota {
    static cola = `large`;
    pelaje = `lacio`;
    static contador = 0;
    constructor( nombre,edad){
         this.nombre = nombre;
        this.edad = edad;
        this._numero = ++mascota.contador;
    }

    get numeroCreacion(){
        return this._numero;
    }
    static saluda(){
        return`move la cola`}
        
    

}
let pet1 = new mascota( `jonny`, 5);
let pet2 = new mascota( `max`, 6)
let pet3 = new mascota( `bella`, 4)

console.log(mascota.cola);
console.log(pet1.pelaje);
 
console.log(pet1)
console.log(pet2)
console.log(pet3)

console.log(mascota.saluda());
