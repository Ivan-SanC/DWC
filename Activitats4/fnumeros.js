var num;
const numeros=new Map();


for(i=1;i<=10;i++){
    numeros.set(i,0);
}


for(j=0; j<10000;j++){

num=parseInt(Math.random()*10)+1;

var contador=numeros.get(num);
numeros.set(num,contador+1);

}

document.write('<h1>Frecuencias</h1>');
document.write('<ul');
for(i=1;i<=10;i++){
    document.write(`<li><strong>Número ${i} :</strong`);
}