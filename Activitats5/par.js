

function par(num){
    let par="";
    if(num%2==0){
        par=" es par.";
    }else{
        par=" es impar.";
    }
    return par;
}
for(i=0;i<500;i++){
    let numRandom=parseInt(Math.random()*10000)+1;
    document.write(numRandom+" "+par(numRandom)+"<br>");

}