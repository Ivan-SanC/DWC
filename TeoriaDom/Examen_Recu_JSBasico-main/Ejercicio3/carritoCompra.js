function CarritoCompra() {
    this.carrito = new Array();

    
    this.localizarItemCarrito = function(producto) {
        let posicionItem = -1;

        for (let i=0; i<this.carrito.length; i++) {
            if (this.carrito[i].includes(producto)) {
                posicionItem = i;
            }
        }

        return posicionItem;
    }   

    this.introducirItemCarrito =function (producto, cantidad) {
            this.carrito.push(new Array(producto, cantidad));
    }

    
    this.borrarItemCarrito = function (producto, cantidad) {
        let posicionItemCarrito = this.localizarItemCarrito(producto);

        this.carrito[posicionItemCarrito][1] -= cantidad;
        if (this.carrito[posicionItemCarrito][1] <=0){
            this.carrito.splice(posicionItemCarrito,1);
        }
    }

}

//Crear objeto
var carrito = new CarritoCompra();

//Introducir valores
carrito.introducirItemCarrito("salsa",4);
carrito.introducirItemCarrito("cola",7);
console.log(carrito);

//Localizar items
console.log(carrito.localizarItemCarrito("sal"))//mal;
console.log(carrito.localizarItemCarrito("cola"))//bien;

//Borrar item parcial
carrito.borrarItemCarrito("cola",3);
console.log(carrito);

//Borrar item completo
carrito.borrarItemCarrito("cola",4);
console.log(carrito);
