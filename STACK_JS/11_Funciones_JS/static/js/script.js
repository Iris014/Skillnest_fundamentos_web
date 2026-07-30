console.log("Conexión con JS")
// Ejemplo función simple (sin parámetros)}
function saludar(/* parámetros */) {
    alert("¡Hola, bienvenido!");
}



//  🎚️ Funciones con parámetros
// El parámetro recibe un valor para trabajar en la función.
// El parámetro recibe el tipo de dato al momento de tomar valor.
// saludar(); // Ejecución de una función



function saludarParam(nombre) { // parámetro nombre
    alert("¡Hola, " + nombre + "!");
}

// saludarParam("Luis"); // Ejecución de la función con parámetros. ("argumento")
// saludarParam("Ana");
// saludarParam("Iris");



// 🎯 Funciones con return
function encontrarMayor() {
    function encontrarMaximo(a, b) {
        if (a > b) {
            return a; // Este valor se devuelve porque cumple la condición
        } else {
            return b;
        }
    }
    // máximo guadará el valor de retorno!.
    let numero1 = 10;
    let numero2 = 7;
    let maximo = encontrarMaximo(numero1, numero2);
    alert(`El número mayor entre ${numero1} y ${numero2},
el mayor es: ${maximo}`);
}

// Tarea
/*
Crear una función que recibe 3 parámetros, a, b y c.
Debe Sumar a +b y el resultado restarlo por c.
Devolver el valor final y mostrar con un alert.
*/

//     function recibirParam() {
//         let numero01 = parseInt(prompt("Ingresa valor de 1° número:"));
//         let numero02 = parseInt(prompt("Ingresa valor de 2° número:"));
//         let numero03 = parseInt(prompt("Ingresa valor de 3° número:"));
//         let valorFinal = (numero01 + numero02) - numero03;
//             return valorFinal;
//     alert(`La suma de a +b y el resultado restarlo por c ${numero01} y ${numero02} con ${numero03},
// ${valorFinal}`);
//     }

function operaciones(a, b, c) {
    return a + b - c;
}


/* 
Crear una función que reciba un parámetro a través de un bucle
contar hasta esto:
Ej: Se recibe el número 5 y muestra: 1 - 2 - 3 - 4 - 5
Añadir una condición para que el valor ingresado no sea superior a 100.
*/

// function mostrarConteo() {
//     // Creación de variables
//     let num1 = parseInt(prompt("Ingrese primer número: "));
//     let num1 = parseInt(prompt("Ingrese segundo número: "));
//     let num1 = parseInt(prompt("Ingrese tercer número: "));
//     // Mostramos resultados
//     let resultado = operaciones(num1, num2, num3);
//     alert(`La operación de ${num1} + ${num2} - ${num3} = ${resultado} `)
// }
function mostrarConteo() {
    // Creación de variables
    let parametro = parseInt(prompt(`Ingrese el límite del contador`));
    if (parametro <= 100) {
    // Mostramos resultados
    resultado = contadorNumeros(parametro);
    alert(resultado.join(" - "))
    } else {
        alert(`Ingrese un valor inferior a 100`)
    }
}
function contadorNumeros(a) {
    let numeros = [];
    for(let i = 1; i <= a; i++){
        numeros.push(i)
    }
    return numeros;
}