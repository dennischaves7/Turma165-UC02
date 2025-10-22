function calcular() {
    const x = parseFloat(document.getElementById('x').value);
    const y = parseFloat(document.getElementById('y').value);
    const z = parseFloat(document.getElementById('z').value);
    const tipoMedia = document.getElementById('tipoMedia').value;
    let result = document.getElementById('result');

    if (x >= 0 && y >= 0 && z >= 0) {
        switch (tipoMedia) {
            case 'aritimetica':
                result.textContent = `Sua média em aritimetica é ${(x + y + z) / 3}`;
                break;
            case 'geometrica':
                result.textContent = `Sua média em geometrica é ${Math.cbrt(x * y * z)}`;
                break;
            case 'ponderada':
                result.textContent = `Sua média em ponderada é ${(x * 3 + y * 3 + z * 4) / 10}`;
                break;
            default:
                result.textContent = '';
        }
    }

}

function matematica() {
    let num01 = Number(document.getElementById('num01').value)
    let num02 = Number(document.getElementById('num02').value)
    let op = document.getElementById('op').value
    let result = document.getElementById('result2')

    switch (op) {
        case '+':
            result.textContent = num01 + num02
            break;
        case '-':
            result.textContent = num01 - num02
            break;
        case '*':
            result.textContent = num01 * num02
            break;
        case '/':
            if (num02 === 0) {
                result.textContent = "indefinido"
            } else {
                result.textContent = num01 / num02
            }

            break;
        default:
            break;
    }
}