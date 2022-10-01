class Producto{

    static contadorProducto = 0;

    constructor(nombre, descripcion, precio, stock){ 
        this.contadorProducto= ++Producto.contadorProducto;     
        this.nombre = nombre;
        this.descripcion = descripcion;       
        this.precio = precio;
        this.stock = stock;
    }
    get id_Producto(){
        return this.id_Producto;

    }

    get Nombre(){
        return this.id_Producto;
    }

    set Nombre(nombre){
        return this.id_Producto;
    }

    get GetProducto(){
        return `  \n\nid_Producto:     ${this.contadorProducto}\nNombre_Producto: ${this.nombre}\nDescripcion:     ${this.descripcion}\nPrecio:          ${this.precio}\nStock:            ${this.stock} `       
    }


}



//---------------------------------------------------------------------------------------------------------------------------
//guardamos los objetos creados en este array
//let productoObjetos = []

// productoObjetos.push(xbox)
// productoObjetos.push(ps5)
// productoObjetos.push(nintendo)

//console.log(xbox.GetProducto); 

//recorremos el array donde guardamos los objetos y buscamos la propiedad "Precio".
//guardamos los precios que recorrimos en este array
// let precios = []

// for(let i of productoObjetos){  
//     precios.push(i.precio)
// }

// suma los elementos del array "precios" y obtenemos el total de todos los productos.
// let total = precios.reduce((a, b) => a + b, 0);
// console.log(total);

//------------------------------------------------------------------------------------------------------------------------------


//no hay relacion de herencia si no de agregacion la clase producto y carrito.
class Carrito{
    constructor(){
        this.productos = []; //  <--- arreglo vacio
        //this.contadorProductosAgregados = 0;   Estamos utilizando un push en la funcion AgregarProducto() en vez de un contador por eso comentamos esta linea.
    }

    AgregarProducto(producto){
        //this.productos es el arreglo vacio que dejamos arriba.
        this.productos.push(producto)
    }


    CalcularTotal(){ // <---
        let totalx = 0;

        for(let i of this.productos){
            //con la variable "i" podemos acceder al atributo "precio" para obtener el valor del precio de los items que se encuentran en el arreglo.
            totalx += i.precio;
            
        }
        return totalx
    }


    MostrarCarrito(){
        let productoCarrito = '';  // <----
        for(let x of this.productos){
            productoCarrito = productoCarrito + x.GetProducto + ' ';
        }
        console.log(`Productos:\n ${productoCarrito} \n \nTotal = ${this.CalcularTotal()}`);
    }
}

//Producto
let xbox = new Producto('Xbox', 'Consola xbox barata', 20, 5);
let ps5 = new Producto('ps5', 'Consola ps5 barata', 10, 2);
let nintendo = new Producto('nintendo', 'Consola nintendo barata', 5, 1);
//console.log(xbox.GetProducto);


let carrito1 = new Carrito()
carrito1.AgregarProducto(xbox)
carrito1.AgregarProducto(ps5)

carrito1.MostrarCarrito();
