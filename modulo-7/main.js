const form = document.getElementById('form');
const campoA = document.getElementById('campo-A');
const campoB = document.getElementById('campo-B');
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
    const sucessMessage = `<b>Campo B: ${campoB.value}</b> é maior que <b>campo A: ${campoA.value}</b>`;
    const errorMessage = `<b>Campo B: ${campoB.value}</b> é menor (ou igual) a <b>Campo A: ${campoA.value}</b>`;

    formEValido = validaForm(campoA.value,campoB.value)
    if (formEValido) {
        const containerMessageSucess = document.querySelector('.sucess-message');
        containerMessageSucess.innerHTML = sucessMessage;
        containerMessageSucess.style.display='block';

        campoA.value='';
        campoB.value='';

    } else {
        const containerMessageSucess = document.querySelector('.sucess-message');
        containerMessageSucess.innerHTML = errorMessage;
        containerMessageSucess.style.display='block';

        campoA.value='';
        campoB.value='';
    }
})

campoB.addEventListener('keyup', function(event) {
    console.log(event.target.value);
    // formEValido = validaForm(event.target.value);
    formEValido = validaForm(campoA.value,campoB.value)

    if (!formEValido) {
        campoB.classList.add('error')
        document.querySelector('.error-message').style.display = 'block';
    } else {
        campoB.classList.remove('error')
        document.querySelector('.error-message').style.display = 'none';
    }
})