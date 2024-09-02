class Coche {
    constructor(marca, modelo, año){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    describir(){
        console.log(`Coche: ${this.marca}, ${this.modelo}, ${this.año}`);
    }
}

const coche1 = new Coche("Toyota","Corolla",2021);
const coche2 = new Coche("Honda","Civic",2019);
const coche3 = new Coche("Ford","Mustang",2022);

coche1.describir();
coche2.describir();
coche3.describir();