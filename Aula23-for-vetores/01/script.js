function tabuada() {
    let value = Number(document.querySelector("#number").value);
    let result = document.querySelector('#result');
    let resultado = '';

    for (let i = 1; i <= 10; i++) {
        resultado += `${value} x ${i} = ${value * i + 'ㅤㅤ'}  `;
    }

    result.textContent = resultado;
    result = ''
}
