
let itemsDisponibles = {1: 2000, 2: 5000, 3: 10000 }
let carrito = [];

function SeleccionarItemCarritoYCostoTotal(){
    let opcion = 0;  

    do{
        opcion = parseInt(prompt("\n --Elige los productos que desees llevar (Presione cualquier LETRA para 'salir' cuando termine de elegir) \n1) Xbox \n2) PS5 \n3) TV Samsung \n--Utiliza los numeros en pantalla para elegir"));
        carrito.push(opcion)
        

        if(((opcion > 3) || (opcion < 1))){
            alert('el numero que ingresaste es mayor a 3 o menor 1.')
        }


    }while(isNaN(opcion) == false);

    carrito.pop()
    console.log(`--Los productos que eligio son las opciones ->'[${carrito}]'--`);
    
}
SeleccionarItemCarritoYCostoTotal()

//SeleccionarItemCarritoYCostoTotal() -> //---lo comente para que no salga varias veces el prompt xd



function CostoTotal(){
    let costoProducto = 0;

    for(let i of carrito){
        for(let j in itemsDisponibles){
            if(i == j){
                costoProducto = costoProducto + itemsDisponibles[j];             
            }       
        }      
    }

    console.log(`--El Costo total es de: '${costoProducto}$'` ) 

    return costoProducto

}

let costoTotal = CostoTotal()

//----------------------------------------------------------------------------------



function CalcularCuotasMeses(){
    let resultado = 0;
    let opcion = 0;
    //let monto = 0;

    

    opcion = parseInt(prompt("--Elige a cuantas cuotas desea pagar el producto \n 1) 12 meses \n 2) 6 meses \n 3) 3 meses"));
    
    switch(opcion) {
        case 1:
          resultado  = costoTotal / 12;
          console.log(`--Sus cuotas a "12 meses" serian de -> ${resultado}$`);
          break;
        case 2:
            resultado  = costoTotal / 6;
            console.log(`--Sus cuotas a "6 meses" serian de -> ${resultado}$`);
          break;
          case 3:
            resultado  = costoTotal / 3;
            console.log(`--Sus cuotas a "3 meses" serian de -> ${resultado}$`);
            break;
        default:
            console.log(" Funcion 2: \n No se selecciono ninguna opcion de 'cuotas' ");
      }
}

CalcularCuotasMeses();



// //---------------------------------------------------------------------------------

//a las mensualidades no se les ha aplicado el descuento jeje


function CalcularEdad(){
    let edadIngresada= 0;
    //let costoTotal = CostoTotal()
    let resultado = 0;

    edadIngresada = parseInt(prompt('Ingresa su edad para verificar que seas acredor de un descuento de la tercera edad: '))

    if(edadIngresada < 60){
        console.log('NO eres Acredor a un descuento');
    }else{     
        resultado = costoTotal* 0.5
        console.log(`--Felicidades tienes un descuento del 50% el precio final es de ${resultado}$`);     
    }

}

CalcularEdad()