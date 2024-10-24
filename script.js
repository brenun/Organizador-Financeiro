let currentCard = 0;

function proximoCard(cardIndex) {
    const cards = document.querySelectorAll('.card');
    if (cardIndex < cards.length) {
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.transform = `translateX(-${cardIndex * 100}%)`;
        }
        currentCard = cardIndex;
    }
}

function anteriorCard() {
    if (currentCard > 0) {
        proximoCard(currentCard - 1);
    }
}

function adicionarDivida() {
    let nome = document.getElementById('nome').value;
    let produto = document.getElementById('produto').value;
    let valor = parseFloat(document.getElementById('valor').value);
    let totalParcelas = parseInt(document.getElementById('parcelas').value);
    let parcelasPagas = parseInt(document.getElementById('parcelasPagas').value);
    let valorParcela = parseFloat(document.getElementById('valorParcela').value);

    let saldoDevedor = valor - (parcelasPagas * valorParcela);

    let resultado = `
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Produto:</strong> ${produto}</p>
        <p><strong>Valor Total:</strong> R$ ${valor.toFixed(2)}</p>
        <p><strong>Total de Parcelas:</strong> ${totalParcelas}</p>
        <p><strong>Parcelas Pagas:</strong> ${parcelasPagas}</p>
        <p><strong>Valor da Parcela:</strong> R$ ${valorParcela.toFixed(2)}</p>
        <p><strong>Saldo Devedor:</strong> R$ ${saldoDevedor.toFixed(2)}</p>
    `;

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = resultado;
    resultadoDiv.style.display = 'block'; // Torna o resultado visível
    proximoCard(currentCard + 1);
}