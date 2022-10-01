// extends sirve para hacer referencia a la clase Persona
//esta es la clase hija

class Empleado extends Persona{

    static contadorEmpleados = 0;

    constructor(/*idEmpleado */ nombre, apellido, edad, sueldo){
        // llamamos a la clase padre y le pedimos los argumentos de la clase padre (nombre, apellido y edad), originalmente solo se pedia el sueldo
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    // solo leer / recuperar el valor pero no modificarlo
    get idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }
    // set es para modificar el valor
    set sueldo(sueldo){
        return this._sueldo = sueldo;
    }

    // reutilizamos el codigo de 'toString' de la clase padre (clase persona)
    toString(){
        //nos regresa toda la informacion de la clase padre
        return super.toString() + ' ' + this._idEmpleado + ' ' + this._sueldo;
    }
}