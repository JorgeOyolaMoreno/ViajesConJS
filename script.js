import { Barcelona , Roma , Paris , Londres } from "./ciudades.js"


//OBTENIENDO ELEMENTOS DEL DOM

let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById("titulo");
let subtituloElemento = document.getElementById("subtitulo");
let parrafoElemento = document.getElementById("parrafo");
let precioElemento = document.getElementById("precio");

//

enlaces.forEach(function (enlace) {
    enlace.addEventListener("click",function(){      
        
        //Remover la clase active de todos

        enlaces.forEach(function(enlace){
            enlace.classList.remove("active")
})
   

    //AGREGAR ACTIVE AL OBJETO SELECCIONADO

    this.classList.add("active");

    //TRAER LA INFORMACION DEL OBJETO SELECCIONADO

    const contenido = obtenerContenido(this.textContent);
 
    //MOSTRAR EN EL DOM

    tituloElemento.innerHTML = contenido.titulo;
    subtituloElemento.innerHTML = contenido.subtitulo;
    parrafoElemento.innerHTML = contenido.parrafo;
    precioElemento.innerHTML = contenido.precio;
} )
})


//TRAER LA INFO DESDE CIUDADES.JS
function obtenerContenido(enlace){
    const contenido={
        "Barcelona":Barcelona,
        "Roma":Roma,
        "Paris":Paris,
        "Londres":Londres
    }

    return contenido[enlace];

}