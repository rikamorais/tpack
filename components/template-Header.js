let divTitulo = document.createElement("div");
divTitulo.classList.add ("div-titulo");

divTitulo.innerHTML = `
    <div class="div-titulo">
        <h1>Projetos Educacionais</h1>
        <div>com</div>
        <div class="divs-tpack">
        <div>T</div>
        <div>P</div>
        <div>A</div>
        <div>C</div>
        <div>K</div>
        </div>
    </div>
`;

let sectionTitulo = document.querySelector(".section-titulo");
sectionTitulo.appendChild(divTitulo);

