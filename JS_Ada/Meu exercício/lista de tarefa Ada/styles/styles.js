const form = document.querySelector("#formularioLista") 
const tarefaDigitada = document.querySelector("#iinput");
const tarefas = document.querySelector("#tarefas")
//const botoes = document.querySelector("#botoes")

let listaTarefas = [];


form.addEventListener("submit", (evento) => {
    evento.preventDefault()
    
    const tituloTarefa = tarefaDigitada.value;

    listaTarefas.push({
        titulo: tituloTarefa,
        realizada: false
    })

    const liTarefas = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = tituloTarefa;

    // Botão para remover tarefa
    const buttonRemover = document.createElement("button");
    buttonRemover.textContent = "Remover"
    
    buttonRemover.addEventListener("click", (event)=>{
        const liRemovida = event.target.parentElement;
        
        const tarefaRemovidaArray = liRemovida.querySelector("span").textContent
        
        //Removendo a tarefa do array
        listaTarefas = listaTarefas.filter(t => t.titulo !== tarefaRemovidaArray)

        tarefas.removeChild(liRemovida)
        console.log(listaTarefas);
    })    

    //Botão de tarefa concluída
    const buttonConcluida = document.createElement("button")
    buttonConcluida.textContent = "Concluída";
    
    buttonConcluida.setAttribute("type", "onclick");
    buttonConcluida.addEventListener("click", (event) => {
        const tarefaConcluida = event.target.parentElement;
        const conteudoSpan = tarefaConcluida.querySelector("span").textContent;
        conteudoSpan.style.textDecoration = "line through";
        console.log(conteudoSpan);
        
    })
    


    liTarefas.appendChild(span);
    liTarefas.style.paddingBottom = "13px";
    liTarefas.appendChild(buttonRemover);
    liTarefas.appendChild(buttonConcluida);

    tarefas.appendChild(liTarefas)

    
    


    tarefaDigitada.value = "";
    
  


})