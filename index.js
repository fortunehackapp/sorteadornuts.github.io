function sortear() {

    const elementoResultado = document.createElement('div')
    elementoResultado.classList.add('result-value')

    elementoResultado.innerText = '11'

    setTimeout(() => {

        const resultado = document.querySelector('.result-values') 
        resultado.append(elementoResultado)
        
    }, 2000);
}
