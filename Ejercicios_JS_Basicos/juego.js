let jugador1;
let jugador2;
const map=new Map();
//document.write("<h1>Pedra, paper, tisora!</h1>");

map.set(1,'&#129308').set(2,'&#129307')
.set(3,'&#129306').set(4,'&#128406');

jugador1=parseInt((Math.random() *(5-1))+1);
if (jugador1==2){
    jugador1=1;
}

jugador2=parseInt((Math.random() *(5-1))+1);
if(jugador2==1){
    jugador2=2;
}
document.write(`<b>JUGADOR 1 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp JUGADOR 2</b>`);
document.write(`<p>${map.get(jugador1)}&nbsp${map.get(jugador2)}</p>`);


if(jugador1==jugador2 || jugador1==1 && jugador2==2){
    document.write('<h3>Empate!</h3>');
}else if(jugador1==1){
    if(jugador2==4){
        document.write('<h3>El jugador 1 gana</h3>');
    }else if(jugador2==3){
        document.write('<h3>El jugador 2 gana</h3>');
    }
}else if(jugador1==3){
    if(jugador2==2){
        document.write('<h3>El jugador 1 gana</h3>');
    }else if(jugador2==4){
        document.write('<h3>El jugador 2 gana</h3>');
    }
}else if(jugador1==4){
    if(jugador2==2){
        document.write('<h3>El jugador 2 gana</h3>');
    }else if(jugador2==3){
        document.write('<h3>El jugador 2 gana</h3>');
    }
}

