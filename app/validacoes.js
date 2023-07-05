function verificaSeChuteTemValorValido() {
    //o sinal de + converte o num. pra inteiro
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>valor inválido</div>'
        return
    }

    if (numeroForMaiorOuMenoQueValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor Inválido : Apenas números entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2> Você acertou ! </h2>
        <h3>O número secreto é ${numeroSecreto}</h3>`
    }else if(numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `
    }else{
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `
    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenoQueValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

