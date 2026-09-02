console.log("Conexión con js");

const botonLike1 = document.querySelector("boton1");
botonLike1.addEventListener("click", function () {
    boton.onclick = function() {
        let cantidadLikes = parseInt(this.querySelector("boton1").innerText);
        cantidadLikes = cantidadLikes + 1;
        this.querySelector("boton1").innerText = cantidadLikes + " like(s)";
    };
});

