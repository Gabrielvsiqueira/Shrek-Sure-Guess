let maxTentativas = 0;
let opcao = document.getElementById("tentativas");
let numeroResultado = Math.floor(Math.random() * 99) + 1;

function escolherDificuldade() {
    let valorSelecionado = opcao.value;

    switch (valorSelecionado) {
        case "20":
            maxTentativas = 20;
            alert("Você escolheu a dificuldade Fácil, você tem 20 tentativas.");
            break;
        case "15":
            maxTentativas = 15;
            alert("Você escolheu a dificuldade Média, você tem 15 tentativas.");
            break;
        case "10":
            maxTentativas = 10;
            alert("Você escolheu a dificuldade Difícil, você tem 10 tentativas.");
            break;
        default:
            alert("Por favor, selecione um nível de dificuldade.");
    }
}

opcao.addEventListener("change", escolherDificuldade);

function enviarChute() {
    let input = document.getElementById("numero");
    let chute = parseInt(input.value);
    let mensagem = document.getElementById("mensagem");

    if (isNaN(chute) || chute < 1 || chute > 99) {
        alert("Por favor, insira um número válido entre 1 e 99.");
        return;
    }

    if (maxTentativas <= 0) {
        alert("Escolha uma dificuldade antes de jogar!");
        return;
    }

    maxTentativas--; 

    if (chute === numeroResultado) {
        mensagem.textContent = `🎉 Parabéns! Você acertou o número ${numeroResultado} com ${maxTentativas} tentativas restantes!`;
        mensagem.style.color = "green";
    } else {
        let dica = chute > numeroResultado ? "Muito alto! 📉" : "Muito baixo! 📈";
        mensagem.textContent = `Errou! ${dica} Tentativas restantes: ${maxTentativas}`;
        mensagem.style.color = "red";
    }

    if (maxTentativas === 0 && chute !== numeroResultado) {
        mensagem.textContent = `💀 Você perdeu! O número correto era ${numeroResultado}.`;
        mensagem.style.color = "black";
    }

    input.value = ""; // Limpa o campo de entrada
}