const miBoton = document.querySelector("#miBoton");
function decirColor(){
    alert("se elimino el color ");
    
    miBoton.removeEventListener("click", decirColor);
}

miBoton.addEventListener("click", decirColor);