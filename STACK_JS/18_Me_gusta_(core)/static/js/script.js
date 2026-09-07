console.log("Conexión con js");

const Likes = document.querySelectorAll(".info-likes");

const boton1 = document.getElementById("boton1");
boton1.addEventListener("click", function () {
    let infoLikes1 = Likes[0];
    let cantidadLikes1 = parseInt(infoLikes1.innerText);
    cantidadLikes1 = cantidadLikes1 + 1;
    infoLikes1.innerText = cantidadLikes1 + " like(s)";
});
const boton2 = document.getElementById("boton2");
boton2.addEventListener("click", function () {
    let infoLikes2 = Likes[1];
    let cantidadLikes2 = parseInt(infoLikes2.innerText);
    cantidadLikes2 = cantidadLikes2 + 1;
    infoLikes2.innerText = cantidadLikes2 + " like(s)";
});
const boton3 = document.getElementById("boton3");
boton3.addEventListener("click", function () {
    let infoLikes3 = Likes[2];
    let cantidadLikes3 = parseInt(infoLikes3.innerText);
    cantidadLikes3 = cantidadLikes3 + 1;
    infoLikes3.innerText = cantidadLikes3 + " like(s)";
});
