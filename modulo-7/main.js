const form = document.getElementById('form');
const campoA = document.getElementById('campo-A');
const campoB = document.getElementById('campo-B');
const confirmMessage = document.getElementById('confirm');
let formEValido = false;

function validaForm(campoA,campoB) {
    let test = false;
    if (campoB > campoA) {
        test=true}
    return test
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const campoA = document.getElementById('campo-A');
    const campoB = document.getElementById('campo-B');
    const sucessMessage = `Formulário Válido : <b>Campo B( ${campoB.value} )</b> é maior que <b>campo A ( ${campoA.value} )</b>`;
    const errorMessage = `Formulário Inválido : <b>Campo B( ${campoB.value} )</b> é menor (ou igual) que <b>campo A ( ${campoA.value} )</b>`;

    formEValido = validaForm(campoA.value,campoB.value)
    if (formEValido) {
        confirmMessage.classList.add('sucess-message')
        const containerMessageSucess = document.querySelector('.sucess-message');
        containerMessageSucess.innerHTML = sucessMessage;

        campoA.value='';
        campoB.value='';

    } else {
        confirmMessage.classList.add('error-message')
        const containerMessageError = document.querySelector('.error-message');
        containerMessageError.innerHTML = errorMessage;

        campoA.value='';
        campoB.value='';
    }
})

function recarregarPagina() {
    location.reload();
}