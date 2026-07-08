console.log("Conexion con js");

// # Ejercicio 1: Calculadora de Envío

// ## Enunciado

// Una empresa de despacho cobra el envío dependiendo del peso del paquete.

// Solicitar:

// - Nombre del cliente
// - Peso del paquete (kg)

// Condiciones:

// - Hasta 2 kg
// - Más de 2 kg y hasta 5 kg
// - Más de 5 kg y hasta 10 kg
// - Más de 10 kg

// El programa debe indicar:

// - Nombre del cliente
// - Categoría del envío
// - Valor correspondiente al despacho

function ejercicio1() {
  let nombre = prompt("Ingrese el nombre del cliente:");
  let peso = parseInt(prompt("Ingrese el peso del paquete (kg):"));
  let envio = "";

  if (peso <= 2) {
    envio = "Hasta 2 kg";
    valor = "$3000";
  } else if (peso > 2 && peso <= 5) {
    envio = "Más de 2 kg y hasta 5 kg";
    valor = "$5000";
  } else if (peso > 5 && peso <= 10) {
    envio = "Más de 5 kg y hasta 10 kg";
    valor = "$8000";
  } else if (peso > 10) {
    envio = "Más de 10 kg";
    valor = "$15000";
  }

  alert(`Nombre del cliente: ${nombre} 
        \nCategoría del envío: ${envio} 
        \nValor correspondiente al despacho: ${valor}`);
}

// ---

// # Ejercicio 2: Acceso a Biblioteca

// ## Enunciado

// Una biblioteca posee dos tipos de usuarios:

// - Estudiante
// - Profesor

// Solicitar:

// - Tipo de usuario
// - Cantidad de libros solicitados

// Condiciones:

// Cada tipo de usuario posee un límite distinto de préstamos.

// El programa debe indicar:

// - Si el préstamo está permitido.
// - Si supera el límite permitido.
// - Mostrar un mensaje diferente según el tipo de usuario.

// Utilizar operadores lógicos para realizar las validaciones.

function ejercicio2() {
let tipoUsuario = prompt("Ingrese tipo de usuario (Estudiante/Profesor):").toLowerCase();
  let cantidadLibros = parseInt(prompt("Cantidad de libros solicitados:"));

  if (tipoUsuario === "estudiante" && cantidadLibros <= 3) {
    alert("Préstamo permitido. ¡Mensaje diferente para Estudiante!");
  } else if (tipoUsuario === "estudiante" && cantidadLibros > 3) {
    alert("Supera el límite permitido para Estudiante.");
  } else if (tipoUsuario === "profesor" && cantidadLibros <= 5) {
    alert("Préstamo permitido. ¡Mensaje diferente para Profesor!");
  } else if (tipoUsuario === "profesor" && cantidadLibros > 5) {
    alert("Supera el límite permitido para Profesor.");
  }
}

// ---

// # Ejercicio 3: Clasificación Deportiva

// ## Enunciado

// Solicitar:

// - Nombre del participante
// - Edad

// Clasificar al participante según su edad.

// Debe existir al menos cuatro categorías distintas.

// Finalmente mostrar:

// - Nombre
// - Edad
// - Categoría asignada

function ejercicio3() {
  let nombre = prompt("Ingrese el nombre del participante:");
  let edad = parseInt(prompt("Ingrese la edad del participante:"));
  let categoria = "";
    if (edad > 0 && edad <= 12) {
    categoria = "Infantil";
  } else if (edad > 12 && edad <= 17) {
    categoria = "Juvenil";
  } else if (edad > 17 && edad <= 35) {
    categoria = "Adulto";
  } else {
    categoria = "Senior";
  }
  alert(`Nombre: ${nombre}
    \nEdad: ${edad}
    \nCategoría asignada: ${categoria}`);
}

// ---

// # Ejercicio 4: Sistema de Bonificación

// ## Enunciado

// Una empresa entrega bonos según los años trabajados.

// Solicitar:

// - Nombre del trabajador
// - Años de servicio

// Clasificar según distintos rangos de antigüedad.

// Mostrar:

// - Nombre
// - Nivel de antigüedad
// - Mensaje indicando si recibe o no bonificación.

function ejercicio4() {
  let nombre = prompt("Ingrese el nombre del trabajador:");
  let anosServicio = parseInt(prompt("Ingrese los años de servicio:"));
  let nivel = "";
  let mensaje = "";
  if (anosServicio < 1) {
    nivel = "Inicial";
    mensaje = "No recibe bonificación.";
  } else if (anosServicio >= 1 && anosServicio <= 5) {
    nivel = "Intermedio";
    mensaje = "Sí recibe bonificación.";
  } else if (anosServicio > 5) {
    nivel = "Avanzado";
    mensaje = "Sí recibe bonificación.";
  } else {
    nivel = "Desconocido";
    mensaje = "Error en los datos ingresados.";
  }
  alert(`Nombre: ${nombre}
    \nNivel de antigüedad: ${nivel}
    \nMensaje: ${mensaje}`);
}

// ---

// # Ejercicio 5: Evaluación de Velocidad

// ## Enunciado

// Solicitar:

// - Nombre del conductor
// - Velocidad registrada

// Condiciones:

// Clasificar la velocidad en distintos rangos.

// Además:

// Si supera un determinado límite, mostrar un mensaje indicando que ha excedido la velocidad permitida.

// Mostrar:

// - Nombre del conductor
// - Velocidad
// - Clasificación obtenida

function ejercicio5() {
  let nombreConductor = prompt("Ingrese el nombre del conductor:");
  let velocidad = parseInt(prompt("Ingrese la velocidad registrada (km/h):"));
  let clasificacion = "";
  if (velocidad <= 40) {
    clasificacion = "Velocidad baja";
  } else if (velocidad > 40 && velocidad <= 90) {
    clasificacion = "Velocidad moderada";
  } else if (velocidad > 90 && velocidad <= 120) {
    clasificacion = "Velocidad alta";
  } else if (velocidad > 120) {
    clasificacion = "Velocidad excesiva";
    alert("¡Atención! Ha excedido la velocidad máxima permitida.");
  } else {
    clasificacion = "Velocidad no válida";
  }
  alert(`Nombre del conductor: ${nombreConductor}
    \nVelocidad: ${velocidad} km/h
    \nClasificación obtenida: ${clasificacion}`);
}

// ---

// # Requisitos Técnicos

// Cada ejercicio debe cumplir con:

// - Una función independiente.
// - Uso de prompt().
// - Uso de alert().
// - Uso de variables.
// - Uso de if.
// - Uso de else if.
// - Uso de else.
// - Uso de operadores de comparación.
// - Uso de operadores lógicos cuando corresponda.

// ---

// # Desafío Extra

// Agregar una o más de las siguientes mejoras:

// - Validación de campos vacíos.
// - Validación de datos numéricos.
// - Mostrar mensajes utilizando emojis.
// - Mostrar resultados dentro del HTML utilizando `innerHTML`.
// - Cambiar colores o estilos mediante JavaScript según el resultado obtenido.
