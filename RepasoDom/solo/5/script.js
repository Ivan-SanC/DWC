function invertirParrafos(){
    let p=document.getElementsByTagName('p')
    let arrayP=[...p];
    arrayP.reverse();
    console.log(arrayP);

    let body=document.body;
    console.log(body);
    
    for(let p of arrayP){
        body.appendChild(p);
    }

}