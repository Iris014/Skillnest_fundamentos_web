console.log("Conexión con JS")
const botonSesion = document.querySelector(".iniciar-sesion");

botonSesion.onclick = function() {
    if (botonSesion.innerText === "Iniciar sesión") {
        botonSesion.innerText = "Cerrar sesión";
    } else {
        botonSesion.innerText = "Iniciar sesión";
    }
};

const botonPerfil = document.getElementById("boton-perfil");

botonPerfil.onclick = function() {
    alert("¡Bienvenido a tu perfil de Social Blog!");
};

const botonesLike = document.querySelectorAll(".like");
botonesLike.forEach(function(boton) {
    boton.onclick = function() {
        let cantidadLikes = parseInt(boton.innerText);
        cantidadLikes = cantidadLikes + 1;
        boton.innerText = cantidadLikes + " Me gusta";
    };
});