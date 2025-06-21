function Persona (nome,cognome,eta,genero,interessi){

            this.nome = nome;
            this.cognome = cognome;
            this.eta = eta;
            this.genero = genero;
            this.interessi = interessi;
            this.bio = function() {
                 console.log(`${this.nome} ${this.cognome} e ${(this.genero == `maschio`?`un ragazzo` : `una ragazza`)}   di ${this.eta}  ha questi ${interessi.join(`,`)}
            `)};

        }
         
       

       const persona1 = new Persona (`luca`,`madeira valentini`,`22`,`maschio`,`programazione`);
       const persona2 = new Persona (`maria`, `rossi`,`24`,`feminile`,`moda`);

    console.log(`ciao sono  ${persona1.nome}`)
      
    //  console.log(persona2)