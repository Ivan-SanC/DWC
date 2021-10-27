var num; 
var mapa=new Map();


for(i=1;i<=10;i++){
    mapa.set(i,0);
}


for(j=0; j<10000;j++){

num=parseInt(Math.random()*10)+1;

mapa.set(num,(mapa.get(num)+1));

}

document.write('<h1>Frecuencias</h1>');
document.write('<ul>');
for(i=1;i<=10;i++){
    document.write(`<li><strong>Número ${i} :</strong> ${mapa.get(i)}</li>`);
}
document.write('</ul>');
