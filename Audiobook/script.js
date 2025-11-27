// camelCase
const botaoPlayPause = document.getElementById('play-pause');
const botaoProximo = document.getElementById('proximo');
const botaoAnterior = document.getElementById('anterior');
const audio = document.getElementById('audio-capitulo');
const qtdCapitulos = 10;
const textoCapitulo = document.getElementById('capitulo');

let tocando = false;
let capituloAtual = 1;


// audio.play();

function tocarFaixa(){
    console.log('Clicou no play/pause');
    audio.play();
    tocando = true;
    console.log('deu play');
    botaoPlayPause.classList.add('tocando');
};

function pausarFaixa(){
    console.log('Clicou no play/pause');
    audio.pause();
    tocando = false;
    console.log('deu pause');
    botaoPlayPause.classList.remove('tocando');
}

function tocarOuPausar(){
    if (tocando === true) {
        pausarFaixa();
    } else {
        tocarFaixa();
    }
}

function proximoCapitulo(){
    pausarFaixa();
    if (capituloAtual < qtdCapitulos) {
        capituloAtual++;
    } else {
        capituloAtual = 1;
    }
    audio.src='./audios/' + capituloAtual + '.mp3';
    tocarFaixa();
    textoCapitulo.innerText = 'Capítulo ' + capituloAtual;
}

function capituloAnterior(){
    pausarFaixa();
    if (capituloAtual > 1) {
        capituloAtual--;
    } else {
        capituloAtual = qtdCapitulos;
    }
    audio.src=`./audios/${capituloAtual}.mp3`;
    textoCapitulo.innerText = 'Capítulo ' + capituloAtual;
    tocarFaixa();
}


botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoProximo.addEventListener('click', proximoCapitulo);
botaoAnterior.addEventListener('click', capituloAnterior);