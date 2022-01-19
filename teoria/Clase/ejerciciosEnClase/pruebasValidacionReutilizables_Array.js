/**
 * Función que comprueba si se cumple un patrón de los que tiene almacenados. Es necesario indicar que patrón vamos a 
 * escoger para realizar la comprobación con las siguientes etiquetas: 
 *      1. Si es un número de registro: numeroRegistro
 *      2. Si es un nombre: nombre
 *      3. Si es un número de la seguridad social: numeroSS
 *      4. Si es una dirección: direccion
 * @param {*} elementoAComprobar - Elemento que debe cumplir el patrón que se indique.
 * @param {String} tipoComprobacion - Indica que tipo de elemento se quiere comprobar: numeroRegistro, nombre, numeroSS o direccion
 * @returns {boolean} - Devuelve true si se cumple el patrón y false si no se cumple.
 */
 
 comprobarPatrones = function (elementoAComprobar, tipoComprobacion) {
    let patronNumeroRegistro = /^[0-9]{0,6}$/;
    let patronNombreCompleto = /^[A-ZÁÉÍÓÚÇ][a-záéíóúü]+ [A-ZÁÉÍÓÚÇ]{1,2}\.$/;
    let patronNumeroSS = /^[0-9]{1,9}$/;
    let patronDireccion = /^(C\/|Av\.)[A-ZÁÉÍÓÚÇ][a-záéíóúü]+ ?[a-záéíóúü ]*, [0-9]+$/;

    let patrones = new Map([
        ['numeroRegistro', patronNumeroRegistro],
        ['nombre', patronNombreCompleto],
        ['numeroSS', patronNumeroSS],
        ['direccion', patronDireccion]
    ]);
        
    return patrones.get(tipoComprobacion).test(elementoAComprobar);
}

/* Array de arrays con patrón:
    listaComprobaciones[i] = ["elementoAComprobar", "tipoComprobacion", "resultadoCorrecto"]
*/
let listaComprobaciones = [
    ["ACD123", "numeroRegistro", true],
    ["AC123", "numeroRegistro", false],
    ["ACGTHT123", "numeroRegistro", false],
    ["145265", "numeroRegistro", false],
    ["ACG124w", "numeroRegistro", false],
    ["Fernández J.", "nombre", true],
    ["López Ariadna M.", "nombre", false],
    ["Castillo JL.", "nombre", true],
    ["Castillo JSL.", "nombre", false],
    ["López M", "nombre", false],
    ["Martinez", "nombre", false],
    ["J.", "nombre", false],
    ["010125789", "numeroSS", true],
    ["a14568892", "numeroSS", false],
    ["A14589789", "numeroSS", false],
    ["0148796", "numeroSS", false],
    ["C/Federico lorca, 50", "direccion", true],
    ["Av.Argentina, 123", "direccion", true],
    ["C/lorenzo, 3", "direccion", false],
    ["Av.Gimenez Losantos, 40", "direccion", true],
    ["C/Almirante 45", "direccion", false],
    ["C/Almirante", "direccion", false],
    ["C/45, 45", "direccion", false],
    ["Tocuato luca, 45", "direccion", false],
]

let elemento;
let tipo;
let resultadoCorrecto;

for (let i = 0; i<listaComprobaciones.length; i++) {
        elemento = listaComprobaciones[i][0];
        tipo = listaComprobaciones[i][1];
        resultadoCorrecto = listaComprobaciones[i][2];
        console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
        console.log (`\n`);
}