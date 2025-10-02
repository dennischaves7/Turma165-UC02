function questao1(){

let nome = prompt('Informe seu nome')
let idade = prompt('Infrome sua idade')
let cidade = prompt('Informe sua cidade')

alert(`seu nome é ${nome}, sua idade é ${idade} e mora na cidade: ${cidade}`)
}

function questao2(){
    let preco = prompt('Indique um valor')

    let resultado = preco * 0.80

    alert(`Seu valor é ${preco} e com o desconto fica ${resultado}`)
}

function questao3 () {
    let celsius = prompt('Indique um valor para celsius')
    let fahrenheit = (celsius * 9/5) + 32

    alert(`Em Celsius o seu valor é ${celsius} e em Fahrenheint é ${fahrenheit}`)
}

function questao4 () {
    let base = prompt('Indique um valor para a base do retângulo')
    let altura = prompt('Indique um valor para a altura do retângulo')

    let perimetro = 2 * (base + altura)
    let area = base * altura

    alert(`A área do seu perimetro é ${area} e o perimetro é ${perimetro}`)
}

function questao5 () {
    let data = prompt('Seu ano de nascimento')

    let idade = data - 2025

 idade = idade * -1

    alert(`Sua data de nascimento é ${data} e a sua idade é ${idade}`)

}

questao5()