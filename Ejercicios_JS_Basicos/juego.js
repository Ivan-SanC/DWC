let jugador1;
let jugador2;
const map1=new Map();
const map2=new Map();

document.write("<h1>Pedra, paper, tisora!</h1>");

map1.set(1,'&#129308').set(2,'&#129306').set(3,'&#128406');

map2.set(1,'&#129307').set(2,'&#129306').set(3,'&#128406');

jugador1=parseInt((Math.random() *(4-1))+1);
jugador2=parseInt((Math.random() *(4-1))+1);


document.write(`<b>JUGADOR 1 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp JUGADOR 2</b>`);
document.write(`<p>${map1.get(jugador1)}&nbsp${map2.get(jugador2)}</p>`);


if(jugador1==jugador2){
    document.write('<h3>Empate!</h3>');
}else if(jugador1==1){
    if(jugador2==3){
        document.write('<h3>El jugador 1 gana</h3>');
    }else if(jugador2==2){
        document.write('<h3>El jugador 2 gana</h3>');
    }
}else if(jugador1==2){
    if(jugador2==1){
        document.write('<h3>El jugador 1 gana</h3>');
    }else if(jugador2==3){
        document.write('<h3>El jugador 2 gana</h3>');
    }
}else if(jugador1==3){
    if(jugador2==1){
        document.write('<h3>El jugador 2 gana</h3>');
    }else if(jugador2==2){
        document.write('<h3>El jugador 1 gana</h3>');
    }
}

