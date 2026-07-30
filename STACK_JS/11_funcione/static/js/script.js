function saludar(/*parametros */) {
    alert("¡Hola, bienvenido!");
}



function saludar(nombre) {
    alert("hola," + nombre + "!");

    saludar("Ariel");
    saludar("danquesillo");
}

function encontrarMayor() {
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
    alert(`el numero máximo entre ${numero1} y ${numero2} es ${maximo}`);


}



function sumar(a, b, c) {
    return a + b - c;
} function mostrarResultado() {
    let num1 = parseInt(prompt("ingrese primer numero"));
    let num2 = parseInt(prompt("ingrese segundo numero"));
    let num3 = parseInt(prompt("ingrese tercer numero"));
    let resultado = sumar(num1, num2, num3);
    alert(`La operación de ${num1} + ${num2} - ${num3} = ${resultado}`);
}



/* Crear una funcion reciba un parametro
y permita a través de un bucle contar hasta este.

EJ: Se recibe el numero 5 y muestra: 1 - 2 - 3 - 4
*/

function contar(limite) {
    let numeros = [];


    for (let i = 1; i <= limite; i++) {
        numeros.push(i);
    }

    return numeros.join(" - ");
}

function mostrarConteo() {
    let num = parseInt(prompt("ingrese un numero"));
    if(num <= 100){
    let resultado = contar(num);
    alert(`El conteo es: ${resultado}`);
}else{
    alert("Ingrese un valor menor o igual a 100")
}
}