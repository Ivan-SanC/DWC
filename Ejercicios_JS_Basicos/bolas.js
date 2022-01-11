let bola;
let random=parseInt(Math.random() *(16-5)+5);
const lista=new Set();

document.write("<h2>Elimina Valors Repetits</h2>");
document.write("<p>Actualiza la pàgina per a mostrar un nou grup de valors..</p>");
document.write(`<p><strong>Entre aquestes ${random} bolles...</strong></p>`);

for(i=1;i<=random;i++){
    bola="&#"+parseInt(Math.random() *(10112-10102)+10102);
    document.write(bola+" ");
    lista.add(bola);
}

document.write(`<p><b>... hi ha ${lista.size} bolles distintes</b></p>`);

for (let numero of lista) {
    document.write(numero+" ");
}


