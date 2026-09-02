console.log("Conexión con js");

const botonesLike = document.querySelectorAll(".seccion-like");
botonesLike.forEach(function(boton) {
    boton.onclick = function() {
        let cantidadLikes = parseInt(this.querySelector(".info-likes").innerText);
        cantidadLikes = cantidadLikes + 1;
        this.querySelector(".info-likes").innerText = cantidadLikes + " like(s)";
    };
});
