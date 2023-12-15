   // Mostra modal de cookies se ainda não existir no local storage
   if(!localStorage.getItem('cookiesStorage')){
    $("#exampleModalCenter").modal('show');
   }

   const cookies = document.querySelectorAll('.event-cookie');

   cookies.forEach(e=>{
    e.addEventListener('click', function(){
      localStorage.setItem('cookiesStorage', true);
    })
   })


/******************
 * ABRIR O SAIBA+ *
 ******************/
const saibaMais1 = document.querySelectorAll(".saiba-mais1");
const saibaMais11 = document.querySelectorAll(".saiba-mais11")
const displayNone = document.querySelectorAll(".display-none");

for (let i = 0; i < saibaMais1.length; i++) {
  saibaMais1[i].addEventListener("click", () => {
    saibaMais11[i].classList.toggle("display-none");
  })
}

/************************
 * ABRIR E FECHAR OLHOS *
 ************************/
const olhoAberto = document.querySelectorAll(".olho-aberto");
const olhoFechado = document.querySelectorAll(".olho-fechado");
const tituloDropDown = document.querySelectorAll(".titulo-drop-down");
const dropDownNone = document.querySelectorAll(".drop-down-none");

for (let i = 0; i < tituloDropDown.length; i++) {
  tituloDropDown[i].addEventListener("click", () => {
    dropDownNone[i].classList.toggle("display-none");
    olhoFechado[i].classList.toggle("display-none");
    olhoAberto[i].classList.toggle("display-none");
  })
}

/*****************************************************************
 * MOSTRAR E APAGAR O TEXTO "[ENTRE COM A INFORMAÇÃO PERTINENTE]"*
 *****************************************************************/

const textAreaLaboratorio = document.querySelectorAll(".text-area");

textAreaLaboratorio.forEach(element => {
  element.innerHTML = `[entre com a informação pertinente]`;
  
  element.addEventListener("click", () => {
    element.style = `color: var(--preto)`;
    textAreaLaboratorio.forEach(e => {
      
      if (e.innerHTML == ``) {
        e.innerHTML = `[entre com a informação pertinente]`;
      }
    })
    element.innerHTML = ``
  })
  element.addEventListener("keyup", () => {
    element.style = `color: var(--preto)`;
    textAreaLaboratorio.forEach(e => {
      if (e.innerHTML == ``) {
        e.innerHTML = `[entre com a informação pertinente]`;
      }
    })
    element.innerHTML = ``
  })
})


/*******************************
 * AUTOPLAY VIDEO ARTICULAÇÕES *
 *******************************/
// document.querySelector(".video-articulacoes").play();


// link início
<<<<<<< HEAD
let linkInicio = () => {
  let linkInicio1 = document.querySelector(".link-inicio");
  linkInicio1.addEventListener("click", () => {
    window.location.href = "../index.html";
  });
}

// link laboratório
let linkLaboratorio = () => {
  let linkLaboratorio = document.querySelector(".link-vermelho");
  linkLaboratorio.addEventListener("click", () => {
    window.location.href = "laboratorio1-contextualizacao.html";
  })
}
=======
let linkInicio = document.querySelector(".link-inicio");
linkInicio.addEventListener("click", () => {
  window.location.href = "../index.html";
});
>>>>>>> 5ea368663006371321196b7d1ecce910b98f1911


// variável global utilizada em mais de uma função
let sectionConteudo = document.querySelector(".section-conteudo");

/*********************************************************************
 * ALIMENTAÇÃO DA SÍNTESE DO PROJETO COM OS DADOS DO LOCALSTORAGE    *
 *********************************************************************/
<<<<<<< HEAD

