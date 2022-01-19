/* JOC PEDRA, PAPEL, TISORA! */

function numeroAleatorioEntreDosNum(valorMin, valorMax){
    return Math.floor(Math.random() * ((valorMax + 1) - valorMin)) + valorMin;
}

function DibujarResultado(arrayResultadosJugadores, jsonResultados, emojis){
    document.write(`<h1><strong>Pedra, papel, tisora!<\strong><\h1>`);
    document.write(`<div>${emojis.get(arrayResultadosJugadores[0])}${emojis.get(arrayResultadosJugadores[1])}</div>`)
    document.write(`<p>${jsonResultados[arrayResultadosJugadores[0]][arrayResultadosJugadores[1]]}<\p>`)  
}

function tirada (posicion, arrayPosiblesResultados) {
    let tiradaJugador = numeroAleatorioEntreDosNum(0,arrayPosiblesResultados.length - 1);
    if (tiradaJugador == 0) {
         return arrayPosiblesResultados[tiradaJugador] + posicion;
    } else {
        return arrayPosiblesResultados[tiradaJugador];
    }
}

function main() {
    const emojisResultados = new Map([
        ['piedraDcha', '&#129307'],
        ['piedraIzq', '&#129308'],
        ['papel', '&#129306'],
        ['tijera', '&#128406']
    ])
    
    const arrayPosiblesResultados = ['piedra', 'papel', 'tijera'];
    
    const jsonResultados = {
        'piedraIzq': {
            'piedraDcha': 'Empat!',
            'papel': 'Ha guanyat el jugador 2!',
            'tijera': 'Ha guanyat el jugador 1!'
        },
        'papel': {
            'piedraDcha': 'Ha guanyat el jugador 1!',
            'papel': 'Empat!',
            'tijera': 'Ha guanyat el jugador 2!'
        },
        'tijera': {
            'piedarDcha': 'Ha guanyat el jugador 2!',
            'papel': 'Ha guanyat el jugador 1!',
            'tijera': 'Empat'
        }
    };
    
    let arrayTiradas = new Array();

    // Resultado tirada jugador izquierda
    let resultadoJugadorIzq = tirada('Izq', arrayPosiblesResultados);
    arrayTiradas.push(resultadoJugadorIzq);

    // Resultado tirada jugador derecha
    let resultadoJugadorDcha = tirada('Dcha', arrayPosiblesResultados);
    arrayTiradas.push(resultadoJugadorDcha);

    DibujarResultado(arrayTiradas, jsonResultados, emojisResultados);
}

main();