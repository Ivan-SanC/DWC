document.addEventListener("DOMContentLoaded", function (event) {
    //pedir texto y numero del 1 al 10;
    //nuevo texto en negrita insert en posicion
    //avisa error
    //cancela aplicacion
    let texto;
    let numero;

    let validarTexto = /^[A-za-záéíóúü]+( [A-za-záéíóúü]+)*$/;
    let validarNumero = /^[1-9]|10$/;

    do {
        texto = prompt('Introduce el texto que quieres insertar');

    } while (!validarTexto.test(texto) && texto != null);

    do {
        numero = prompt('Introduce el numero que sera la posicion.');
    } while (!validarNumero && numero != null);

    let li=document.createElement('li');
    let negrita=document.createElement('strong');
    let contenido=document.createTextNode(texto);
    let ol=document.getElementsByTagName('ol');

    negrita.appendChild(contenido);
    li.appendChild(negrita);
    ol[0].appendChild(li);

    ol[0].insertBefore(li,document.getElementsByTagName('li')[numero-1]);

});