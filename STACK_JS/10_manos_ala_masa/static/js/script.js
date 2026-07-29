// Crea una función llamada pizzaOven que devuelva un objeto con las propiedades:

// corteza: tipo de corteza de la pizza.
// salsa: tipo de salsa utilizada.
// quesos: un arreglo con los tipos de queso que tiene la pizza.
// ingredientes: un arreglo con los ingredientes adicionales.
// 🍕 Usa la función para crear las siguientes pizzas:

// Una pizza “estilo Chicago” con corteza tradicional, salsa tradicional, mozzarella y los ingredientes pepperoni y salchicha.
// Una pizza “lanzada a mano” con salsa marinara, mozzarella y feta, y los ingredientes champiñones, aceitunas y cebollas.
// Crea dos pizzas más con tus ingredientes favoritos.
// 💻 Muestra en consola los objetos de cada pizza creada.



function pizzaOven(corteza, salsa, quesos, ingredientes) {
    let pizza = {};
    pizza.corteza = corteza;
    pizza.salsa = salsa;
    pizza.quesos = quesos;
    pizza.ingredientes = ingredientes;
    return pizza;
}

let pi1 = pizzaOven(
    "tradicional",
    "tradicional",
    "mozarella",
    ["peperoni", "salchicha", "jamón"],
);
let pi2 = pizzaOven(
    "tradicional",
    "marinara",
    "mozarella",
    ["peperoni", "salchicha", "cebolla"],
);
let pi3 = pizzaOven(
    "tradicional",
    "bbq",
    "mozarella",
    ["peperoni", "salchicha", "cebolla"],
);

let pi4 = pizzaOven(
    "tradicional",
    "keetchup",
    "mozarella",
    ["peperoni", "salchicha", "cebolla"],
);

function pizzaxde(){
alert(`Ingredientes de la primera pizza:
    corteza: ${pi1.corteza}
    salsa: ${pi1.salsa}
    quesos: ${pi1.quesos}
    ingredientes: ${pi1.ingredientes}`);
alert(`Ingredientes de la segunda pizza:
    corteza: ${pi2.corteza}
    salsa: ${pi2.salsa}
    quesos: ${pi2.quesos}
    ingredientes: ${pi2.ingredientes}`);

    alert(`Ingredientes de la tercera pizza:
    corteza: ${pi3.corteza}
    salsa: ${pi3.salsa}
    quesos: ${pi3.quesos}
    ingredientes: ${pi3.ingredientes}`);
alert(`Ingredientes de la cuarta pizza:
    corteza: ${pi4.corteza}
    salsa: ${pi4.salsa}
    
    quesos: ${pi4.quesos}
    ingredientes: ${pi4.ingredientes}`);

}

