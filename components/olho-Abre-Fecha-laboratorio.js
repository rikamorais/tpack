let olhoAbreFecha = document.querySelectorAll(".olho-abre-fecha");
olhoAbreFecha.forEach(element => {
    element.innerHTML = `
        <img class="olho-fechado display-none" src="../assets/images/olho-fechado.png" alt="">
        <img class="olho-aberto" src="../assets/images/olho-aberto.png" alt="">
    `
});