=======
>>>>>>> 5ea368663006371321196b7d1ecce910b98f1911
switch (sectionConteudo.id) {
  case "laboratorio2":
    let contextualizacao = document.querySelector(".contextualizacao-lab2");
    for (let i = 0; i < 6; i++) {
      if (localStorage.getItem(`.contextualizacao-lab${i}`)) {
        contextualizacao.innerHTML += `<p>${localStorage.getItem(`.contextualizacao-lab${i}`)}</p>`
      }
    }
    break;

  case "laboratorio3":
    document.querySelector(".conhecimento-conteudo3").innerHTML = localStorage.getItem(`.conhecimentos-inicias-lab0`);
    document.querySelectorAll(".conhecimento-pedagogico3").forEach(e => {
        e.innerHTML = localStorage.getItem(`.conhecimentos-inicias-lab1`);
      })
    document.querySelectorAll(".conhecimento-tecnologico").forEach(e => {
      e.innerHTML = localStorage.getItem(`.conhecimentos-inicias-lab2`);
    })
    document.querySelector(".conhecimento-de-conteudo3").innerHTML = localStorage.getItem(`.contextualizacao-lab3`);
    break;

  case "laboratorio4":
    document.querySelector(".conhecimento-pedagogico-conteudo").innerHTML = localStorage.getItem(`.articulacoes-lab0`);
    document.querySelector(".conhecimento-pedagogico-tecnologia4").innerHTML = localStorage.getItem(`.articulacoes-lab1`);
    document.querySelector(".conhecimento-tecnologico-do-conteudo4").innerHTML = localStorage.getItem(`.articulacoes-lab2`);
    
      /****************************
       * BOTÃO VISUALIZAR PROJETO *
       ****************************/
      let linkVisualizarProjeto = document.querySelector(".link-visualizar-projeto-lab");
      linkVisualizarProjeto.addEventListener("click", () => {
        setItemLocalStorage(".tpack-lab");
      });
      break;
      
    case "laboratorio5": 
      document.querySelector("#titulo").innerHTML = localStorage.getItem(`.tpack-lab0`);
      document.querySelector("#subtitulo").innerHTML = localStorage.getItem(`.tpack-lab1`);
      let contextualizacaoVisualizar = document.querySelector("#contextualizacao-visualizacao");
      for (let i = 0; i < 6; i++) {
        // if (localStorage.getItem(`.contextualizacao-lab${i}`)) {
          contextualizacaoVisualizar.innerHTML += `<li>${localStorage.getItem(`.contextualizacao-lab${i}`)}</li>`
        // }
      }

      let conhecimentosVisualizar = document.querySelector("#conhecimentos-iniciais-visualizacao");
      for (let i = 0; i < 3; i++) {
<<<<<<< HEAD
          conhecimentosVisualizar.innerHTML += `<li>${localStorage.getItem(`.conhecimentos-inicias-lab${i}`)}</li>` 
=======
        // if (localStorage.getItem(`.conhecimentos-iniciais-lab${i}`)) {
          conhecimentosVisualizar.innerHTML += `<li>${localStorage.getItem(`.conhecimentos-inicias-lab${i}`)}</li>`
        // }  
>>>>>>> 5ea368663006371321196b7d1ecce910b98f1911
      }

      let articulacoesVisualizar = document.querySelector("#articulacoes-visualizacao");
      for (let i = 0; i < 3; i++) {
        articulacoesVisualizar.innerHTML += `<li>${localStorage.getItem(`.articulacoes-lab${i}`)}</li>` 
      }
      break;
<<<<<<< HEAD

      case "estudo-de-caso5":
        linkLaboratorio();
        break;
    default:
=======
    default:
        break;
>>>>>>> 5ea368663006371321196b7d1ecce910b98f1911
}




<<<<<<< HEAD
=======
/*****************************
 * LinkS AVANÇAR LABORATÓRIO *
 *****************************/
let avancarLaboratorio = () => {
  alert("oi")
  let linkAvancar = document.querySelector(".link-avancar");
  linkAvancar.addEventListener("click", () => {
    // Adiciona informações no localStorage
    switch (sectionConteudo.id) {
      case "laboratorio1":
        setItemLocalStorage(".contextualizacao-lab");
        break;
      case "laboratorio2":
        setItemLocalStorage(".conhecimentos-inicias-lab");
        break;
      case "laboratorio3":
        setItemLocalStorage(".articulacoes-lab");
        break;
      case "laboratorio4":
        setItemLocalStorage(".tpack-lab");
        break;
      default:
        break;
    }
  })
}
>>>>>>> 5ea368663006371321196b7d1ecce910b98f1911

/*****************************************************************
 * Redireciona as páginas e Adiciona informações no localStorage *
 *****************************************************************/
let linkAvancarLab = () => {
  let linkAvancar = document.querySelector(".link-avancar-lab");
  linkAvancar.addEventListener("click", () => {
    alert("oi")
    switch (sectionConteudo.id) {
      case "laboratorio1":
        setItemLocalStorage(".contextualizacao-lab");
        window.location.href = `laboratorio2-conhecimentos-iniciais.html`;
        break;
      case "laboratorio2":
        setItemLocalStorage(".conhecimentos-inicias-lab");
        window.location.href = `laboratorio3-articulacoes.html`;
        break;
      case "laboratorio3":
        setItemLocalStorage(".articulacoes-lab");
        window.location.href = `laboratorio4-tpack.html`;
        break;
      case "laboratorio4":
        setItemLocalStorage(".tpack-lab");
        window.location.href = `laboratorio5-sintese-do-projeto.html`;
        break;
      default:
        break;
    }
  })
}

/***************************************************
 * Redireciona as páginas do Estudo de Caso        *
 ***************************************************/
