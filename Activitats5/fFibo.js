

function fibonacci(num){
    let num1=0;
    let num2=1;
    let suma=0;

    for(let i=2; i<=num;i++){
        
        suma=num1+num2;
        num1=num2;
        num2=suma;
        
    }
    return num1;
}
document.write(fibonacci(8));