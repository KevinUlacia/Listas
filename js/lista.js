let boton = document.body.querySelector("#sumar")
console.log(boton)

function sumarTarea(){
    console.log("click")
    let fecha = document.body.querySelector("#fecha")
    let tarea = document.body.querySelector("#tarea")
    if (fecha.value == "" || tarea.value == ""){
        alert("completar")
        return
    }
    let nuevoElemento = document.createElement("li")
    let nuevoParrafo1 = document.createElement("p")
    let nuevoParrafo2 = document.createElement("p")
    let check = document.createElement("input")
    let borrar = document.createElement("button")
    borrar.innerHTML = "Borrar"
    borrar.onclick = eliminarTarea
    check.setAttribute("type","checkbox")
    check.onchange = cambiarElemento
    nuevoParrafo1.innerHTML = fecha.value
    nuevoParrafo2.innerHTML = tarea.value
    nuevoElemento.appendChild(nuevoParrafo1)
    nuevoElemento.appendChild(nuevoParrafo2)
    nuevoElemento.appendChild(check)
    nuevoElemento.appendChild(borrar)
    console.log(nuevoElemento)
    let lista = document.body.querySelector("#ulista")
    lista.appendChild(nuevoElemento)
}


function eliminarTarea(evento){ 
    let elementoEliminar = evento.target.parentNode
    let lista = elementoEliminar.parentNode
    lista.removeChild(elementoEliminar)
}

function cambiarElemento(evento){
    let elementoCambiar = evento.target.parentNode
    if (evento.target.checked == true){
        elementoCambiar.classList.add("chequeado")
    }
    else {
        elementoCambiar.classList.remove("chequeado")
    }
}

