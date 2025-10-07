
function questao1() {

    let nome = document.getElementById('nome')
    let idade = document.getElementById('idade')
    let cidade = document.getElementById('cidade')

    let resposta = document.getElementById('resposta01')
    resposta.innerText = `seu nome é ${nome.value} sua idade é ${idade.value} e sua cidade é ${cidade.value}`
}

function questao2() {
    let valor = document.getElementById('preco')
    let resultado = Number(valor.value) * 0.80

    let resposta = document.getElementById('resposta02')
    resposta.innerText = `Seu valor é ${valor.value} e com o desconto fica ${resultado.toString()}`
}

function questao3 () {
    let celsius = document.getElementById('number')
    let fahrenheit = (celsius.value * 9/5) + 32

    let resposta = document.getElementById('resposta03')
    resposta.innerText = `Em Celsius o seu valor é ${celsius.value} e em Fahrenheint é ${fahrenheit}`
}

function questao4 () {
    let base =  document.getElementById('base')
    let altura =  document.getElementById('altura')

    let perimetro = (Number(base.value) + Number(altura.value)) * 2
    let area = base.value * altura.value

    let resposta = document.getElementById('resposta04')
    resposta.innerText = `A área do seu retângulo é ${area} e o perimetro é ${perimetro}`
}


function questao5() {
    let data = document.getElementById('nascimento')
    let idade = 2025 - Number(data.value)

    let resposta = document.getElementById('resposta05')
    resposta.innerText = `Seu ano de nascimento é ${data.value} e a sua idade é ${idade}`
}

function questao6() {
    let idade = document.getElementById('idade2')
    let ano = 2025 - Number(idade.value)

    let resposta = document.getElementById('resposta06')
    resposta.innerText = `Sua idade é ${idade.value} e seu ano de nascimento é ${ano}`
}