window.getElementsByTagName('input')

window.document.getElementById('nome-beneficiario')

window.document.getElementsByTagName('form')[0].getElementsByTagName('button')

window.document.getElementsByClassName('container')

# jeito avançado de selecionar elementos... retorna o primeiro item 
window.document.querySelector('button')

window.document.querySelector('input[type=number]')

window.document.querySelectorAll('input[type=number]')

window.document.body

# let nomeBeneficiario = window.document.getElementById('nome-beneficiario')
nomeBeneficiario.value = 'Edgar Bruno Benicio'
nomeBeneficiario.value
nomeBeneficiario.type
nomeBeneficiario.id
nomeBeneficiario.required
nomeBeneficiario.placeholder