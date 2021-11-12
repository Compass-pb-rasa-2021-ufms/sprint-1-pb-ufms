const pesquisaCep = async(pesquisa) =>{
    pesquisa.preventDefault();
    const cep = document.querySelector('[data-form-input]').value;
    if(cep.length == 8 && /^[0-9]+$/.test(cep)){
        const url = `https://viacep.com.br/ws/${cep}/json/`;
        const dadosUrl = await fetch(url);
        const dadosEndereco = await dadosUrl.json();
        if(dadosEndereco.hasOwnProperty('erro')){
            exibeMensagemErroInexistente();
        }else{
            preencheLista(dadosEndereco);
        }
    } else{
        exibeMensagemErroInvalido();
    }
}

const exibeMensagemErroInexistente = () => {
    const lista = document.querySelector('[data-list]')
    zeraLista(lista);
    const tarefa = document.createElement('li');
    tarefa.classList.add('task');
    const conteudo = `<p class="content">${">>>>>>>> CEP INEXISTENTE <<<<<<<<"}</p>`;
    tarefa.innerHTML = conteudo;
    lista.appendChild(tarefa);
}

const exibeMensagemErroInvalido = () => {
    const lista = document.querySelector('[data-list]')
    zeraLista(lista);
    const tarefa = document.createElement('li');
    tarefa.classList.add('task');
    const conteudo = `<p class="content">${">>>>>>>> CEP INVALIDO <<<<<<<<"}</p>`;
    tarefa.innerHTML = conteudo;
    lista.appendChild(tarefa);
}

const preencheLista = (dados) => {
    
    const endereco = [];
    insereDadosArray(dados, endereco);

    const lista = document.querySelector('[data-list]');

    zeraLista(lista);

    insereDadosList(lista, endereco);
}

const insereDadosList = (lista, endereco) => {
    for(let i = 0; i < 9; i++){
        const tarefa = document.createElement('li');
        tarefa.classList.add('task');
        const conteudo = `<p class="content">${endereco[i]}</p>`;
        tarefa.innerHTML = conteudo;
        lista.appendChild(tarefa);
    }
}

const insereDadosArray  = (dados, endereco) => {
    endereco.push("CEP: " + dados.cep);
    endereco.push("Logradouro: " + dados.logradouro);
    endereco.push("Complemento: " + dados.complemento);
    endereco.push("Bairro: " + dados.bairro);
    endereco.push("Localidade: " + dados.localidade);
    endereco.push("UF: " + dados.uf);
    endereco.push("IBGE: " + dados.ibge);
    endereco.push("GIA: " + dados.gia);
    endereco.push("DDD: " + dados.ddd);
}

const zeraLista = (lista) =>{
    for(let i = 0; i < 9; i++){
        if(lista.lastChild!= null){
            lista.lastChild.remove();
        }
    }
}

const botaoOk = document.querySelector('[data-form-button]');
botaoOk.addEventListener('click', pesquisaCep);
