function quest1() {
    const cores = ["preto", "azul", "laranja"];
    const conteudo = document.getElementById("conteudo");
    
    conteudo.textContent = '';

    cores.forEach(x => {
        p = document.createElement("p");
        p.textContent = x;
        p.classList.add(`${x}`);
        conteudo.appendChild(p);
      });
}

function alunos( ) {
    let alunos = []
    let section = document.querySelectorAll('section')
    let quantidade = parseInt()
    if (quantidade > 0 && typeof quantidade === "number"){
        for(let i = 0; i < quantidade; i++ ){
            let nome = prompt(`Informe o nome do aluno ${i++}:`)
            alunos.push(nome)

            alunos.forEach(x => {
                let item = document.createElement('li')
                item.textContent = alunos;
                section.appendChild(item)
            });
        }
    }
 
}