let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//função com parametro 
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e ' + numeroLimite);
}

exibirMensagemInicial();

// função sem parametro
function verificarChute() {
    let chute = document.querySelector('input').value;//usamos .value para o codigo nao pegar todo o html, mas so o valor
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');// Aqui queremos habilitar o botão novo jogo ao acertar, para isso usamos esses codigos para achar o id do botão e para remover o atributo
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}
//função com retorno, onde agora ao executar o codigo eu espero um valor 
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

/*
function reiniciarJogo(){
    numero_secreto = Numero_aleatório(10);
    limparCampo();
    tentativas = 1
    escritor('h1', 'Jogo do número secreto');
    escritor('p', 'Escolha um numero entre 1 a 10');
}

 Esse codigo funciona, mas é repetitivo 
 e ao precisar mudar o codigo precisaria alterar em muitos lugares

 Podemos criar uma função que puxa os textos para gente e isso facilita o trabalho
*/


function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true) //Esse codigo é o processo inverso, eu novamente achei o botão pelo ID, porem agora setei um atributo e o seu valor, nesse caso, Disabled (true)
}







/* No html h1 é o titulo principal da pagina e se olharmos, ele
se encontra vazio. Aqui no Js, podemos utilizar codigos para alterar o 
html e deixa-lo dinamico. E no arquivo de html deixar o mais fixo possivel.

let titulo = document.querySelector('h1'); // esse codigo permite abrir o documento do html e selecionar o h1
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um numero entre 1 a 10';


Agora vamos dar uma função para os botões, dentro do botão no html, em 'onclick' escrevemos algo que ele precisa fazer
Portanto, vamos dizer agora o que a função que escrevemos la vai fazer

Uma função é como se estivessemos definindo uma variavel, mas nao atribuindo um valor em si a ela, mas sim um trecho de codigo, 
Dessa forma fica mais facil se precisamos executar uma tarefa mais vezes, pois a variavel vai indicar que codigo precisa ser executado
*/

//Na linha 7 do html temos um link que traz um codigo com novas funcionabilidades para o nosso codigo (responsive voice)