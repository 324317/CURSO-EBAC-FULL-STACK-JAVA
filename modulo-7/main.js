const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formEValido = false;

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length>=2;
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // const nomeBeneficiario = document.getElementById('nome-beneficiario');
    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const descricao = document.getElementById('descricao')

    const sucessMessage = `<b>${valorDeposito.value}</b> Reais depositados para o cliente <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroContaBeneficiario.value}</b>`;

    formEValido = validaNome(nomeBeneficiario.value)
    if (formEValido) {
        // alert(sucessMessage);
        const containerMessageSucess = document.querySelector('.sucess-message');
        containerMessageSucess.innerHTML = sucessMessage;
        containerMessageSucess.style.display='block';

        nomeBeneficiario.value='';
        numeroContaBeneficiario.value='';
        valorDeposito.value='';
        descricao.value='';
    } else {
        // alert('O nome não está completo!');
        nomeBeneficiario.style.border = '3px solid red'
        document.querySelector('.error-message').style.display = 'block';
    }
})

nomeBeneficiario.addEventListener('keyup', function(event) {
    console.log(event.target.value);
    formEValido = validaNome(event.target.value);

    if (!formEValido) {
        nomeBeneficiario.classList.add('error')
        // nomeBeneficiario.style.border = '3px solid red' ;
        document.querySelector('.error-message').style.display = 'block';
    } else {
        nomeBeneficiario.classList.remove('error')
        // nomeBeneficiario.style = '';
        document.querySelector('.error-message').style.display = 'none';
    }
})

// console.log(form)