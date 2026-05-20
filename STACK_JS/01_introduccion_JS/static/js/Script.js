function cambiarTexto() {
    let titulo = "Hola, Bienvenido";
    if (document.getElementById("titulo").innerText == titulo) {
        document.getElementById("titulo").innerText = "Tung tung sahur";
        document.getElementById("titulo").style.color = "red"
    } else {
        document.getElementById("titulo").innerText = titulo;
        document.getElementById("titulo").style.color = "black"
    }
}

let contraseñaCorrecta = false;

while (!contraseñaCorrecta) {
    let intento = prompt("Ingresa tu contraseña:");
    if (intento === "sonion") {
        contraseñaCorrecta = true;
        console.log("Acceso concedido.");
    } else {
        console.log("Contraseña incorrecta, intenta de nuevo.");
    }
}

let usuarios = ["Ana", "Luis", "María"];

for (let i = 0; i < usuarios.length; i++) {
    console.log("Bienvenido, " + usuarios[i]);
}