function saludar(/*parametros */) {
    alert("¡Hola, bienvenido!");
}



function saludar(nombre) {
    alert("hola," + nombre + "!");

    saludar("Ariel");
    saludar("danquesillo");
}


function encontrarMaximo(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
let numero1 = 10;
let numero2 = 7;
let maximo = encontrarMaximo(numero1, numero2);
console.log("El número mayor entre", numero1, "y", numero2, "es:", maximo);


