const btnVoltar = document.querySelector('.btnVoltar');
const container = document.getElementById("listaCards");
const mensagem = document.getElementById("mensagem");
const cardExemplo = document.getElementById("cardExemplo");

function voltar() {
    location.href = '../index.html';
}

btnVoltar.addEventListener('click', voltar);

// Recupera a lista de doações
const listaDoacoes = JSON.parse(localStorage.getItem("listaDoacoes")) || [];

// Verifica se há doações
if (listaDoacoes.length > 0) {
    // Esconde a mensagem e o card de exemplo
    mensagem.style.display = "none";
    if (cardExemplo) cardExemplo.style.display = "none";

    // Cria e adiciona os cards dinamicamente
    listaDoacoes.forEach(doacao => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h2>${doacao.tipo || "Sem título"}</h2>
            <p class="descricao">${doacao.descricao || "Sem descrição"}</p>
            <p class="nome"><strong>Nome:</strong> ${doacao.nome || "Anônimo"}</p>
            <p class="telefone"><strong>Telefone:</strong> ${doacao.telefone || "Sem número"}</p>
            <button>Quero Ajudar</button>
        `;
        container.appendChild(card);
    });
} else {
    mensagem.style.display = "block";
}
