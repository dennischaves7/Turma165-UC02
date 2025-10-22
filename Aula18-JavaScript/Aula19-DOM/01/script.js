let titulo = document.getElementById("titulo")
console.log(typeof titulo)
console.log(titulo.innerText)

let itens = document.getElementsByClassName("teste")
console.log(itens[0].innerText)

let cabecalhos = document.getElementsByTagName('h1')
console.log(cabecalhos[0].innerText)

let paragrafos = document.querySelectorAll('p')
console.log(paragrafos[0].innerText)

cabecalhos[0].textContent = "Estou manipulando o dom!"
cabecalhos[0].innerHTML = "<i>Estou manipulando o dom!</i>"
cabecalhos[0].style.color = '#adadad'

cabecalhos[1].classList.add('c01')

paragrafos[1].classList.add('c02')