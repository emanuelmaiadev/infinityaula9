document.addEventListener('DOMContentLoaded', ()=>{
    const adicionarNotaButton = document.getElementById('adicionarNota')
    const notaInput = document.getElementById('notaInput')
    const listaNotas = document.getElementById('listaNotas')

    const adicionarNota = ()=>{
        const notaTexto = notaInput.value 

        const notaDiv = document.createElement('div')
        const notaP = document.createElement('p')
            notaP.textContent = notaTexto

        const excluirButton = document.createElement('button')
        excluirButton.textContent = 'Excluir'
        excluirButton.addEventListener('click', ()=>{
            listaNotas.removeChild(notaDiv)
        })

        notaDiv.appendChild(notaP)
        notaDiv.appendChild(excluirButton)
        listaNotas.appendChild(notaDiv)

        notaInput.value = ''
    }

    adicionarNotaButton.addEventListener('click', adicionarNota)

    notaInput.addEventListener('keypress', (e)=>{
        if(e.key === 'Enter'){
            adicionarNota()
        }
    })
})