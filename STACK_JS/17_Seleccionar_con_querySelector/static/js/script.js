console.log("Conexión con JS");

//Selección de título con querySelector
let title = document.querySelector("#title");
console.log(title); // <h1 id="title">¡Hola, mundo!</h1>
console.log(`El contenido del título es: ${title.textContent}`)

/*
//Seleccionar un párrafo con la etiqueta 
let parrafo = document.querySelector("p");
console.log(parrafo);
*/

// Seleccionar dentro de nav
let logoImg = document.querySelector(".nav img");
console.log(logoImg); // <img src="logo.png" alt="logo">


let parrafo = document.querySelector(".texto");
console.log(parrafo.textContent); // "Este es el primer párrafo."

let boton = document.querySelector("#boton-inexistente");
console.log(boton); // null
if (boton !== null) {
    boton.textContent = "Nuevo Texto";
} else {
    console.log("El botón no existe.");
}

// Tarea:
/* Crear un botón y aplicar condición al igual que ejemplo...
- Debe cambiar su texto al momento de hacerle click 
- Debeb activarse un hover js cambiando el color de fondo
*/

let botonCondicion = document.querySelector("#botonClic");
botonCondicion.addEventListener("click", function () {
    if (this.innerText === "----") {
        this.innerText = "Texto";
    }
});
