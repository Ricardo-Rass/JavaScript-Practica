class Cliente extends Persona{

    static contadorCliente = 0;

    constructor(fechaRegistro){
        // llamamos a la clase padre y le pedimos los argumentos de la clase padre (nombre, apellido y edad), originalmente solo se pedia la fecha registro
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