//GET -> Enlaza la propiedad de un objeto con una función que será llamada cuando la propiedad es buscada.
//SET -> permite almacenar valores únicos de cualquier tipo, ya sea valores primitivos o referencias a objetos.
// esta es la clase padre 

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
