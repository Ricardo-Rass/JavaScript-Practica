// se juntaron todas las clases en un solo archivo 'solo por esta ocasion' ya que no hay un servidor

class Persona{

    // Atributo Estatico
    static contadorPersonas = 0;

    // Constructor con atributos

    constructor(/*idPersona*/ nombre, apellido, edad){  // en vez de utilizar 'idPersona' usaremos la variable contadorPersonas
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

     // solo leer el valor pero no modificarlo
    get id_Persona(){
        return this._idPersona;
    }

    //------------------------
    get nombre(){
        return this._nombre;
    }

    // set es para modificar el valor
    set nombre(nombre){
        this._nombre = nombre
    }
    //------------------------

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        return this._apellido = apellido;
    }

    //------------------------

    get edad(){
        return this._edad;
    }

    set edad(edad){
        return this._edad = edad;
    }

    //-------------------------

    toString(){
        return this.id_Persona + ' ' + this._nombre + ' ' + this._apellido + ' ' + this._edad;
    }


}


class Empleado extends Persona{

    static contadorEmpleados = 0;

    constructor(/*idEmpleado */nombre, apellido, edad, sueldo){
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

class Cliente extends Persona{

    static contadorCliente = 0;

    constructor(nombre, apellido, edad, fechaRegistro){
        // llamamos a la clase padre y le pedimos los argumentos de la clase padre (nombre, apellido y edad) originalmente solo se pedia la fechaRegistro
        super(nombre, apellido, edad);
        // ++ es para hacer que el contador vaya sumandose
        this._idCliente = ++Cliente.contadorCliente;
        this._fechaRegistro = fechaRegistro;

    }

    get idCliente(){
        return this._idCliente;       
    }

    get fechaRegistro(){
        return this._fechaRegistro;       
    }

    set fechaRegistro(fechaRegistro){
        return this._fechaRegistro = fechaRegistro;
    }

    toString(){
        // super a la clase padre
        return super.toString() + ' ' + this._idCliente + ' ' + this._fechaRegistro;
    }

}

let persona1 = new Persona('Ricardo','Saavedra', 22);
//console.log(persona1); // Output -> {_idPersona: 1, _nombre: 'Ricardo', _apellido: 'Saavedra', _edad: 22}
//toString es la funcion que creamos para imprimir
console.log(persona1.toString()); // Output -> 1 Ricardo Saavedra 22



let empleado1 = new Empleado('Jose', 'Guzman', 30, 15400);
console.log(empleado1.toString());


// new date nos devuelve la fecha actual
let cliente1 = new Cliente('Ana', 'Lopez', 40, new Date());
let cliente2 = new Cliente('carlos', 'Lopez', 40, new Date());
console.log(cliente1.toString());
console.log(cliente2.toString());