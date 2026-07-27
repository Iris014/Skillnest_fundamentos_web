console.log("Conexión con JS..");

// Manos a la masa
// 🎯 Objetivo
// Aplicar la creación de objetos en JavaScript utilizando una función que genere nuevas instancias de un objeto
// basado en parámetros dados.

// ❓ ¿Por qué es importante?
// Los objetos en JavaScript te permiten organizar datos de manera estructurada y reutilizable. Crear una función
// que devuelva un objeto es una práctica común en la programación, ya que facilita la generación de
// múltiples elementos con características similares.

// En este desafío, aplicarás estos conceptos creando una fábrica de pizzas, lo que te ayudará a comprender
// cómo funcionan los objetos en la vida real y cómo puedes generar datos dinámicamente.

// 📋 Instrucciones
// 👨‍🍳 Crea una función llamada pizzaOven que devuelva un objeto con las propiedades:

// corteza: tipo de corteza de la pizza.
// salsa: tipo de salsa utilizada.
// quesos: un arreglo con los tipos de queso que tiene la pizza.
// ingredientes: un arreglo con los ingredientes adicionales.
// 🍕 Usa la función para crear las siguientes pizzas:

// Una pizza “estilo Chicago” con corteza tradicional, salsa tradicional, mozzarella
// y los ingredientes pepperoni y salchicha.
// Una pizza “lanzada a mano” con salsa marinara, mozzarella y feta, y los ingredientes champiñones, aceitunas y cebollas.
// Crea dos pizzas más con tus ingredientes favoritos.
// 💻 Muestra en consola los objetos de cada pizza creada.

let pizza = {
        corteza: "tipo de corteza de la pizza",
        salsa: "tipo de salsa utilizada",
        quesos: ["arreglo", "con", "los", "tipos", "de", "queso", "que", "tiene", "la", "pizza"],
        ingredientes: ["arreglo", "con", "los", "ingredientes", "adicionales"],
}
function pizzaOven(corteza, salsa, quesos, ingredientes) {
    let pizza = [];
    pizzaOven.corteza = corteza;
    pizzaOven.salsa = salsa;
    pizzaOven.queso = quesos;
    pizzaOven.ingredientes = ingredientes;
}

    let estiloChicago = pizzaOven("tradicional", "tradicional", ["mozzarella"],
        ["un arreglo con los ingredientes adicionales"]);
        alert(`Ingredientes de la pizza oven:
            Corteza: ${estiloChicago.corteza}
            Salsa ${estiloChicago.salsa}
            Queso ${estiloChicago.quesos.join(" - ")}
            Ingredientes: ${estiloChicago.salsas.join(" - ")}`);

    let LanzadaAMano = pizzaOven("tradicional", "marinara", ["mozzarella", "feta"],
        ["champiñones", "aceitunas", "cebollas"]);
        alert(`Ingredientes de la pizza oven:
            Corteza: ${LanzadaAMano.corteza}
            Salsa ${LanzadaAMano.salsa}
            Queso ${LanzadaAMano.quesos.join(" - ")}
            Ingredientes: ${LanzadaAMano.salsas.join(" - ")}`);

    let americana = pizzaOven("tradicional", "tradicional", ["mozzarella"],
        ["un arreglo con los ingredientes adicionales"]);
        alert(`Ingredientes de la pizza oven:
            Corteza: ${americana.corteza}
            Salsa ${americana.salsa}
            Queso ${americana.quesos.join(" - ")}
            Ingredientes: ${americana.salsas.join(" - ")}`);

    let fullDeQueso = pizzaOven("tradicional", "tradicional", ["mozzarella"],
        ["un arreglo con los ingredientes adicionales"]);
        alert(`Ingredientes de la pizza oven:
            Corteza: ${fullDeQueso.corteza}
            Salsa ${fullDeQueso.salsa}
            Queso ${fullDeQueso.quesos.join(" - ")}
            Ingredientes: ${fullDeQueso.salsas.join(" - ")}`);

// Ejemplo de objeto

// Antes de comenzar con las pizzas, revisemos un ejemplo con sándwiches para entender la lógica:

let sandwich = {
    pan: "masa madre",
    proteina: "asado",
    queso: "queso suizo",
    salsas: ["lechuga", "tomates", "salsa de rábano"]
};

console.log(sandwich);
// En este caso, has creado un objeto sandwich con diferentes propiedades. Pero,
// ¿qué pasa si quieres hacer varios sándwiches sin escribir todo manualmente cada vez? Puedes crear una
// fábrica de sándwiches usando una función que devuelva un objeto:

function sandwichFactory(pan, proteina, queso, salsas) {
    let sandwich = {};
    sandwich.pan = pan;
    sandwich.proteina = proteina;
    sandwich.queso = queso;
    sandwich.salsas = salsas;
    return sandwich;
}

let s1 = sandwichFactory("trigo", "pavo", "provolone", [
    "mostaza",
    "cebolla frita",
    "rúcula",
]);
console.log(s1);

let s2 = sandwichFactory("masa madre", "pollo", "chedar", [
    "ketchup",
    "mayonese",
]);
alert(s1);
alert(`Ingredientes del seundo sandwich:
    Pan: ${s2.pan}
    Proteina: ${s2.proteina}
    Queso: ${s2.queso}
    Salsas: ${s2.salsas.join(" - ")}`);

// Explicación

// 🥪 La función sandwichFactory permite crear objetos con diferentes combinaciones de ingredientes.

// 🍞 En cada llamada a la función, puedes personalizar el sándwich con diferentes ingredientes sin escribir
// código repetitivo.

// Ahora, es tu turno de hacer lo mismo con las pizzas.

// 💡 Tips

// 🧠 Piensa en cada pizza como un objeto con propiedades.

// 🔢 Usa un arreglo para los ingredientes y quesos, ya que una pizza puede tener más de uno.

// 🧹 Mantén la sintaxis clara y organizada para que tu código sea fácil de leer y modificar.

// 🔍 Recuerda que puedes acceder a las propiedades de tu pizza con pizza.propiedad o modificarla si lo necesitas.

// 📚 Contenidos que estás aplicando

// 🧱 Creación de objetos en JavaScript.

// 🔁 Uso de funciones para generar objetos dinámicamente.

// 📦 Aplicación de arreglos dentro de objetos.

// 🧭 Acceso a propiedades de un objeto en JavaScript.

// 🤔 Preguntas y reflexión

// ¿Cómo te ayuda el uso de objetos y funciones a escribir código más reutilizable y organizado?

// 🎉 Resultado esperado
// Al finalizar la asignación, habrás creado cuatro pizzas diferentes usando una función que genera objetos.
// Estas pizzas estarán estructuradas de manera clara y organizada, demostrando cómo los objetos y funciones
// permiten generar datos dinámicos sin necesidad de escribir código repetitivo.
