console.log("Conexión con js");

const botonesLike = document.querySelectorAll(".like");
botonesLike.forEach(function(boton) {
    boton.onclick = function() {
        let cantidadLikes = parseInt(boton.innerText);
        cantidadLikes = cantidadLikes + 1;
        boton.innerText = cantidadLikes + " Me gusta";
    };
});