const botaoPlayPause = document.getElementById('play-pause');
const audioCapitulo = document.getElementById('audio-capitulo');
const btnNext = document.getElementById('proximo');
const btnBack = document.getElementById('anterior');
const nomeCap = document.getElementById('titulo1');

const numeroCapitulos = 10;
let statusFaixa = 0;
let capAtual = 1;


function tocarFaixa() {
    botaoPlayPause.classList.remove('bi-play-circle-fill')
    botaoPlayPause.classList.add('bi-pause-circle-fill')
    audioCapitulo.play();
  
}

function pausarFaixa(){
    audioCapitulo.pause();
    botaoPlayPause.classList.add('bi-play-circle-fill')
    botaoPlayPause.classList.remove('bi-pause-circle-fill')
}

function tocarOuPausar(){
    if(statusFaixa === 0) {
        tocarFaixa();
        statusFaixa = 1;
    } else {
        pausarFaixa();
        statusFaixa = 0;
    }
}

function trocarNomeFaixa(){
    nomeCap.innerText = 'Capítulo ' + capAtual
}

function nextFaixa(){
if( capAtual === numeroCapitulos){
        capAtual = 1;
    } else {
        capAtual = capAtual + 1;
    }

    audioCapitulo.src = "books/dom-casmurro/" + capAtual + ".mp3";    
    tocarFaixa();
    statusFaixa = 1;
    trocarNomeFaixa();
}

function backFaixa(){
    if( capAtual === 1){
        capAtual = numeroCapitulos;
    } else {
        capAtual = capAtual - 1;
    }
    
    audioCapitulo.src = "books/dom-casmurro/" + capAtual + ".mp3";    
    tocarFaixa();
    statusFaixa = 1;
    trocarNomeFaixa();
    
}


botaoPlayPause.addEventListener('click', tocarOuPausar);
btnNext.addEventListener('click', nextFaixa)
btnBack.addEventListener('click', backFaixa)

