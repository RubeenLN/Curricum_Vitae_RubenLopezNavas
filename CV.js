var boton1 = document.getElementById("boton1")
var boton2 = document.getElementById("boton2")

boton1.addEventListener("focus", cambiar)

function cambiar() {
    boton1.style.backgroundColor="gray"

}
boton1.addEventListener("focusout", quitar);

function quitar(){
    boton1.style.backgroundColor = "white"
}


boton2.addEventListener("focus", cambiar1)

function cambiar1() {
    boton2.style.backgroundColor="gray"

}
boton2.addEventListener("focusout", quitar1);

function quitar1(){
    boton2.style.backgroundColor = "white"
}
