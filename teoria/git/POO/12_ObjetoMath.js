/*--------------------OBJETO MATH------------------------*/
// Se trata de un objeto global que facilita la ejecución de algunas
// operaciones matemáticas de alto nivel.

// CONSTANTES DE MATH
// Permite usar en el código valores de constantes matemáticas.

// Ejemplo de uso de la constante PI
function Circulo(r) {
    this.radio = r;
    this.calcularCircunferencia = () => (2*Math.PI*this.radio);
}
let c=new Circulo(10);
console.log(c.calcularCircunferencia()); // Salida: 62.83185307179586
console.log(Math.PI);

/* Lista completa de constantes y métodos de Math:
        https://www.w3schools.com/js/js_math.asp
*/
