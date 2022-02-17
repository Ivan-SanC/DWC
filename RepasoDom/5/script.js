function invertirParrafos(){
    let p=document.getElementsByTagName('p');
    let arrayp=[...p].reverse();
    

    for(let i=0;i<p.length;i++){
        document.body.appendChild(arrayp[i]);
    }
}