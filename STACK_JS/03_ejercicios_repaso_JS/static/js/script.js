function ejercicio1() {
    let Nombre = prompt("Ingrese su nombre ")
    let peso = parseInt(prompt("Ingrese el peso del paquete en kilogramos"))
    if (peso > 10) {
        alert(`${Nombre}, el paquete pesa ${peso}kg, por lo cual el valor
            \n de despacho será de $5.000 `)
    } else if (peso <= 10 && peso > 5) {
        alert(`${Nombre}, el paquete pesa ${peso}kg, por lo cual el valor
            \n de despacho será de $3.000`)
    } else if (peso <= 5 && peso > 2) {
        alert(`${Nombre}, el paquete pesa ${peso}kg, por lo cual el valor
            \n de despacho será de $2.000`)
    } else {
        alert(`Su paquete debe pesar 2 kg o mas`)
    }
}

function ejercicio2() {
    let usuario = prompt("Ingrese su tipo de usuario (Estudiante o Profesor)").toLowerCase();
    let libros = parseInt(prompt("Ingrese la cantidad de libros"))
    if (usuario === "estudiante" && libros <= 4) {
        alert(`${usuario}, su prestamo de ${libros} libros es valido`)
    } else if (usuario === "estudiante" && libros >= 5) {
        alert(`${usuario}, su prestamo de ${libros} libros es invalido, supera el limite de 4 libros`)
    } else if (usuario === "profesor" && libros <= 6) {
        alert(`${usuario}, su prestamo de ${libros} libros es valido`)
    } else if (usuario === "profesor" && libros >= 7) {
        alert(`${usuario}, su prestamo de ${libros} libros es invalido, supera el limite de 6 libros`)
    }
}

function ejercicio3() {
    let nombre = prompt("Nombre del participante: ")
    let edad = parseInt(prompt("Edad: "))
    if (edad >= 18 && edad >= 16) {
        alert(`El participante ${nombre} tiene ${edad} años.
            \n Va en el grupo 1`)
    } else if (edad <= 15 && edad >= 13) {
        alert(`El participante ${nombre} tiene ${edad} años.
            \n Va en el grupo 2`)
    } else if (edad <= 12 && edad >= 10) {
        alert(`El participante ${nombre} tiene ${edad} años.
            \n Va en el grupo 3`)
    } else if (edad <= 9 && edad >= 7) {
        alert(`El participante ${nombre} tiene ${edad} años.
            \n Va en el grupo 4`)
    }
}

function ejercicio4() {
    let nombre = prompt("Ingrese el nombre")
    let años = parseInt(prompt("ingrese los años de servicios"))
    if (años >= 30 && años >= 20) {
        alert(`El trabajador ${nombre} tiene ${años} años de servicio.
            \n Recibe bono de $200000`)
    } else if (años <= 19 && años >= 10) {
        alert(`El trabajador ${nombre} tiene ${años} años de servicio.
            \n Recibe bono de $150000`)
    } else if (años <= 9 && años >= 2) {
        alert(`El trabajador ${nombre} tiene ${años} años de servicio.
            \n Recibe bono de $100000`)
    } else {
        alert(`El trabajador ${nombre} tiene ${años} años de servicio.
            \n no recibe bono`)
    }
}

function ejercicio5() {
    let nombre = prompt("Ingrese el nombre del conductor")
    let vel = parseInt(prompt("ingrese la velocidad registrada (KM/h)"))
    if (vel <= 150 && vel >= 100) {
        alert(`El conductor ${nombre} tiene una velocidad registrada de  ${vel}KM/h.
            \n Una velocidad rapida`)
    } else if (vel <= 99 && vel >= 50) {
        alert(`El conductor ${nombre} tiene una velocidad registrada de  ${vel}KM/h.
            \n Una velocidad media`)
    } else if (vel <= 49 && vel >= 0) {
        alert(`El conductor ${nombre} tiene una velocidad registrada de  ${vel}KM/h.
            \n Una velocidad lenta`)
    } else if ( vel >= 151) {
        alert(`El conductor ${nombre} tiene una velocidad registrada de  ${vel}KM/h.
            \n Ha exedido el limite`)
    } else{
        alert(`Introduzca valores validos`)
    }
}