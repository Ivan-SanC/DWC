const combinaciones=new Set();
 for(i=1;i<=50;i++){
     document.write(`<h1>Combinación ${i}:</h1>`)

    do{
        combinaciones.add(parseInt(Math.random()*49)+1);

    }while(combinaciones.size<6);
    document.write(`<p>`)


    for(numero of combinaciones) {
        document.write (`${numero} ` );
    }
    document.write(`<\p>`);

    combinaciones.clear();
}