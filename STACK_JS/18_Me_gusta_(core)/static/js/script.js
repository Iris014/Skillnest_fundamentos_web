console.log("Conexión con js");

const botonLike1 = document.querySelector("boton1");
botonLike1.addEventListener("click", function () {
    boton1.onclick = function() {
        let cantidadLikes1 = parseInt(this.querySelector("boton1").innerText);
        cantidadLikes1 = cantidadLikes1 + 1;
        this.querySelector("boton1").innerText = cantidadLikes1 + " like(s)";
    };
});

const botonLike2 = document.querySelector("boton2");
botonLike2.addEventListener("click", function () {
    boton2.onclick = function() {
        let cantidadLikes2 = parseInt(this.querySelector("boton2").innerText);
        cantidadLikes2 = cantidadLikes2 + 1;
        this.querySelector("boton2").innerText = cantidadLikes2 + " like(s)";
    };
});

const botonLike3 = document.querySelector("boton3");
botonLike3.addEventListener("click", function () {
    boton3.onclick = function() {
        let cantidadLikes3 = parseInt(this.querySelector("boton3").innerText);
        cantidadLikes3 = cantidadLikes3 + 1;
        this.querySelector("boton3").innerText = cantidadLikes3 + " like(s)";
    };
});