// OBEJETIVO 1 - quando passar o mouse em cima do personagem na listagens, devemos seleciona-lo
// passo 1 - pagar os personagens no js pra poder verificar quando usuário passar o mouse em cima de um deles

const personagem = document.querySelectorAll('.personagem');

// passo 2 - adicionar a classe selecionado no personagem que o usúario passar o cursor do mouse 

personagem.forEach((personagem) => {
    personagem.addEventListener('mouseenter' , () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth' });
        }
        
        // passa 3 - verificar se já existe um personagem selecionado, se sim, revemos remover a seleção dele
        RemoverSelecaoDoPersonagem();
        
        personagem.classList.add('selecionado');

        // OBEJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande 

        //passo 1 - pegar o elemento do personagem grande pra acidionar as informlções nele
        alterarImagemPersonagemSelecionado(personagem); 

        // passo 3 - almentar o nome do personagem grande
        alterarNomePersonagemSelecionado(personagem);

        //passo 4 - alterar a descrição do personagem grande
        alterarDescricaoPersonagem(personagem);


        
            })
})


function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    //passo 2 - almentar a imagem do personagem grande
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function RemoverSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

