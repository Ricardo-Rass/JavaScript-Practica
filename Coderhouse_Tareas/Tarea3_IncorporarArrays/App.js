class RegistroPersona{

    static contadorPersona = 0;

    constructor(nombre, edad, email, direccionEnvio){   
        this.idCliente = ++RegistroPersona.contadorPersona;
        this.nombre = nombre;
        this.edad = parseInt(edad) ;
        this.email = email;
        this.direccionEnvio = direccionEnvio;
    }

    toString(){
        return `\n ${this.idCliente}, ${this.nombre}, ${this.edad}, ${this.email}, ${this.direccionEnvio}.`
    }

}

const arrayNombres = [];


arrayNombres.push(new RegistroPersona('Ricardo', 21, 'rad@hotmail.com', 'wisconsin 312 colonia chapultepec'));
arrayNombres.push(new RegistroPersona('Jose', 21, 'Guriz@hotmail.com', 'Benito 312 colonia Rosa'));

//console.log(arrayNombres);

for(let i in arrayNombres){
    console.log(arrayNombres.toString());
}
