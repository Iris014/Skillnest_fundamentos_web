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

  if (peso <= 2) {
    categoria = "Hasta 2 kg";
    valor = "$3000";
  } else if (peso > 2 && peso <= 5) {
    categoria = "Más de 2 kg y hasta 5 kg";
    valor = "$5000";
  } else if (peso > 5 && peso <= 10) {
    categoria = "Más de 5 kg y hasta 10 kg";
    valor = "$8000";
  } else if (peso > 10) {
    categoria = "Más de 10 kg";
    valor = "$15000";
  }

  alert(`Nombre del cliente: ${nombre} 
        \nCategoría del envío: ${categoria} 
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
  let temperatura = parseInt(prompt("Ingresa la temperatura actual:"));
  if (temperatura < 10 && temperatura <= 10) {
    mensaje = "Hace frío";
  } else if (temperatura >= 10 && temperatura <= 24) {
    mensaje = "Temperatura agradable";
  } else if (temperatura >= 35 && temperatura <= 50) {
    mensaje = "Hace calor";
  } else {
    mensaje = "Ingresar valores válidos!";
  }
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
  let usuario = prompt("Ingrese su nombre de usuario:");

  let contrasena = parseInt(prompt("Ingrese su contraseña:"));

  if (usuario === "admin" && contrasena === "12345") {
    alert("Bienvenido Administrador: " + usuario);
  } else if (usuario === "admin") {
    alert("Contraseña Incorrecta");
  } else {
    alert(`Usuario ${usuario} no encontrado`);
  }
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
  let NombreEstudiante = prompt("Nombre del estudiante:");
  let nota1 = parseInt(prompt("Ingresar primera nota:"));

  let nota2 = parseInt(prompt("Ingresar segunda nota:"));
  let nota3 = parseInt(prompt("Ingresar tercera nota:"));

  let promedio = (nota1 + nota2 + nota3) / 3;

  if (promedio >= 6.0) {
    alert("Aprobado con excelencia");
  } else if (promedio <= 4.0 && promedio > 5.9) {
    alert("Aprobado");
  } else if (promedio <= 4.0) {
  }
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
