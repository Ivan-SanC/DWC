/* SORTEO DE BOLAS */

function numeroAleatorioEntreDosNum(valorMin, valorMax){
    return Math.floor(Math.random() * ((valorMax + 1) - valorMin)) + valorMin;
}

function sorteo(limiteSorteo, valorMin, valorMax) {
    let bolaObtenida;
    let arrayBolasObtenidas = new Array();
    let setBolasObtenidas = new Set();

    for (let i = 0; i<limiteSorteo; i++) {
        bolaObtenida = numeroAleatorioEntreDosNum(valorMin, valorMax);
        arrayBolasObtenidas.push(bolaObtenida);
        setBolasObtenidas.add(bolaObtenida);
    }
    
    return [arrayBolasObtenidas, setBolasObtenidas]
}

function DibujarNumerosSorteo(numerosGanadores, numerosDistintos, formatoNumerosADibujar) {
    document.write(`<h1>ELIMINA VALORES REPETIDOS</h1>`);
    document.write(`<p>Actualitza la pàgina per a mostrar un nou grup de valor...<\p>`);
    document.write(`<p><strong>Entre aquestes ${numerosGanadores.length} bolles...<\strong><\p>`);
    document.write(`<h1>`);
    for (let numero of numerosGanadores) {
        document.write(`${formatoNumerosADibujar[numero]}`);
    }
    document.write(`<\h1>`);

    document.write(`<p><strong>...hi ha ${numerosDistintos.size} distintes<\strong><\p>`);
    document.write(`<h1>`);
    for (let numero of numerosDistintos) {
        document.write(`${formatoNumerosADibujar[numero]}`);
    }
    document.write(`<\h1>`);
}

function main() {
    let limiteMinBolas = 5;
    let limiteMaxBolas = 15;
    let valorMinBola = 1;
    let valorMaxBola = 10;
    let arrayBolasDibujadas = ['\u24FF','\u278A','\u278B','\u278C','\u278D', 
        '\u278E', '\u278F', '\u2790', '\u2791', '\u2792', '\u2793'];

    // Obtener el número total de bolas 
    let numeroTotalBolas = numeroAleatorioEntreDosNum(limiteMinBolas, limiteMaxBolas);

    // Obtener el listado de bolas ganadoras y bolas distintas
    // let [bolasGanadoras, bolasDistintas] = [...sorteo(numeroTotalBolas, valorMinBola, valorMaxBola)];
    let resultado = sorteo(numeroTotalBolas, valorMinBola, valorMaxBola)
    let bolasGanadoras = resultado[0];
    let bolasDistintas = resultado[1];

    // Dibujar el resultado
    DibujarNumerosSorteo(bolasGanadoras, bolasDistintas, arrayBolasDibujadas);
}

main();

