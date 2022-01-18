let bola;
let minBolas=5;
let maxBolas=15;
let numMin=10102;
let numMax=10111;
let array=[];
let lista=new Set();

function valorRandom(min,max){
let random=parseInt(Math.random()*(max+1-min)+min);
return random;
}

function generarBolas(minBolas, maxBolas,numMin,numMax){
        let rango=valorRandom(minBolas,maxBolas);

        for(i=1;i<=rango;i++){
        let bola=valorRandom(numMin,numMax);
        array.push(`&#${bola}`);
        lista.add(`&#${bola}`);
        }
}

function mostrarBolas(){
    document.write("<h1>Elimina valors repetits</h1>");
    document.write("<p>Actualiza la página per a mostar un nou grup de valors...");
    document.write(`<p><strong>Entre aquestes ${array.length}...</strong></p>`);
    document.write("<h1>");
    for(let i of array){
        document.write(i);
    }
    document.write("</h1>");
    document.write(`<p><strong>...hi ha ${lista.size} bolles distintes</strong></p>`);
    document.write("<h1>");
    for(let m of lista){
        document.write(m);
    }
    document.write("</h1>");
}
generarBolas(minBolas,maxBolas,numMin,numMax);
mostrarBolas();