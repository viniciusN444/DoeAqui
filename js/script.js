const btnVerDoacoes = document.querySelector('#btnVerDoacoes');
const btnCadastro = document.querySelector('#btnCadastro');

function verDoacoes(){  
    location.href = 'pag_doacoes/doacoes.html'
}

function telaCadastro(){
    location.href = 'pag_cadastro/cadastro.html'
}

btnVerDoacoes.addEventListener('click', verDoacoes);
btnCadastro.addEventListener('click', telaCadastro);