let linkAvancarEstudo = () => {
  let linkAvancarEstudo1 = document.querySelector(".link-avancar-estudo");
  linkAvancarEstudo1.addEventListener("click", () => {
    switch (sectionConteudo.id) {
      case "estudo-de-caso1":
        window.location.href = `estudo-de-caso2-conhecimentos-iniciais.html`;
        break;
      case "estudo-de-caso2":
        window.location.href = `estudo-de-caso3-articulacoes.html`;
        break;
      case "estudo-de-caso3":
        window.location.href = `estudo-de-caso4-tpack.html`;
        break;
      case "estudo-de-caso4":
        window.location.href = `estudo-de-caso5-sintese-do-projeto.html`;
        break;
      case "estudo-de-caso5":
        linkLaboratorio();
        break;
      default:
        break;
    }
  })
}

let links = document.querySelector(".links");
if (sectionConteudo.id !== "index" && links.classList.contains("link-avancar-estudo")) {
  linkAvancarEstudo();
  linkInicio();
}


/**********************************************************************************
 * Função para VERIFICAR CAMPOS OBRIGATÓRIOS E ADICIONAR CONTEÚDO NO LOCALSTORAGE *
 **********************************************************************************/
let setItemLocalStorage = (conteudo) => {
  let textArea = document.querySelectorAll(conteudo);
  let camposObrigatorios = document.querySelectorAll(".obrigatorio");
  let camposPreenchidos = 0;

  for (let i = 0; i < textArea.length; i++) {
    let element = textArea[i];
    if (element.value == ``) {
      element.innerHTML = `[entre com a informação pertinente]`;
    }
    // VERIFICA CAMPOS OBRIGATÓRIOS
    camposObrigatorios.forEach(e => {
      if (e.value == `[entre com a informação pertinente]`) {
        e.style = `color: var(--vermelho);`;
        // ABRIR MODAL LABORATÓRIO
        abrirModalLaboratorio();
        fecharModalLaboratorio();
      }
      else {
        camposPreenchidos++;
      }
    })

    // adiciona as informações no localStorage
    if (element.value !== `[entre com a informação pertinente]`) {
      localStorage.setItem(`${conteudo+`${i}`}`, element.value.trim());
    }
  }
  
  // redireciona páginas se todo o conteúdo obrigatório foi preenchido
  if (camposPreenchidos == textArea.length * camposObrigatorios.length) {
<<<<<<< HEAD
    linkAvancarLab();
=======
    redirecionaPaginasLaboratorio();
>>>>>>> 5ea368663006371321196b7d1ecce910b98f1911
  }
  avancarLaboratorio();
}


<<<<<<< HEAD
=======
/***********************************************
 * LINKS DAS PÁGINAS DO LABORATÓRIO DE CRIAÇÃO *
 ***********************************************/
let redirecionaPaginasLaboratorio = () => {
  // Links para as PÁGINAS
  switch (sectionConteudo.id) {
    case "laboratorio1":
      window.location.href = `laboratorio2-conhecimentos-iniciais.html`;
      break;
    case "laboratorio2":
      window.location.href = `laboratorio3-articulacoes.html`;
      break;
    case "laboratorio3":
      window.location.href = `laboratorio4-tpack.html`;
    break;
    case "laboratorio4":
      window.location.href = `laboratorio5-sintese-do-projeto.html`;
    break;
    default:
      break;
  }
}

/***********************************************
 * LINKS DAS PÁGINAS DO ESTUDO DE CASO         *
 ***********************************************/
// let redirecionaPaginasEstudo = document.querySelector(".link-avancar-estudo");
// redirecionaPaginasEstudo.addEventListener("click", () => {
//   switch (sectionConteudo.id) {
//     case "estudo-de-caso1":
//       window.location.href = `estudo-de-caso2-conhecimentos-iniciais.html`;
//       break;
//     case "estudo-de-caso2":
      
//       break;
//     case "estudo-de-caso3":
      
//       break;
//     case "estudo-de-caso4":
      
//       break;
//     case "estudo-de-caso5":
      
//       break;
  
//     default:
//       break;
//   }
// });
>>>>>>> 5ea368663006371321196b7d1ecce910b98f1911

// Abrir modal laboratório
let abrirModalLaboratorio = () => {
  window.scrollTo({top: 0, behavior: "smooth"});
  modalLaboratorio.style = `display: initial;`;
  document.body.style.overflow = 'hidden';
}

// FECHAR MODAL LABORATÓRIO
let fecharModalLaboratorio = () => {
  const fecharModal = document.querySelectorAll(".fechar-modal");
  fecharModal.forEach(element => {
    element.addEventListener("click", () => {
      modalLaboratorio.style = `display: none;`;
      document.body.style.overflow = 'initial';
    });
  })
}

