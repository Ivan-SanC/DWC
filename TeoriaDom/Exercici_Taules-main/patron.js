let patronNumero = /^(0|1?[0-9]|20)$/;
let numeroPruebas = 30;

for (let i=0;i<numeroPruebas;i++){
    console.log(`${i} -> ${patronNumero.test(i)}`);
}