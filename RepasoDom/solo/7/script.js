function cambiarColor() {
    let rojo = document.getElementById('vermell');
    let ambar = document.getElementById('ambre');
    let verde = document.getElementById('verd');

    let encendido = document.getElementsByClassName('ences')[0].id;
    console.log(encendido == 'verd');

    if (encendido == 'verd') {
        verde.className = 'apagat';
        ambar.className = 'ences';
        

    } else if (encendido == 'ambre') {
        rojo.className = 'ences';
        ambar.className = 'apagat';

    } else {
        verde.className = 'ences';
        rojo.className = 'apagat';
    }
}