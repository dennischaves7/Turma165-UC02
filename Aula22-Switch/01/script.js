const numero = parseInt(prompt("Digite um número de 0 a 4"));

switch (numero) {
    case 0:
        console.log("Aula de JS hoje");
        break;
    case 1:
        console.log("Você Aula de JS amanhã");
        break;
    case 2:
        console.log("Aula de JS sempre");
        break;
    default:
        console.log("Opção invalida");
}


function addValue() {
    let dia = parseInt(document.getElementById('dia').value);

    switch (dia) {
        case 1:
            document.getElementById('resposta').textContent = "hoje é domingo";
            break;
        case 2:
            document.getElementById('resposta').textContent = "hoje é segunda";
            break;
        case 3:
            document.getElementById('resposta').textContent = "hoje é terça";
            break;
        case 4:
            document.getElementById('resposta').textContent = "hoje é quarta";
            break;
        case 5:
            document.getElementById('resposta').textContent = "hoje é quinta";
            break;
        case 6:
            document.getElementById('resposta').textContent = "hoje é sexta";
            break;
        case 7:
            document.getElementById('resposta').textContent = "hoje é sábado";
            break;
        default:
            document.getElementById('resposta').textContent = "opção invalida";
    }
}
