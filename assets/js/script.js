function exibirDados() {
    var peso = document.getElementById("peso")
    var altura = document.getElementById("altura")
    var calculo = (parseInt(peso.value) / (parseFloat((altura.value)) ** 2))
    var resposta = document.getElementById("resposta")
    var classe = 'ERRO: INFORMAÇÕES INSUFICIENTES'
    if (18.5 > calculo) {classe = 'Abaixo do peso'}
    else if (18.5 <= calculo && calculo < 25) {classe = 'Peso Normal'}
    else if (25 <= calculo && calculo < 30) {classe = 'Sobrepeso'}
    else if (30 <= calculo) {classe = 'Obesidade'}
    if (isNaN(calculo)) {calculo = 0}
    resposta.textContent = calculo.toFixed(1) + '\n' + classe 
}

function main() {
    var botao = document.getElementById("botao")
    botao.addEventListener('click', exibirDados)
}


main()