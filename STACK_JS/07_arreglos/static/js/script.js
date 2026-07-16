console.log("Conexion con JS..")

// Variables a lista
let nombre1 = "Ana";
let nombre2 = "Pedro";
let nombre3 = "María";
let nombre4 = "Carlos";

// Transformar en array y mostrar
let nombres = ["Ana", "Pedro", "María", "Carlos"]

// Mostrar a Maria en una alerta
alert(nombres[1]); // Muestra Maria

let compras = [5000, 2300, 12000, 4500, 3000];
let alumnos = ["Ana", "Pedro", "María", "José"];
let datos = ["Carlos", 18, true];
let frutas = ["Manzana", "Pera", "Kiwi", "Sandía"];

// Desafío formar una oración con elementos
// de las distintas variables
// Pedro tiene 18 años, y compró una sandía a $2300
let mensaje = `${alumnos[1]} tiene ${datos[2]} años, y compró una ${frutas[4]} a ${compras[2]}`;
alert(mensaje);

// La propiedad .length devuelve la cantidad de las variables

let frutas2 = ["Manzana", "Pera", "Kiwi", "Sandía"];

console.log(frutas2.length); // 4 --> Conteo de elementos

// Obtener el último elemento
let frutas3 = ["Manzana", "Pera", "Kiwi", "Sandía"];

let ultima = frutas3[frutas3.length - 1];
// variable.length: -1 siempre trae el último elemnto

console.log(ultima)


// Desafío 
// Del arreglo ("Hola", "a", "todos", "loa", "programadores!")
// Mostrar el penúltimo elemento y el último concatenado

let elementos = ["Hola", "a", "todos", "los", "programadores!"]
console.log(elementos[elementos.length - 2] + elementos[elementos.length - 1])

let listaTareas = ["Barrer", "Cocinar", "Realizar compras"];
function manipularArreglo(listaTareas) {
    // Modificar un elemnto del arreglo
    listaTareas[1] = "Contruir";
    // Añadir un elemento al final de la lista
    listaTareas.push("Cocinar"); // Agrega un elemento al final .push()
    // Eliminar el último elemento y mostrarlo
    let eliminado = listaTareas.pop(); // Elimina último .pop()
    // Añadir un elemnto al inicio de la lista
    listaTareas.unshift("Boxear"); // Eliminar primero .unshift()
    // Eliminar el primer elemento de la lista
    eliminado += " - " + listaTareas.shift(); // .shift elimina el primero
    // Mostrar resultado
    alert(listaTareas.join[" - "]);
    alert("Elemntos eliminados: " + eliminado);
}





// 💻 Ejercicios
// Ejercicio 1
// Crear el siguiente arreglo.

// let edades = [15,18,20,14,25];
// Mostrar:

// Primera edad.
// Última edad.
// Cantidad de elementos.
function ejercicio1() {
    let edades = [15, 18, 20, 14, 25];
    alert(`Primera edad: ${edades[0]}`);
    alert(`Última edad: ${edades[edades.length - 1]}`);
    alert(`Cantidad de elementos: ${edades.length}`);
}

// Ejercicio 2
// Crear un arreglo con cinco nombres.

// Mostrar todos utilizando un ciclo for.
function ejercicio2() {
    let nombres2 = ["Sofia", "Dario", "Maria", "Camila", "Mateo"];
    for (let i = 0; i < nombres2.length; i++) {
        alert(`Nombres en ciclo ${i}: ${nombres2[i]}`);
    }
}

// Ejercicio 3
// Crear un arreglo con cinco notas.

// Calcular el promedio.

// Mostrar:

// Promedio: X
function ejercicio3() {
    let notas3 = [6.5, 5.0, 4.2, 7.0, 5.8];
    let suma3 = 0;
    for (let i = 0; i < notas3.length; i++) {
        suma3 += notas3[i];
    }
    let promedio3 = suma3 / notas3.length;
    alert(`Promedio: ${promedio3}`);
}

// Ejercicio 4
// Crear el arreglo.

// [18,20,15,22,19,25,17]
// Mostrar solamente las temperaturas mayores a 20.
function ejercicio4() {
    let temperatura = [18, 20, 15, 22, 19, 25, 17];
    let mayor20 = [];
    for (let i = 0; i < temperatura.length; i++) {
        if (temperatura[i] > 20) {
            mayor20.push(temperatura[i]);
        }
    }
    alert(`Temperaturas mayores a 20: ${mayor20.join(", ")}`);
}

