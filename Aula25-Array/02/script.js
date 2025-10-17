let tarefas = [];
let input = document.querySelector("#tarefa");
let lista = document.querySelector("#lista");
let btnAdd = document.querySelector("#btnAdd");

btnAdd.addEventListener("click", () => {
    lista.textContent = ""
    if (input.value === "") {
        alert("Digite uma tarefa");
    } else {
        tarefas.push(input.value)
    }
    input.value = ""
    
    mostrarTarefas()
});

function mostrarTarefas (){
    tarefas.forEach((t, i)=> {
        let li = document.createElement("li");
        li.textContent = t
        let editar = document.createElement("button")
        editar.textContent = "Editar"
         let excluir = document.createElement("button")
        excluir.textContent = "Excluir"
        excluir.addEventListener("click", ()=> excluir(i))
        li.appendChild(editar)
        li.appendChild(excluir)
        lista.appendChild(li)
    })
}
 
function excluir(i){

}