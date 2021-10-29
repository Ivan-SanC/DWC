let asteriscos;
let random= Array();

for(i=0;i<20;i++){
    random[i]=parseInt(Math.random()*50)+1;

    for(j=0;j<random[i];j++){
        document.write("*");
        
    }
    document.write("<br>");
}

