console.log("Conexion con JS..")

// 🎮 Filtrando videojuegos según su clasificación
// Imagina que tienes una tienda de videojuegos y necesitas recomendar juegos según la edad de los jugadores. 
// Tienes un arreglo con diferentes videojuegos y sus edades recomendadas. Filtra solo los juegos aptos para
//  una edad específica.
function filtrarJuegos() {
    let videojuegos = [
        { nombre: "Minecraft", edadRecomendada: 7 },
        { nombre: "FIFA 23", edadRecomendada: 3 },
        { nombre: "Call of Duty", edadRecomendada: 18 },
        { nombre: "Fortnite", edadRecomendada: 12 }
    ];
    let edadMinima = 12;
    let recomendados = [];
    for (let i = 0; i < videojuegos.length; i++) {
        if (videojuegos[i].edadRecomendada <= edadMinima) {
            recomendados.push(videojuegos[i].nombre);
        }
    }
    alert(`Juegos recomendados: ${recomendados.join(", ")}`);
}

// Explicación

// 🧒 Se define un arreglo de objetos, donde cada objeto representa un videojuego con su respectiva edad recomendada.
// 📏 Se establece un valor mínimo de edad (edadMinima).
// 🔁 Se recorre el arreglo de videojuegos usando un bucle for.
// 📏 Si la edad recomendada del videojuego es menor o igual a edadMinima, se agrega al nuevo arreglo recomendados.
// 📋 Finalmente, se imprime la lista de juegos aptos para esa edad.
// Salida esperada:

// ["Minecraft", "FIFA 23", "Fortnite"]

// 🎵 Contador de canciones favoritas
// Tienes una lista de canciones en tu aplicación de música y quieres saber cuántas veces has reproducido cada una. Cuenta cuántas veces aparece una canción en la lista.
function contarCancion() {
    let historialReproduccion = [
        "Shallow",
        "Blinding Lights",
        "Shallow",
        "Anti-Hero",
        "Shallow",
        "Bad Habits",
    ];
    let cancionBuscada = "Shallow";
    let contador = 0;
    for (let i = 0; i < historialReproduccion.length; i++) {
        if (historialReproduccion[i] === cancionBuscada) {
            contador++;
        }
    }
    alert(`La canción ${cancionBuscada} se reprodujo ${contador} veces.`);
}

// Explicación

// 🎧 Se define un arreglo con un historial de canciones reproducidas.
// 🔍 Se establece la canción que se quiere contar (cancionBuscada).
// 🔁 Se recorre el arreglo con un bucle for.
// 🔍 Cada vez que la canción en la lista coincide con cancionBuscada, el contador aumenta en 1.
// 🔢 Finalmente, se muestra cuántas veces se ha reproducido la canción seleccionada.
// Salida esperada:

// La canción Shallow se reprodujo 3 veces.

// 🕹️ Organizadores de torneo de videojuegos
// Eres parte del comité organizador de un torneo de videojuegos. Necesitas dividir a los jugadores en grupos de un tamaño específico.
function organizarTorneo() {
    let jugadores = [
        "Luis",
        "Andrea",
        "Carlos",
        "Sofía",
        "Pedro",
        "Martina",
        "Javier",
        "Valentina",
    ];
    let tamanoGrupo = 3;
    let grupos = [];
    let grupoActual = [];
    for (let i = 0; i < jugadores.length; i++) {
        grupoActual.push(jugadores[i]);
        if (grupoActual.length === tamanoGrupo || i === jugadores.length - 1) {
            grupos.push(grupoActual);
            grupoActual = [];
        }
    }
    alert(`Grupos formados: ${JSON.stringify(grupos)}`);
}

// Explicación

// 👥 Se define un arreglo jugadores con los participantes del torneo.
// 📦 Se establece tamanoGrupo para determinar cuántos jugadores habrá en cada equipo.
// 🔁 Se usa un bucle for para recorrer la lista de jugadores y agregarlos a grupoActual.
// ✅ Cuando el grupo alcanza el tamaño definido o se llega al último jugador, se almacena en grupos y se reinicia grupoActual.
// Salida esperada:

// [["Luis", "Andrea", "Carlos"], ["Sofía", "Pedro", "Martina"], ["Javier", "Valentina"]]

// 🎟️ Simulador de una lista de espera en un cine
// En un cine, las personas se registran para comprar boletos, 
// pero solo pueden atender a cierta cantidad a la vez. Muestra los primeros en ser atendidos 
// y actualiza la lista de espera.
function simularLista() {
    let filaClientes = [
        "María",
        "José",
        "Fernanda",
        "Diego",
        "Valeria",
        "Samuel",
    ];
    let cantidadAtendidos = 3;
    let atendidos = [];
    for (let i = 0; i < cantidadAtendidos; i++) {
        atendidos.push(filaClientes[i]);
    }
    filaClientes = filaClientes.slice(cantidadAtendidos);
    alert(`Clientes atendidos: ${atendidos.join(", ")}`);
    alert(`Clientes en espera: ${filaClientes.join(", ")}`);
}

// Explicación

// 📄 Se extraen los primeros clientes de la fila y luego se actualiza la lista con los que aún esperan.
// Salida esperada:

// Clientes atendidos: ["María", "José", "Fernanda"]
// Clientes en espera: ["Diego", "Valeria", "Samuel"]
