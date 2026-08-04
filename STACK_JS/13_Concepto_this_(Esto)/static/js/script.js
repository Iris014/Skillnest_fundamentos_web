// Seleccionamos el botón por su id
let boton = document.getElementById("cambiarTexto");

// Agregamos un evento 'click' al botón
boton.addEventListener("click", function () {
    // Cambia el texto del botón usando `this`
    this.innerText = "¡Texto cambiado!";
});

// Seleccionamos todas las imágenes con la clase 'imagenEliminar'
let imagenes = document.querySelectorAll(".imagenEliminar");

// Agregamos un evento 'click' a cada imagen
imagenes.forEach(function (imagen) {
    imagen.addEventListener("click", function () {
        // Eliminamos la imagen al hacer clic
        this.remove();
    });
});

let boton1 = document.querySelector(".boton1");
boton1.addEventListener("click", function () {
    if (this.innerText === "1") {
        this.innerText = "2";
    } else {
        this.innerText = "1";
    }
});

let boton2 = document.querySelector(".boton2");
boton2.addEventListener("click", function () {
    if (this.innerText === "2") {
        this.innerText = "3";
    } else {
        this.innerText = "2";
    }
});

let boton3 = document.querySelector(".boton3");
boton3.addEventListener("click", function () {
    if (this.innerText === "3") {
        this.innerText = "4";
    } else {
        this.innerText = "3";
    }
});

let desafio = document.getElementById("intercambiarTexto");
desafio.addEventListener("click", function () {
    if (this.innerText === "Haz clic en mí") {
        this.innerText = "¡Texto cambiado!";
    } else {
        this.innerText = "Haz clic en mí";
    }
});
