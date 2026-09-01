console.log("Conexión con js");

const tarjeta = document.getElementById("tarjeta-arte");
const imagen = document.getElementById("arte");
const texto = document.getElementById("info-arte");

tarjeta.addEventListener("mouseover", function () {
    imagen.src = "static/images/noche-estrellada-sobre-el-ródano.png";
    texto.innerText = "La noche estrellada, Vincent van Gogh (1889)";
});

tarjeta.addEventListener("mouseout", function () {    
    imagen.src = "static/images/campo-de-trigo-con-cipreses.png";
    texto.innerText = "Campo de trigo con cipreses, Vincent van Gogh (1889)";
});