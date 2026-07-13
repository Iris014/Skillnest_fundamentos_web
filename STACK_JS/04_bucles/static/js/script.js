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
