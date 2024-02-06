const botaoPlayPause = document.getElementById('play-pause');
const audioCapitulo = document.getElementById('audio-capitulo');

const numeroCapitulos = 10;


function tocarFaixa() {
    audioCapitulo.play();
    
}


botaoPlayPause.addEventListener('click', tocarFaixa);
