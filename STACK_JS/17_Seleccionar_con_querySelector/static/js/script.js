console.log("Conexión con JS");

//Selección de título con querySelector
let title = document.querySelector("#title");
console.log(title); // <h1 id="title">¡Hola, mundo!</h1>
console.log(`El contenido del título es: ${title.textContent}`)

//Seleccionar un párrafo con la etiqueta 
let parrafo = document.querySelector("p");
console.log(parrafo);
