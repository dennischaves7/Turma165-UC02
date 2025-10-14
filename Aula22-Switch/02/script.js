function calcular() {
    const x = parseFloat(document.getElementById('x').value);
    const y = parseFloat(document.getElementById('y').value);
    const z = parseFloat(document.getElementById('z').value);
    const tipoMedia = document.getElementById('tipoMedia').value;
    let result = document.getElementById('result');

    
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

