let array = []; // array 
let inputNome = document.querySelector("#nome");
let inputMatricula = document.querySelector("#matricula");
let lista = document.querySelector("#lista");
let btnAdd = document.querySelector("#btnAdd");
let indiceEdicao = null;

btnAdd.addEventListener("click", () => {
    if (inputNome.value === "" || inputMatricula.value === "") {
        alert("Digite nome e matrícula");
    } else if (indiceEdicao === null) {
        array.push({
            nome: inputNome.value,
            matricula: inputMatricula.value
        });
    } else {
        array[indiceEdicao] = {
            nome: inputNome.value,
            matricula: inputMatricula.value
        };
        indiceEdicao = null;
        btnAdd.textContent = "Adicionar";
    }

    inputNome.value = "";
    inputMatricula.value = "";
    mostrarTarefas();
});

function mostrarTarefas() {
    lista.textContent = "";
    array.forEach((t, i) => {
        let li = document.createElement("li");
        li.textContent = `Nome: ${t.nome} - Matrícula: ${t.matricula}`;

        let editar = document.createElement("button");
        editar.textContent = "Editar";
        editar.addEventListener("click", () => atualizar(i));

        let excluir = document.createElement("button");
        excluir.textContent = "Excluir";
        excluir.addEventListener("click", () => apagar(i));

        li.appendChild(editar);
        li.appendChild(excluir);
        lista.appendChild(li);
    });
}

function atualizar(i) {
    btnAdd.textContent = "Atualizar";
    inputNome.value = array[i].nome;
    inputMatricula.value = array[i].matricula;
    indiceEdicao = i;
}

function apagar(i) {
    let excluir = window.confirm(`Você realmente deseja excluir a matrícula de ${array[i].nome} ?`);
    if (excluir) {
        array.splice(i, 1);
        mostrarTarefas();
    }
}
