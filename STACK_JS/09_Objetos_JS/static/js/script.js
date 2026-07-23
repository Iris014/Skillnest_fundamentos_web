console.log("Conexion con JS..")

let hamburguesaEspecial = {
    pan:"Pan brioche",
    carne:"Pollo crujiente",
    queso:"Suizo",
    extras:[
        "Lechuga",
        "Pepinos",
        "Miel"
    ],
    mostrarIngredientes:function(){
        console.log("Pan:",this.pan);
        console.log("Carne:",this.carne);
        console.log("Queso:",this.queso);
        console.log(
            "Extras:",
            this.extras.join(", ")
        );
    }
};

// Acceder al pan
console.log(hamburguesaEspecial.pan)
hamburguesaEspecial.mostrarIngredientes();

// Objeto con método automóvil
let auto = {
    marca:"Toyota",
    modelo:"Corolla",
    año:2023,
    encender:function(){
        console.log(
            "Encendiendo",
            this.marca,
            this.modelo
        );
    }
};
auto.encender()
let auto2 = {

}


// Objeto con método casa
let casa = {
    direccion:"Av. Siempre Viva 742",
    habitaciones:4,
    baños:2,
    mostrarInformacion:function(){
        console.log(
            this.direccion
        );
    }
};
casa.mostrarInformacion()

let casa2 = {
    
}