const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const tituloProduto = document.getElementById('titulo-produto');
const nomeCorSelecionada = document.getElementById('nome-cor-selecionada');
const imagemMiniatura0 = document.getElementById('0-imagem-miniatura');
const imagemMiniatura1 = document.getElementById('1-imagem-miniatura');
const imagemMiniatura2 = document.getElementById('2-imagem-miniatura');

const verdeCipreste = {
    nome: 'verde-cipreste',
    pasta: 'imagens-verde-cipreste',
};

const azulInverno = {
    nome: 'azul-inverno',
    pasta: 'imagens-azul-inverno',
};

const meiaNoite = {
    nome: 'Meia-noite',
    pasta: 'imagens-meia-noite',
};

const estelar = {
    nome: 'Estelar',
    pasta: 'imagens-estelar',
};

const rosaClaro = {
    nome: 'Rosa-claro',
    pasta: 'imagens-rosa-claro',
};

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const opcoesTamanho = ['41 mm', '45 mm'];

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;

function trocarImagem () {
    const idImgOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemSelecionada = idImgOpcaoSelecionada.charAt(0);
    imagemVisualizacao.src = './imagens/opcoes-cores/'  + opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg';
};


function trocarTamanho() {
    const idTOpcaoSelecionada = document.querySelector('[name = "opcao-tamanho"]:checked').id;
    tamanhoSelecionado = idTOpcaoSelecionada.charAt(0);

    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome + " para caixa de " + opcoesTamanho[tamanhoSelecionado];
    if (opcoesTamanho[tamanhoSelecionado] === '41 mm') {
        imagemVisualizacao.classList.add('caixa-pequena');
    } else {
        imagemVisualizacao.classList.remove('caixa-pequena');
    }
    
    };

    function trocarCor() {
        const idCorOpcaoSelecionada = document.querySelector('[name = opcao-cor]:checked').id;
        corSelecionada = idCorOpcaoSelecionada.charAt(0);

        tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome + " para caixa de " + opcoesTamanho[tamanhoSelecionado];
        nomeCorSelecionada.innerText = "Cor - " + opcoesCores[corSelecionada].nome

        imagemMiniatura0.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-0.jpeg';
        imagemMiniatura1.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-1.jpeg';
        imagemMiniatura2.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-2.jpeg';

        imagemVisualizacao.src = './imagens/opcoes-cores/'  + opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg';
    

    }