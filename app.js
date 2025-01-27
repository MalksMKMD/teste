let listaNumeros = [];
let qntChutes = 0;
var numeroAleatorio = 0;
gerarNumeroAleatorio();

function tagmodificador(tag, texto)
{
    let mensagens = document.querySelector(tag);
    mensagens.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function inicial(){
    tagmodificador("h1", "Jogo do número secreto");
    tagmodificador("p", "Chuta um número entre 1 e 100 aí");
}


function verificarChute(){
    qntChutes++
    let vrvChute = qntChutes == 1 ? " chute!" : " chutes!";
    let chute = document.querySelector("input").value;
    if (chute == numeroAleatorio){
        tagmodificador("p", "Você Acertou! com " + qntChutes + vrvChute);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute > numeroAleatorio){
            tagmodificador("p", "Você errou, o número é menor que: " + chute);
        }
        else{
            tagmodificador("p", "Você errou, o número é maior que: " + chute);
        }
    }
    console.log("O botão foi clicado");
    limparCampo();
    console.log(chute + " e " + numeroAleatorio);
}

function gerarNumeroAleatorio(){
    tagmodificador("p", "Chuta um número entre 1 e 100 aí");
    function trocaNumero(){
        if (listaNumeros.length == 9){
            listaNumeros = [];
        }
        let numeroEscolhido = parseInt(Math.random() * 100 + 1);
        if (listaNumeros.includes(numeroEscolhido)){
            trocaNumero();
        }else{
            listaNumeros.push(numeroEscolhido);
            return numeroAleatorio = numeroEscolhido;
        }
    }
    trocaNumero();
    qntChutes = 0;
    console.log(numeroAleatorio);
    limparCampo();
    document.getElementById("reiniciar").setAttribute("disabled", true);
    inicial();
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = '';
}

console.log(numeroAleatorio);