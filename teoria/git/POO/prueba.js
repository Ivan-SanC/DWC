var clase1 = {
    nombre: 'Belen',
    apellidos: 'Laserna Belenguer',
    nombreCompleto: function() {
        return '${this.nombre} ${this.apellidos}';
    }
}

console.log(clase1);

clase1.direccion = 'C/alegria, 16';
console.log(clase1);

