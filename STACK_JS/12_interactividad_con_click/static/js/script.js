console.log("Conexión con JS")

document.getElementById("colorButton").addEventListener("click", function () {
    cambiarColor();
});

// // Función que cambia el color de fondo al hacer clic
// function cambiarColor() {
//     let colores = ["#ff6347", "#66cdaa", "#9370db", "#ffd700", "#4682b4", "#ffa07a"];
//     let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
//     document.body.style.backgroundColor = colorAleatorio;
// }
function cambiarColor() {
    let colores = ["#ff6347", "#66cdaa", "#9370db", "#ffd700", "#4682b4", "#ffa07a"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    let elemento = document.querySelector("body");
    elemento.style.backgroundColor = colorAleatorio;
}

document.getElementById("colorButton2").addEventListener("click", function () {
    ejercicio1();
});
function ejercicio1() {
    let coloresEj1 = ["#ff6347", "#66cdaa", "#9370db", "#ffd700", "#4682b4", "#ffa07a"];
    let colorAleatorioEj1 = coloresEj1[Math.floor(Math.random() * coloresEj1.length)];
    let elementoEj1 = document.querySelector("#caja1");
    elementoEj1.style.backgroundColor = colorAleatorioEj1;
}

document.getElementById("colorButton3").addEventListener("click", function () {
    ejercicio2();
});
function ejercicio2() {
    let coloresEj2 = ["#ff6347", "#66cdaa", "#9370db", "#ffd700", "#4682b4", "#ffa07a"];
    let colorAleatorioEj2 = coloresEj2[Math.floor(Math.random() * coloresEj2.length)];
    let elementoEj2 = document.querySelector("#caja2");
    elementoEj2.style.backgroundColor = colorAleatorioEj2;
}