function Producto(codigo,nombre,precio){
this.codigo=codigo;
this.nombre=nombre;
this.precio=precio;

this.imprimeDatos = function() {
    var pintar = '';

    for (let prop in this) {
        if (typeof this[prop] != 'function') {
            pintar += ' '+prop + ' -> ' + this[prop];
        }
    }

    return pintar;
}
}


let array=[];
array.push(new Producto(01,"manzanas",2));
array.push(new Producto(02,"peras",1));
array.push(new Producto(03,"vino",15));


for (let elementos of array) {
    console.log(elementos.imprimeDatos());
}


