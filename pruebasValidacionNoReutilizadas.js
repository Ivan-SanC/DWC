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
    let patronNumeroRegistro =  /^[A-Z]{3}[0-9]{3}$/;
    let patronNombreCompleto = /^[A-ZÁÉÍÓÚÇ][a-záéíóúü]+ [A-ZÁÉÍÓÚÇ]{1,2}\.$/;
    let patronNumeroSS = /^[0-9]{9}$/;
    let patronDireccion = /^(C\/|Av\.)[A-ZÁÉÍÓÚÇ][a-záéíóúü]+ ?[a-záéíóúü ]*, [0-9]+$/;

    let patrones = new Map([
        ['numeroRegistro', patronNumeroRegistro],
        ['nombre', patronNombreCompleto],
        ['numeroSS', patronNumeroSS],
        ['direccion', patronDireccion]
    ]);
        
    return patrones.get(tipoComprobacion).test(elementoAComprobar);
}

let elemento;
let tipo;
let resultadoCorrecto;

let datos= new Map();
datos.set("numeroRegistro",["ACD123",true]).set("nombre",["Fernández J.",true])
.set("numeroSS",["010125789",true]).set("direccion",["C/Federico lorca, 50",true]);


for (let [tipo,valor] of datos) {
        console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${valor[0]}\n` + 
                `Resultado correcto: ${valor[1]} - Resultado obtenido: ${comprobarPatrones(valor[0], tipo)}`);
        console.log (`\n`);
         
}

var comprobacion = [
        ["numeroRegistro", [
                ["ACD123", true], 
                ["AC123", false],
                ["ACGTHT123", false],
                ["145265", false],
                ["ACG124w", false]
        ]],
        ["nombre", [
                ["Fernández J.", true],
                ["López Ariadna M.", false],
                ["Castillo JL.", true],
                ["Castillo JSL.", false],
                ["López M", false],
                ["Martinez", false],
                ["J.", false]

        ]],
        ["numeroSS", [
                ["010125789", true],
                ["a14568892", false],
                ["A14589789", false],
                ["0148796", false]
        ]],

        ["direccion", [
                ["C/Federico lorca, 50", true],
                ["Av.Argentina, 123", true],
                ["C/lorenzo, 3", false],
                ["Av.Gimenez losantos, 40", true],
                ["C/Almirante 45", false],
                ["C/Almirante", false],
                ["C/45, 45", false]
        ]]
];

for(let [tipo,elementos] of comprobacion){
        for(let[elemento,resultado] of elementos ){
                console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
                `Resultado correcto: ${resultado} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
        console.log (`\n`);
        }

}





// COMPROBACIÓN numeroRegistro
tipo="numeroRegistro";

elemento= "ACD123";
resultadoCorrecto = true;
console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
console.log (`\n`);

elemento="AC123";
resultadoCorrecto = false;
console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
console.log (`\n`);

elemento="ACGTHT123";
resultadoCorrecto = false;
console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
console.log (`\n`);

elemento="145265";
resultadoCorrecto = false;
console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
console.log (`\n`);

elemento="ACG124w";
resultadoCorrecto = false;
console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
console.log (`\n`);


// COMPROBACIÓN nombreCompleto
tipo="nombre";

elemento= "Fernández J.";
resultadoCorrecto = true;
console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
console.log (`\n`);

elemento="López Ariadna M.";
resultadoCorrecto = false;
console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
console.log (`\n`);

elemento="Castillo JL.";
resultadoCorrecto = true;
console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
console.log (`\n`);

elemento="Castillo JSL.";
resultadoCorrecto = false;
console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
console.log (`\n`);

elemento="López M";
resultadoCorrecto = false;
console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
console.log (`\n`);

elemento="Martinez";
resultadoCorrecto = false;
console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
console.log (`\n`);

elemento="J.";
resultadoCorrecto = false;
console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
console.log (`\n`);

// COMPROBACIÓN numeroSS
tipo="numeroSS";

elemento= "010125789";
resultadoCorrecto = true;
console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
console.log (`\n`);

elemento="a14568892";
resultadoCorrecto = false;
console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
console.log (`\n`);

elemento="A14589789";
resultadoCorrecto = false;
console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
console.log (`\n`);

elemento="0148796";
resultadoCorrecto = false;
console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
console.log (`\n`);

// COMPROBACIÓN direccion
tipo="direccion";

elemento= "C/Federico lorca, 50";
resultadoCorrecto = true;
console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
console.log (`\n`);

elemento="Av.Argentina, 123";
resultadoCorrecto = true;
console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
console.log (`\n`);

elemento="C/lorenzo, 3";
resultadoCorrecto = false;
console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
console.log (`\n`);

elemento="Av.Gimenez losantos, 40";
resultadoCorrecto = true;
console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
console.log (`\n`);

elemento="C/Almirante 45";
resultadoCorrecto = false;
console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
console.log (`\n`);

elemento="C/Almirante";
resultadoCorrecto = false;
console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
console.log (`\n`);

elemento="C/45, 45";
resultadoCorrecto = false;
console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
console.log (`\n`);