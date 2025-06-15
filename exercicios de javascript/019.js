class Player{
    constructor(nombre, sombrero, velocidade, altura) {
        this.nombre = nombre;
        this.sombrero = sombrero;
        this. velocidadem = velocidade;
        this. altura = altura;
    }
    get nombre (){             // usado para tomar o objeto de nos constructores
        return this._nombre
    }
    set nombre(nuevoNombre){ // usado para cambiar objetos dentro del constructores
        this._nombre = nuevoNombre;
    }
    saltar(){ 
        return ` max ${this.altura}`
     }
    corre(){
        return `mi ${this.velocidadem} que ${this.nombre} `
    }
    saludar(){
        return `Hola soy ${this.nombre} y mi sombrero es ${this.sombrero}`
    }
}

let Player1 = new Player(`MARIO`, `ROJO`, `60km`, `10m`)
let Player2 = new Player(`LUIGI`, `VERDE`, `80km`, `20`)

 console.log(Player1)
 console.log(Player2)
// get
 console.log(Player1.nombre);
 // set
  Player1.nombre = `alberto`;
  //get
  console.log(Player1.nombre)

  // es possivel hacer otras clases con los mismos atributos del primero ejmpl

  class pet extends Player {
    constructor(nombre, sombrero, velocidade, altura, mascota ){
        super(nombre, sombrero, velocidade, altura)
        this._mascota = mascota
    }
    get sombrero (){
        return this._sombrero
     }
    set sombrero(colorPiel ){
      this._sombrero = colorPiel
    }
    
  }
  let Player3 = new pet ( `Yoshi`, `invisivile`, `5km,`,`1m`, `dinosaurs`)
  console.log(Player3)

  

  // get
   console.log(Player3.sombrero)
   //set
  Player3.sombrero = `marone`;
  //get
  console.log(Player3.sombrero)

  
  
 

