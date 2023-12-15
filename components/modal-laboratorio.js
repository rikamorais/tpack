const modalLaboratorio = document.querySelector(".modal-laboratorio");
modalLaboratorio.innerHTML = `
    
    <div class="conteudo-modal slideInDown">
        <div class="cabecalho-modal">
            <!-- <h1 class="cabecalho-titulo-modal">Visualizar</h1> -->
            <span class="fechar-modal">&times;</span>
        </div>
        <div class="corpo-modal">
            <p>
                Preencha os campos com asterisco (*)
            </p>
        </div>
        <div class="rodape-modal">
            <button class="btn-fechar fechar-modal">Fechar</button>
        </div>
    </div>

`;

