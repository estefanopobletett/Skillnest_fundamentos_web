
//Seleccion de titulo con querySelector
let title = document.querySelector("#title");
console.log(title); // <h1 id="title">¡Hola, mundo!</h1>
console.log(`El contenido del titulo es: ${title.textContent}`)//conenido de la etiqueta

//Seleccionar parrafo con la etiqueta
let parrafo = document.querySelector("p");
console.log(parrafo); 

let logoImg = document.querySelector(".nav img");
console.log(logoImg); // <img src="logo.png" alt="logo">

let parrafoo = document.querySelector(".texto");
console.log(parrafoo.textContent); // "Este es el primer párrafo."

//elemento inexistente
let boton = document.querySelector("#boton-inexistente");
console.log(boton); // null

if (boton !== null) {
   boton.textContent = "Nuevo Texto";
} else {
   console.log("El botón no existe.");
}

//tarea:
/*
Crearunboton y aplicar condicion al igual que ejemplo..
-debe cambiar su texto al momento de hacerle click
Debe activar su hover js cambiando el color de fondo
*/

let botonColor = document.querySelector(".botonsin");
botonColor.addEventListener("mouseover", function () {
    botonColor.style.backgroundColor = "blue";
        botonColor.style.color = "black";

});

botonColor.addEventListener("mouseout", function () {
    botonColor.style.backgroundColor = "white";
            botonColor.style.color = "black";
});

botonColor.addEventListener("click", function () {
    this.innerText = `apretaste el boton`;
    botonColor.style.backgroundColor = "blue";
        botonColor.style.color = "black";

});
