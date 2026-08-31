const boton = document.getElementById("miBoton");

boton.addEventListener("mouseover", function () {
    console.log("El ratón está sobre el botón");
    boton.style.backgroundColor = "blue";
});

boton.addEventListener("mouseout", function () {
    console.log("El ratón ha salido del botón");
    boton.style.backgroundColor = "#FF7EB3";
});


//Tarea

/* 
Crear dos botones con evento onmouseover y onmouseout

-Cambia el texto de un boton
-Cambiar el fondo y el color de texto texto del segundo boton
*/

const botonText = document.getElementById("miBotonText");

botonText.addEventListener("mouseover", function () {
    this.innerText = `El mouse está sobre el boton`;
});

botonText.addEventListener("mouseout", function () {
    this.innerText = `Pasa el cursor sobre mí`;
});

const botonColor = document.getElementById("miBotonColor");

botonColor.addEventListener("mouseover", function () {
    this.innerText = `El mouse está sobre el boton`;
    botonColor.style.backgroundColor = "blue";
        botonColor.style.color = "black";

});

botonColor.addEventListener("mouseout", function () {
    this.innerText = `Pasa el cursor sobre mí`;
    botonColor.style.backgroundColor = "#FF7EB3";
            botonColor.style.color = "white";
});