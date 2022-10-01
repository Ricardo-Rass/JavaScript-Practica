// let a = parseInt(prompt('ingresa el primer numero: '))
// let b = parseInt(prompt('ingresa el segundo numero: '))
// let target = parseInt(prompt('ingresa el Target: '))


// Do While
function TareaCiclos_Dowhile(a, b, target){    
    do{
        if((resultado = a + b) == target){
            console.log(`El resultado: ${resultado} es igual al target: ${target}`)
            break;
        }else if(resultado != target){
            console.log(`El resultado: ${resultado} es diferente al target: ${target}`)
            break;
        }
        
    }while(resultado <= target);
}

TareaCiclos_Dowhile(2, 3, 4)


// For, tabla de multiplicar

function TareaCiclos_for(a){
    for(var b = 1; b<= 10; b++){
        resultado = a * b;
        console.log(`${a} X ${b} = ${resultado}`);

    }
}

TareaCiclos_for(7);

