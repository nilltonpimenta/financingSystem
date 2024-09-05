const comCarencia = document.querySelector('#carencia');
const listaSuspensa = document.querySelector('#listaSuspensa')
const limpar = document.querySelector('#limpar')

comCarencia.addEventListener('change', function () {
    if (this.checked) {
        listaSuspensa.removeAttribute('hidden');
    } else {
        listaSuspensa.setAttribute('hidden', 'hidden');
    }
})

limpar.addEventListener('click', function () {
    listaSuspensa.setAttribute('hidden', 'hidden');
})