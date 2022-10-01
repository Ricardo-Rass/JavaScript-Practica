
function CalcularEdadPromedio(edades){
    let suma = 0;

    for(let i of edades){
        suma = suma + i 
    }

    let resultado = suma/edades.length
    return `Funcion 1: \n la edad promedio es de -> ${resultado}  `
 

}

console.log(CalcularEdadPromedio([1,5,10]))


//------------------------------------------------------------------------------------


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
