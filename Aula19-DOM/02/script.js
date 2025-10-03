function questao1() {

    let nome = document.getElementById('nome')
    let idade = document.getElementById('idade')
    let cidade = document.getElementById('cidade')

    let resposta = document.getElementById('resposta01')
    resposta.innerText = `seu nome é ${nome.value} sua idade é ${idade.value} e sua cidade é ${cidade.value}`
}

function questao2(){
    let preco = document.getElementById('preco')

    let resultado = preco * 0.80

    let resposta = document.getElementById('resposta02')
    resposta.innerText = `Seu valor é ${preco.value} e com o desconto fica ${resultado.value}`

}