// Ejercicio 5
// Crear un arreglo con diez números.

// Contar:

// Cuántos son pares.
// Cuántos son impares.
function ejercicio5() {
    let numeros = [12, 7, 22, 14, 3, 9, 30, 15, 8, 11];
    let pares = 0;
    let impares = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }
    alert(`Pares: ${pares}
        \nImpares: ${impares}`);
}

// Ejercicio 6
// Crear el siguiente arreglo.

// [5000,12000,3000,4500,7000]
// Mostrar:

// Venta mayor.
// Venta menor.
// Total vendido.
function ejercicio6() {
    let ventas = [5000, 12000, 3000, 4500, 7000];
    let ventaMayor = ventas[0];
    let ventaMenor = ventas[0];
    let totalVenta = 0;
    for (let i = 0; i < ventas.length; i++) {
        totalVenta += ventas[i];
        if (ventas[i] > ventaMayor) {
            ventaMayor = ventas[i];
        } else if (ventas[i] < ventaMenor) {
            ventaMenor = ventas[i];
        }
    }
    alert(`Venta mayor: ${ventaMayor}
        \nVenta menor: ${ventaMenor}
        \nTotal vendido: ${totalVenta}`);
}

// Ejercicio 7
// Crear el siguiente arreglo.

// ["Ana","Pedro","María","Juan","Camila","Tomás"]
// Mostrar únicamente los nombres con más de cuatro letras.
function ejercicio7() {
    let nombres3 = ["Ana", "Pedro", "María", "Juan", "Camila", "Tomás"];
    let masLetras = [];
    for (let i = 0; i < nombres3.length; i++) {
        if (nombres3[i].length > 4) {
            masLetras.push(nombres3[i]);
        }
    }
    alert(`Nombres con más de 4 letras: ${masLetras.join(", ")}`);
}

// Ejercicio 8
// Crear un arreglo con ocho números.

// Mostrar únicamente los múltiplos de 3.
function ejercicio8() {
    let numeros = [4, 9, 12, 17, 21, 25, 30, 31];
    let multiplos = [];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 3 === 0) {
            multiplos.push(numeros[i]);
        }
    }
    alert(`Los múltiplos de 3 son ${multiplos.join(", ")}`);
}

// Ejercicio 9
// Crear el siguiente arreglo.

// [15,16,17,18,17,16,19,20]
// Calcular:

// Cantidad de mayores de edad.
// Cantidad de menores de edad.
function ejercicio9() {
    let edades = [15, 16, 17, 18, 17, 16, 19, 20];
    let mayores = 0;
    let menores = 0;
    for (let i = 0; i < edades.length; i++) {
        if (edades[i] >= 18) {
            mayores++;
        } else {
            menores++;
        }
    }
    alert(`Cantidad de mayores de edad: ${mayores}
        \nCantidad de menores de edad: ${menores}`);
}

// Ejercicio 10 (Desafío)
// let ventas = [12000,18000,5000,21000,9000,15000,8000];
// Mostrar:

// Total de ventas.
// Promedio.
// Venta mayor.
// Venta menor.
// Cantidad de ventas mayores a $10.000.
// Cantidad de ventas menores o iguales a $10.000.
// Índice donde ocurrió la venta mayor.
// Índice donde ocurrió la venta menor.
function ejercicio10() {
    
}


// 🚀 Desafío Final
// Una empresa registra las ventas de sus vendedores.

// let vendedores = ["Ana","Pedro","María","José","Camila"];

// let ventas = [350000,510000,420000,610000,480000];
// Desarrolla un programa que permita:

// Mostrar cada vendedor con su venta.
// Calcular el total vendido.
// Calcular el promedio.
// Mostrar el mejor vendedor.
// Mostrar el vendedor con menor venta.
// Mostrar los vendedores que vendieron más de $450.000.
// Contar cuántos vendedores superaron el promedio.
// Indicar si la empresa alcanzó una meta de $2.300.000.
// ⭐ Desafío Extra
// Permite que el usuario agregue nuevas ventas utilizando:

// push()
// pop()
// shift()
// unshift()
// y vuelve a calcular todas las estadísticas automáticamente.