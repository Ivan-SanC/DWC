
const combinacion = new Set();

for (i=1;i<=50;i++) {
    document.write(`<h1>Combinación ${i}:</h1>`)

    do {
        combinacion.add(parseInt(Math.random()*49) + 1);
    } while (combinacion.size<6);

    document.write(`<p>`)
    for(numero of combinacion) {
        document.write (`${numero} ` );
    }
    document.write(`<\p>`);

    combinacion.clear();
}