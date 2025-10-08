
function adicionarItem() {
    let idade = parseInt(document.getElementById('idade').value)

    if (idade < 18) {
        document.getElementById('resposta1').textContent = 'Você é menor de idade'
    } else if (idade < 60) {
        document.getElementById('resposta1').textContent = 'Você é maior de idade'
    } else {
        document.getElementById('resposta1').textContent = 'Você é idoso'
    }

    document.getElementById('idade').value = ''
}

function horario() {
    let hora = parseInt(document.getElementById('hora').value)

    if ( nota <12) {
        document.getElementById('resposta2').textContent = 'Bom dia!'
    } else if (hora <18) {
        document.getElementById('resposta2').textContent = 'Boa tarde!'
    } else {
        document.getElementById('resposta2').textContent = 'Boa noite!'
    }

}

function parOuImpar() {
    let number = parseInt(document.getElementById('number').value)

    if (number % 2 == 0) {
        document.getElementById('resposta3').textContent = 'Seu número é par!!'
    } else {
        document.getElementById('resposta3').textContent = 'Seu número é impar!'
    }
        
}

function resultadoEscolar() {
    let nota = parseInt(document.getElementById('nota').value)

    if (nota < 6) {
        document.getElementById('resposta4').textContent = 'Reprovado!'
    } else if(nota >5 && nota <8) {
        document.getElementById('resposta4').textContent = 'Recuperação!'
    }
    else {
        document.getElementById('resposta4').textContent = 'Aprovado!'
    }
        
}



function corDeFundo() {
    let color = document.getElementById('color').value
    document.body.classList.remove('corRed', 'corOrange', 'corYellow')

    if (color == 'red') {
        document.body.classList.add('corRed')
    } else if (color == 'orange') {
        document.body.classList.add('corOrange')
    } else if (color == 'yellow') {
        document.body.classList.add('corYellow')
    }

    document.getElementById('color').value = ''
}

function calcularIMC() {
    let peso = parseFloat(document.getElementById('peso').value)
    let altura = parseFloat(document.getElementById('altura').value)

    let imc = peso / (altura * altura)

    let resultado
    if (imc < 0.00185) {
        resultado = 'Abaixo do peso'
    } else if (imc < 0.00249) {
        resultado = 'Peso normal'
    } else if (imc < 0.00299) {
        resultado = 'Sobrepeso'
    } else if (imc < 0.00349) {
        resultado = 'Obesidade grau I'
    } else if (imc < 0.00399) {
        resultado = 'Obesidade grau II'
    } else {
        resultado = 'Obesidade grau III'
    }

    imc = imc * 10000
    let imcP = imc.toFixed(2).toString().slice(0, 4)

    document.getElementById('resposta6').textContent = `IMC: ${imcP} — ${resultado}`

    document.getElementById('peso').value = ''
    document.getElementById('altura').value = ''
}

 
