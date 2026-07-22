
function pasta() {
    let compras = [5000, 2300, 12000, 4500, 3000];
    let alumnos = ["Ana", "Pedro", "María", "José"];
    let datos = ["Carlos", 18, true];
    let frutas = ["Manzana", "Pera", "Kiwi", "Sandía"];
    //desagfio formar una oración

    let menasaje = `El alumno ${alumnos[1]} de ${datos[1]} años
\n ha comprado una ${frutas[3]} de ${compras[1]} pesos`;
    alert(menasaje);

}

function recorrer() {
    let notas = [6.2, 5.8, 4.1, 7.0, 3.2, 6.5];

    for (let i = 0; i < notas.length; i++) {

        alert(`Mostrando nota ${i + 1} de ${notas.length} : ${notas[i]}`);
    }
}


function sumar() {
    let ventas = [10000, 5000, 12000, 8000];

    let total = 0;

    for (let i = 0; i < ventas.length; i++) {

        total += ventas[i];

    }

    alert(`El resultao final es: ${total}`);
}


function promedio() {
    let notas = [5.8, 6.2, 4.9, 6.5];

    let suma = 0;

    for (let i = 0; i < notas.length; i++) {

        suma += notas[i];

    }

    alert(`La suma acumulada es: ${suma}`)

    let promedio = suma / notas.length;

    alert(`El promedio es de las notas: ${notas.join(" - ")}
    \n promedio: ${promedio.toFixed(1)}`);
}



function condiciones() {
    let edades = [12, 15, 18, 20, 25];
    let mayores = [];
    for (let i = 0; i < edades.length; i++) {

        if (edades[i] >= 18) {

            mayores.push(edades[i]);

        }
    }
    alert(`De la lista de edades: ${edades.join(` / `)}
\nLos mayores son: ${mayores.join(` / `)}`)
}


function mayorMenor() {
    let numeros = [10, 35, 7, 90, 22, 90, 2];

    let menor = numeros[0];
    let mayor = numeros[0];

    for (let i = 1; i < numeros.length; i++) {

        if (numeros[i] < menor) {

            menor = numeros[i];

        } else if (numeros[i] > mayor) {
            mayor = numeros[i];
        } else {
            console.log(`Valor que no afecta: ${numeros[i]}`)
        }

    }

    alert(`De los numeros: ${numeros.join(" / ")}
\n El menor es: ${menor}
\n El mayor es: ${mayor}`);
}


function calcularVentas() {
    //eliminar el ultimo valor y mostrarlo
    //añadir dos valores nuevos con .push (prompt)
    let ventas = [5000, 8000, 12000, 3000, 10000, 9000, 4000];
    let eliminado = []
    let total = 0;
    let mayor = ventas[0];
    let mayores = [];
    let valor1 = parseInt(prompt("Ingrese  valor 1"))
    let valor2 = parseInt(prompt("Ingrese  valor 2"))
    eliminado.unshift(ventas[ventas.length - 1])
    ventas.pop();


    ventas.push(valor1, valor2)


    for (let i = 0; i < ventas.length; i++) {

        total += ventas[i];
        if (ventas[i] >= 10000) {
            mayores.push(ventas[i])
        }
        if (ventas[i] > mayor) {

            mayor = ventas[i];

        }

    }


    let promedio = (total / ventas.length);

    alert(`Las ventas fueron: ${ventas.join(" / ")}
\n El total es: ${total}
\n La venta mayor fue: ${mayor}
\n Promedio: ${promedio.toFixed(0)}
\n Mayores a $10.000: ${mayores.join(" / ")}
\n Conteo de mayores: ${mayores.length}
\n\n La venta eliminada fue: ${eliminado} `)
}



//----------------------------------////////////////////////////////////////////////////////}



function ejercicio1() {
    let edades = [15, 18, 20, 14, 25];
    let ultima = edades[edades.length - 1]
    alert(`Primea edad: ${edades[0]}
        \n Ultima edad: ${ultima}
        \n edades totales: ${edades.length}`)
}


function ejercicio2() {
    let nombres = ["Goatefano", "Ariel", "Ratalan", "Fraudebenito", "Chico colque"]
    for (let i = 0; i < nombres.length; i++) {

        alert(nombres[i]);

    }
}


function ejercicio3() {
    let notas = [3.4, 6.7, 4.9, 6.5];

    let suma = 0;

    for (let i = 0; i < notas.length; i++) {

        suma += notas[i];

    }

    let promedio = suma / notas.length;

    alert(`Promedio: ${promedio.toFixed(1)}`);
}


function ejercicio4() {
    let temp = [18, 20, 15, 22, 19, 25, 17]
    for (let i = 0; i < temp.length; i++) {

        if (temp[i] >= 21) {

            alert(`Temperatura: ${temp[i]}°`);

        }

    }
}

function ejercicio5() {
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let impares = 0;
    let pares = 0

    for (let i = 0; i < numeros.length; i++) {

        if (numeros[i] % 2 >= 1) {

            impares++;

        } else if (numeros[i] % 2 == 0) {
            pares++;
        }

    }

    alert(`numeros pares totales: ${pares}
    \n numeros impares totales: ${impares}`);
}


function ejercicio6() {
    let ventas = [5000, 12000, 3000, 4500, 7000]

    let total = 0;
    let mayor = ventas[0];
    let menor = ventas[1]

    for (let i = 0; i < ventas.length; i++) {

        total += ventas[i];

        if (ventas[i] > mayor) {

            mayor = ventas[i];

        } else if (ventas[i] < menor) {

            menor = ventas[i]
        }

    }

    alert(`Venta mayor: ${mayor}
    \n Venta menor: ${menor}
    \n Total: ${total}`)
}

function ejercicio7() {
    let nombres = ["Ana", "Pedro", "María", "Juan", "Camila", "Tomás"]

    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i].length > 4) {
            alert(`${nombres[i]}`)
        }
    }
}

function ejercicio8() {
    let nums = [1, 2, 3, 4, 5, 6, 8]

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 3 == 0) {
            alert(`${nums[i]}`)
        }
    }
}

function ejercicio9() {
    let edades = [15, 16, 17, 18, 17, 16, 19, 20]
    let mayores = 0
    let menores = 0
    for (let i = 0; i < edades.length; i++) {

        if (edades[i] >= 18) {

            mayores++;

        } else if (edades[i] < 18) {
            menores++;
        }

    }

    alert(`numeros de mayores de edad totales: ${mayores}
    \n numeros de menores de edad totales: ${menores}`);
}