// Seleccionamos el botón por su id
let botonSesion = document.getElementById("sesion");

// guardando referencia

// Agregamos un evento 'click' al botón
botonSesion.addEventListener("click", function () {
    let textoBotonSesion = botonSesion.textContent;//guardando texto del boton 
    if (textoBotonSesion === "Iniciar sesión") {
        this.innerText = "Cerrar sesión";
    } else {
        this.innerText = "Iniciar sesión";
    }
    // Cambia el texto del botón usando `this`
});//innerText: texto de la etiqueta

let botonMegusta = document.getElementById("megusta")
let megustas = 12

botonMegusta.addEventListener ("click", function(){
    megustas++
    this.innerText = `${megustas} Me gustas`;
})

let botonMmegusta = document.getElementById("mmegusta")
let mmegustas = 30

botonMmegusta.addEventListener ("click", function(){
    mmegustas++
    this.innerText = `${mmegustas} Me gustas`;
})


let perfil = document.getElementById("perfil")


perfil.addEventListener ("click", function(){
    alert("Has entrado a tu perfil");
})
