//const botonAumentar = document.querySelector(".btn-success");
//const botonDecrementar = document.querySelector(".btn-danger");
let DivContenedor = document.querySelector(".contenedor");
let HTMLcontador = document.querySelector(".HTMLcontador");
let contador = 0;


//div 'contenedor'
DivContenedor.addEventListener("click", (eventoBoton) => {
     if(eventoBoton.target.classList.contains('btn-success')){ //Click en 'btn-success', aumenta el contador.
        contador++;
        HTMLcontador.textContent = contador;  //el contenido del HTML toma el valor de 'contador'.   

     }else if(eventoBoton.target.classList.contains('btn-danger')){//Click en 'btn-danger', decrementa el contador.
        contador--;
        HTMLcontador.textContent = contador;   //el contenido del HTML toma el valor de 'contador'.   
    }



    eventoBoton.stopPropagation() //El método evita que el evento de abajo (el del body) afecte a nuestros botones.
                                  // evita que choquen lo botones

});

// si das un click en cualquier parte del body se ejecuta el 'console.log'
document.body.addEventListener('click', () => {
    console.log("diste click")
})



