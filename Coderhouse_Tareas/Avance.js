function SeleccionarItemCarritoYCostoTotal(){
    let opcion = 0;
    let costoProducto = 0;
    let itemsDisponibles = {1: 2000, 2: 5000, 3: 10000 }
    let carrito = [];

    do{
        opcion = parseInt(prompt("\n --Elige los productos que desees llevar (Presione cualquier LETRA para 'salir' cuando termine de elegir) \n1) Xbox \n2) PS5 \n3) TV Samsung \n--Utiliza los numeros en pantalla para elegir"));
        carrito.push(opcion)
        

        if(((opcion > 3) || (opcion < 1))){
            alert('el numero que ingresaste es mayor a 3 o menor 1.')
        }


    }while(isNaN(opcion) == false);

    carrito.pop()
    console.log(`--los productos que eligio son las opciones ->'[${carrito}]'--`);
    

    for(let i of carrito){
        for(let j in itemsDisponibles){
            if(i == j){
                costoProducto = costoProducto + itemsDisponibles[j];             
            }       
        }      
    }
    console.log(`El Costo total es de: '${costoProducto}$'` )  
    return costoProducto
}

SeleccionarItemCarritoYCostoTotal()


//----------------------------------------------------------------------------------

function CalcularCuotasMeses(monto){
    let resultado = 0;
    let opcion = 0;

    opcion = parseInt(prompt("Funcion 2: \n --Elige a cuantas cuotas desea pagar el producto \n 1) 12 meses \n 2) 6 meses \n 3) 3 meses"));
    
    switch(opcion) {
        case 1:
          resultado  = monto / 12;
          console.log(`Funcion 2: \n Sus cuotas a "12 meses" serian de -> ${resultado}`);
          break;
        case 2:
            resultado  = monto / 6;
            console.log(`Funcion 2: \n Sus cuotas a "6 meses" serian de -> ${resultado}`);
          break;
          case 3:
            resultado  = monto / 3;
            console.log(`Funcion 2: \n Sus cuotas a "3 meses" serian de -> ${resultado}`);
            break;
        default:
            console.log(" Funcion 2: \n No se selecciono ninguna opcion de 'cuotas' ");
      }
}

CalcularCuotasMeses(2000);



//---------------------------------------------------------------------------------




function CalcularEdadPromedio(edades){
    let suma = 0;

    for(let i of edades){
        suma = suma + i 
    }

    let resultado = suma/edades.length
    return `Funcion 1: \n la edad promedio es de -> ${resultado}  `
 

}

console.log(CalcularEdadPromedio([1,5,10]))

