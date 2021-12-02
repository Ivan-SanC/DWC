/* ----------RECORRER LAS PROPIEDADES DE UN OBJETO------------*/
// El bucle idóneo para recorrer las propiedades de un objeto es 
// el bucle for...in

// Ejemplo
let punto = {
    x: 19,
    y: 36,
    mostrarCoordenadas: function(){
        return `(${this.x},${this.y})`;
    }
};

for (let prop in punto){
    console.log(`${prop} tiene el valor ${punto[prop]}`);
}

/* Salida:
    x tiene el valor 19
    y tiene el valor 36
    mostrarCoordenadas tiene el valor function(){
            return `(${this.x},${this.y})`;
        }
*/

// Si no se desea mostrar las funciones haríamos lo siguiente
let punto = {
    x: 19,
    y: 36,
    mostrarCoordenadas: function(){
        return `(${this.x},${this.y})`;
    }
};

for (let prop in punto){
    if (typeof punto[prop] != 'function') { 
        console.log(`${prop} tiene el valor ${punto[prop]}`);
    }
}

/* Salida:
    x tiene el valor 19
    y tiene el valor 36
*/