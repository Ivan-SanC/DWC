// Declaración de variables
const MAX_COMBINACIONES = 50;
const RANGO_SOLUCION = 6;
const combinacion = new Set();

for (i=1;i<=MAX_COMBINACIONES;i++) {
    document.write(`<h1>Combinación ${i}:</h1>`)

    do {
        combinacion.add(parseInt(Math.random()*49) + 1);
    } while (combinacion.size<RANGO_SOLUCION);

    document.write(`<p>`)
    for(numero of combinacion) {
        document.write (`${numero} ` );
    }
    document.write(`<\p>`);

    combinacion.clear();
}
