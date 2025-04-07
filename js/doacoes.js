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

        // Dados da doação
        const tipo = doacao.tipo || "doação";
        const descricao = doacao.descricao || "sem descrição";
        const nome = doacao.nome || "Anônimo";
        const telefone = doacao.telefone?.replace(/\D/g, ""); // Remove tudo que não é número

        // Monta a mensagem e link do WhatsApp
        const textoMensagem = `Olá, vi sua publicação sobre ${tipo} no site e gostaria de ajudar.`;
        const linkWhatsapp = `https://wa.me/55${telefone}?text=${encodeURIComponent(textoMensagem)}`;

        // Monta o card
        card.innerHTML = `
            <h2>${tipo}</h2>
            <p class="descricao">${descricao}</p>
            <p class="nome"><strong>Nome:</strong> ${nome}</p>
            <p class="telefone"><strong>Telefone:</strong> ${doacao.telefone || "Sem número"}</p>
            <button onclick="window.open('${linkWhatsapp}', '_blank')">Quero Ajudar</button>
        `;

        container.appendChild(card);
    });
} else {
    mensagem.style.display = "block";
}
