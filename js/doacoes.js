const btnVoltar = document.querySelector('.btnVoltar');

function voltar(){
    location.href = '../index.html'
}

btnVoltar.addEventListener('click', voltar);