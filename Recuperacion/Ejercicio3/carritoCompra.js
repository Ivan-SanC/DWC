function CarritoCompra() {
    this.carrito = new Array();
    

    function localizarItemCarrito(producto) {
        // AÑADIR CÓDIGO AQUÍ indexOf
        let posicion="";

        for(let productos of this.carrito){
            
            if(productos.indexOf(producto)!=-1){
                posicion=productos.indexOf(producto)
            }
        }
        return posicion;

    }   

    this.introducirItemCarrito =function (producto, cantidad) {
            this.carrito.push(new Array(producto, cantidad));
            
    }

    
    this.borrarItemCarrito = function (producto, cantidad) {
        let posicionItemCarrito = localizarItemCarrito(producto);

        // AÑADIR CÓDIGO AQUÍ
        if(cantidad>"1"){
            delete this.carrito[posicionItemCarrito];
        }else{
            this.carrito.splice[posicionItemCarrito]
        }
    }
    
}

