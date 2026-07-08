console.log("Conexion con js")

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
    let peso = prompt("Ingrese el peso del paquete (kg):");
    
    let pesoNumero = parseInt(peso);
    let categoria = "";
    let valor = "";

    if (pesoNumero <= 2) {
        categoria = "Hasta 2 kg";
        valor = "$3000";
    } else if (pesoNumero > 2 && pesoNumero <= 5) {
        categoria = "Más de 2 kg y hasta 5 kg";
        valor = "$5000";
    } else if (pesoNumero > 5 && pesoNumero <= 10) {
        categoria = "Más de 5 kg y hasta 10 kg";
        valor = "$8000";
    } else if (pesoNumero > 10) {
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
    let tipoUsuario = prompt("Ingrese tipo de usuario (Estudiante / Profesor):");
    let cantidadLibros = prompt("Ingrese la cantidad de libros solicitados:");

    let cantidadNumero = parseInt(cantidadLibros);

    if (tipoUsuario == "Estudiante" && cantidadNumero <= 3) {
        alert(`El préstamo está permitido.
            \nNo supera el límite permitido.
            \nMensaje: Préstamo aprobado para estudiante.`);
    } else if (tipoUsuario == "Estudiante" && cantidadNumero > 3) {
        alert(`El préstamo NO está permitido.
            \nSupera el límite permitido.
            \nMensaje: Los estudiantes solo pueden pedir hasta 3 libros.`);
    } else if (tipoUsuario == "Profesor" && cantidadNumero <= 5) {
        alert(`El préstamo está permitido.
            \nNo supera el límite permitido.
            \nMensaje: Préstamo aprobado para profesor.`);
    } else if (tipoUsuario == "Profesor" && cantidadNumero > 5) {
        alert(`El préstamo NO está permitido.
            \nSupera el límite permitido.
            \nMensaje: Los profesores solo pueden pedir hasta 5 libros.`);
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
    let edad = prompt("Ingrese la edad:");


    let edadNumero = parseInt(edad);
    let categoriaAsignada = "";

    if (edadNumero <= 12) {
        categoriaAsignada = "Infantil";
    } else if (edadNumero > 12 && edadNumero <= 17) {
        categoriaAsignada = "Juvenil";
    } else if (edadNumero > 17 && edadNumero <= 35) {
        categoriaAsignada = "Adulto";
    } else if (edadNumero > 35) {
        categoriaAsignada = "Senior";
    }

    alert(`Nombre: ${nombre}
        \nEdad: ${edadNumero}
        \nCategoría asignada: ${categoriaAsignada}`);
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
    let anosServicio = prompt("Ingrese los años de servicio:");

    let anosNumero = parseInt(anosServicio);
    let nivelAntiguedad = "";
    let mensajeBonificacion = "";

    if (anosNumero < 1) {
        nivelAntiguedad = "Inicial";
        mensajeBonificacion = "No recibe bonificación.";
    } else if (anosNumero >= 1 && anosNumero <= 5) {
        nivelAntiguedad = "Intermedio";
        mensajeBonificacion = "Sí recibe bonificación.";
    } else if (anosNumero > 5) {
        nivelAntiguedad = "Avanzado";
        mensajeBonificacion = "Sí recibe bonificación.";
    }

    alert(`Nombre: ${nombre}
        \nNivel de antigüedad: ${nivelAntiguedad}
        \nMensaje: ${mensajeBonificacion}`);
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
    let velocidadRegistrada = prompt("Ingrese la velocidad registrada:");

    let velocidadNumero = parseInt(velocidadRegistrada);
    let clasificacionObtenida = "";

if (velocidadNumero <= 40) {
        clasificacionObtenida = "Velocidad baja";
    } else if (velocidadNumero > 40 && velocidadNumero <= 90) {
        clasificacionObtenida = "Velocidad moderada";
    } else if (velocidadNumero > 90 && velocidadNumero <= 120) {
        clasificacionObtenida = "Velocidad alta";
    } else if (velocidadNumero > 120) {
        clasificacionObtenida = "Velocidad excesiva";
        alert("¡Ha excedido la velocidad permitida!");
    }

    alert(`Nombre del conductor: ${nombreConductor}
        \nVelocidad: ${velocidadNumero}
        \nClasificación obtenida: ${clasificacionObtenida}`);
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
