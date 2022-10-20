escolha = ['pedra', 'papel', 'tesoura']
let aux = 'papel'
let img = document.querySelector('#pref')
let cpu = document.querySelector('#robo')

function escolher(valor) {
    
    if (valor == 'pedra') {
        img.src = 'imagens/pedra.png'
        aux = 'pedra'
    } else if (valor == 'papel') {
        img.src = 'imagens/papel.png'
        aux = 'papel'
    } else {
        img.src = 'imagens/tesoura.png'
        aux = 'tesoura'
    }
}

function jogar() {
    
    setTimeout(animar, 1000*5)

    let res = document.getElementById('resul')
    let chave = Math.floor(Math.random() * escolha.length)
    let fundo = document.body

    
    if (escolha[chave] == 'pedra') {
        
        cpu.src = 'imagens/pedra.png'
        if (aux == 'pedra') {
            res.innerHTML = 'EMPATOU!'
            fundo.style.background = '#F1E9DA'
            fundo.style.height = '100vh'
        } else if (aux == 'papel') {
            res.innerHTML = 'GANHOU!'
            fundo.style.background = '#04F06A'
            fundo.style.height = '100vh'
        } else {
            res.innerHTML = 'PERDEU!'
            fundo.style.background = '#F87666'
            fundo.style.height = '100vh'
        }
    } else if (escolha[chave] == 'papel') {
        cpu.src = 'imagens/papel.png'
        if (aux == 'pedra') {
            res.innerHTML = 'PERDEU!'
            fundo.style.background = '#F87666'
            fundo.style.height = '100vh'
        } else if (aux == 'papel') {
            res.innerHTML = 'EMPATOU!'
            fundo.style.background = '#F1E9DA'
            fundo.style.height = '100vh'
        } else {
            res.innerHTML = 'GANHOU!'
            fundo.style.background = '#04F06A'
            fundo.style.height = '100vh'
        }
    } else {
        cpu.src = 'imagens/tesoura.png'
        if (aux == 'pedra') {
            res.innerHTML = 'GANHOU!'
            fundo.style.background = '#04F06A'
            fundo.style.height = '100vh'
        } else if (aux == 'papel') {
            res.innerHTML = 'PERDEU!'
            fundo.style.background = '#F87666'
            fundo.style.height = '100vh'
        } else {
            res.innerHTML = 'EMPATOU!'
            fundo.style.background = '#F1E9DA'
            fundo.style.height = '100vh'
        }
    }
}

function animar() {
    cpu.src = 'imagens/animação.gif'
}