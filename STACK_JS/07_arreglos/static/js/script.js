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

