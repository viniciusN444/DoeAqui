const btnVoltar = document.querySelector('.btnVoltar');
const form = document.querySelector("form");

function voltar() {
    location.href = '../index.html';
}

btnVoltar.addEventListener('click', voltar);

form.addEventListener("submit", function (event) {
    event.preventDefault(); // evita o recarregamento da página

    const nome = document.getElementById("txtNome").value;
    const tipo = document.getElementById("tipoDoacao").value;
    const descricao = document.getElementById("descricao").value;
    const numTelefone = document.getElementById('telefone').value;

    // Recupera as doações anteriores (ou inicia um array vazio)
    const doacoesExistentes = JSON.parse(localStorage.getItem("listaDoacoes")) || [];

    // Cria um objeto com os dados do formulário
    const novaDoacao = {
        nome: nome,
        tipo: tipo,
        descricao: descricao,
        telefone: numTelefone
    };

    // Adiciona a nova doação à lista
    doacoesExistentes.push(novaDoacao);

    // Salva a lista atualizada no localStorage
    localStorage.setItem("listaDoacoes", JSON.stringify(doacoesExistentes));

    // Redireciona para a página da doação
    location.href = '../pag_doacoes/doacoes.html';
});
