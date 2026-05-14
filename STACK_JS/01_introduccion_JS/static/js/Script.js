function cambiarTexto() {
    let titulo = "Hola, Bienvenido";
    if   (document.getElementById("titulo").innerText == titulo){
        document.getElementById("titulo").innerText = "Tung tung sahur";
        document.getElementById("titulo").style.color= "red"
    } else{
        document.getElementById("titulo").innerText = titulo;
        document.getElementById("titulo").style.color= "black"
    }
}