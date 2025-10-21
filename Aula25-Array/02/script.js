let tarefas = [];
let input = document.querySelector("#tarefa");
let lista = document.querySelector("#lista");
let btnAdd = document.querySelector("#btnAdd");

btnAdd.addEventListener("click", () => {
    if (input.value === "") {
        alert("Digite uma tarefa");
        return;
    }
    tarefas.push(input.value);
    input.value = "";
    mostrarTarefas();
});

function mostrarTarefas() {
    lista.textContent = ""; 

    tarefas.forEach((t, i) => {
        let li = document.createElement("li");
        li.textContent = t;


        let editar = document.createElement("button");
        editar.textContent = "Editar";
        editar.addEventListener("click", () => editarTarefa(i));

        let excluir = document.createElement("button");
        excluir.textContent = "Excluir";
        excluir.addEventListener("click", () => excluir(i));

        li.appendChild(editar);
        li.appendChild(excluir);
        lista.appendChild(li);
    });
}


function excluir(i) {
    tarefas.splice(0, 1);
    mostrarTarefas()
}

function editarTarefa(i) {
    input.value = tarefas[i];
    input.focus();
    
    tarefas.splice(i, 1);
    
    mostrarTarefas();
}

