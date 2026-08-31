const foto = document.getElementById("foto")
const parrafo = document.getElementById("parrafo")


foto.addEventListener("mouseover", function(){
foto.src = "static/images/noche-estrellada-sobre-el-ródano.png"
parrafo.innerText = "Noche estrellada sobre el ródano, Vicent van Gogh (1889) "
})

foto.addEventListener("mouseout", function(){
foto.src = "static/images/campo-de-trigo-con-cipreses.png"
parrafo.innerText = "Campo de trigo con cipreses, Vicent van Gogh (1889)"
})