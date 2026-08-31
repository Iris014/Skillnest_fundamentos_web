const boton = document.getElementById("miBoton");

boton.addEventListener("mouseover", function () {
    console.log("El ratón está sobre el botón");
    boton.style.backgroundColor = "blue";
});

boton.addEventListener("mouseout", function () {
    console.log("El ratón ha salido del botón");
    boton.style.backgroundColor = "crimson";
});

//Tarea
/*
Crear dos botones con eventos onmouseover y onmouseout
- Cambia el texto de un boton
- Cambiar el color de fondo y color de texto del segundo boton
*/


const boton1 = document.getElementById("boton1");
boton1.addEventListener("mouseover", function () {
    if (boton1.innerText === "Texto") {
        boton1.innerText = "Texto cambiado";
    }
});

boton1.addEventListener("mouseout", function () {
    if (boton1.innerText === "Texto cambiado") {
        boton1.innerText = "Texto";
    }
});


const boton2 = document.getElementById("boton2");
boton2.addEventListener("mouseover", function () {
    boton2.style.backgroundColor = "purple";
    boton2.style.color = "yellow";
});

boton2.addEventListener("mouseout", function () {
    boton2.style.backgroundColor = "green";
    boton2.style.color = "cyan";
});

