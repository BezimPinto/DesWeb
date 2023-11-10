document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);

    const detalhesContainer = document.getElementById('detalhes-container');

    const imagem = document.createElement('img');
    imagem.src = urlParams.get('imagem');
    imagem.alt = 'Imagem do Jogador';

    const nomeCompleto = document.createElement('h2');
    nomeCompleto.innerText = urlParams.get('nome_completo');

    const nascimento = document.createElement('p');
    nascimento.innerText = `Nascimento: ${urlParams.get('nascimento')}`;

    const altura = document.createElement('p');
    altura.innerText = `Altura: ${urlParams.get('altura')}`;

    const descricao = document.createElement('p');
    descricao.innerText = `Descrição: ${urlParams.get('descricao')}`;

    detalhesContainer.appendChild(imagem);
    detalhesContainer.appendChild(nomeCompleto);
    detalhesContainer.appendChild(nascimento);
    detalhesContainer.appendChild(altura);
    detalhesContainer.appendChild(descricao);
});