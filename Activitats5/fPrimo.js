function esPrimo(numero) {
    
    for(let i = 2,raiz=Math.sqrt(numero); i <= raiz; i++)
        if(numero % i === 0) return false;
    return numero > 1;
}  
for (let i=1;i<=1000;i++) {
    if (esPrimo(i))
        document.write(i+"<br>");
}