console.log("Prueba de conexión js..")

/* Ejemplo Bucle for */
function contarhasta2() {
  for (let i = 0; i < 3; i++) {
    alert(i);
  }
}

function cuentaRegresiva() {
for (let i = 10; i > 0; i--) {
    alert(i);
}
}

function recorrerLista() {
  // Lista es un tipo de dato (array/lista/arreglos)
// [] = ["Nombre", 4, true, [2, 4] ]
/* 
let nombre = "Carlos";
alert (nombre);
let nombres = ["Carlos", "Maria"]
alert(nombres[0]) --> Imprime Carlos
alert(nombres[1]) --> Imprime Maria
alert(nombres[0].length); --> 0 (largo): 0
alert(nombres.length); --> 2 (largo nombres)
*/
    let usuarios = ["Ana", "Luis", "María", "Simon", "Sofia"];

  for (let i = 0; i < usuarios.length; i++) {
      alert("Bienvenido, " + usuarios[i]);
  }
  }


/* Ejemplo Bucle While */
function reproducirCancion() {
  let reproduciendo = true;

  while (reproduciendo) {
    alert("La canción sigue sonando...");
    // Simulación de una acción que detendría la reproducción
    // reproduciendo = false;
    reproduciendo = false;
}
}

function cargarDatos() {
  let datosPendientes = 5;

  while (datosPendientes > 0) {
    alert(`Cargando datos... ${datosPendientes} de 5`);
    datosPendientes--;
  }
}

function validarContrasena() {
  let contrasenaCorrecta = false;
// !variables = variable es distinta a verdadero - dentro de una condición
  while (!contrasenaCorrecta) {
    let intento = prompt("Ingresa tu contraseña:");
    if (intento === "1234") {
        contrasenaCorrecta = true;
        alert("Acceso concedido.");
        break; // rompe el bucle
        alert(`No se ejecuta`)
    } else {
        alert("Contraseña incorrecta, intenta de nuevo.");
    }
  }
}

var x = 10; 
while (x > 5) { 
  console.log(x); x -= 3; // restar de 3 en 3
}

for(var i = 3; i < 10; i += 2) { 
  console.log(i);
}

var x = 0; 
for(var i = 1; i <= 5; i++) { 
  x += i * 2; 
}
