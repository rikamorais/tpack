let footerPage = document.querySelector('#slotFooter');
footerPage.classList.add("container")

let footerContainer = document.createElement("div");
// footerContainer.classList.add("container");
footerContainer.classList.add("d-flex");
footerContainer.classList.add("justify-content-between");

footerContainer.innerHTML = `
  <div class="cred-rea">
  <!-- Comente em caso de adaptação do REA -->
    <div>Recurso Educacional Aberto (REA) desenvolvido pela <a href="https://univesp.br/" target="blank">Univesp</a>, disponível sob licença <a href="http://apps.univesp.br/common/license_MIT_2020.txt" target="_blank">MIT</a>.
    Você pode utilizá-lo, compartilhá-lo e modificá-lo.</div>
    <div><button class="btn btn-link" data-toggle="modal" data-target="#creditos">Créditos</button></div>
    <div><a href="#" target="_blank" aria-label="GitHub" style="white-space:nowrap;">GitHub <i class="fab fa-github"></i></a></div>
    <div>Compartilhe: <div class="sharing"></div></div>

  <!-- Descomente em caso de adaptação do REA -->
  <!-- <p>
        <span>Recurso Educacional Aberto (REA) adaptado por SEU NOME.</span>
        <span><a href="#">Versão original da Univesp</a></span>
<      /p> -->
  </div>

  <!-- FORMULÁRIOS DE AVALIAÇÃO -->
  <div class="aval-rea d-flex">
    <!-- AVALIAR RECURSO -->
    <!-- Atualizar "Nome+do+Recurso" -->
    <a class="btn btn-secondary" href="https://docs.google.com/forms/d/e/1FAIpQLSfoe5bxjjASle0FQSNtxvEvL73yVqlXtedVCcLs0-uOYwfHmA/viewform?usp=pp_url&entry.542052009=Cem+Conceitos+de+Contabilidade" target="_blank">Avaliar este recurso</a>
    <!-- REPORTAR ERRO -->
    <!-- Atualizar "Nome+do+Recurso" -->
    <a class="btn btn-secondary" href="https://docs.google.com/forms/d/e/1FAIpQLSeE4DT6yuFY4wArPAPQ86GMbRLFwnlTLG-C-s5t2mFdRkR8bA/viewform?usp=pp_url&entry.1523910789=Cem+Conceitos+de+Contabilidade" target="_blank">Reportar erro</a>
  </div>
`;

footerPage.appendChild(footerContainer);