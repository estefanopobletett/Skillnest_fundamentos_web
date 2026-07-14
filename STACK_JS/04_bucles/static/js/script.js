console.log("Prueba de conexion JS...")

/* Ejemplo bucle for */

function contarHasta2() {
    for (let i = 1; i <= 10; i++) {
        alert(i);
    }
}

function cuentaRegresiva() {
    for (let i = 10; i > 0; i--) {
        alert(i);
    }
}

function lista() {
    let usuarios = ["Ana", "Luis", "María"];

    for (let i = 0; i < usuarios.length; i++) {
        alert("Bienvenido, " + usuarios[i]);
    }
}

/* Ejemplo bucle while */

function cancion() {
    let reproduciendo = true;

    while (reproduciendo) {
        alert("La canción sigue sonando...");
        // Simulación de una acción que detendría la reproducción
        reproduciendo = false;
    }
}

function datosPendientes() {
    let datosPendientes = 5;

    while (datosPendientes > 0) {
        alert("Cargando datos...");
        datosPendientes--;
    }
}

function contrasena() {
    let contraseñaCorrecta = false;
// !variables = variable es distinta a verdadero - dentro de condicion
    while (!contraseñaCorrecta) {
        let intento = prompt("Ingresa tu contraseña:");
        if (intento === "1234") {
            contraseñaCorrecta = true;
            alert("Acceso concedido.");
            break;// rompe el bucle
            alert("No se ejecuta")
        } else {
            alert("Contraseña incorrecta, intenta de nuevo.");
        }
    }
}
