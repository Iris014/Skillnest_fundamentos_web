let desafio = document.getElementById("intercambiarTexto");
desafio.addEventListener("click", function () {
    if (this.innerText === "Haz clic en mí") {
        this.innerText = "¡Texto cambiado!";
    } else {
        this.innerText = "Haz clic en mí";
    }
});

const tarjeta = document.getElementById("tarjeta-arte");
const imagen = document.getElementById("imagen-arte");
const texto = document.getElementById("texto-arte");

tarjeta.addEventListener("click", function () {
    console.log("El ratón entró a la tarjeta");
    imagen.src = "static/images/la-noche-estrellada.png";
    texto.innerText = "La noche estrellada, Vincent van Gogh (1889)";
});
tarjeta.addEventListener("mouseout", function () {
    console.log("El ratón entró a la tarjeta");
    imagen.src = "static/images/la-noche-estrellada.png";
    texto.innerText = "La noche estrellada, Vincent van Gogh (1889)";
});
