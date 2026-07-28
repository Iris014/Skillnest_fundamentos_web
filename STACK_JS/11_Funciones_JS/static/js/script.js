console.log("Conexión con JS")
// Ejemplo función simple (sin parámetros)
function saludar(/* parámetros */) {
    alert("¡Hola, bienvenido!");
}
// saludar(); // Ejecución de una función

/*
function saludar(nombre) {
    console.log("¡Hola, " + nombre + "!");
}
saludar("Luis");
saludar("Ana");
*/

function encontrarMaximo(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
let numero1 = 10;
let numero2 = 7;
let maximo = encontrarMaximo(numero1, numero2);
console.log("El número mayor entre", numero1, "y", numero2, "es:", maximo);