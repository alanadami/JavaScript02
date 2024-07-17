const form = document.querySelector("#todo-form");
const input = document.querySelector("#task-title-input");
const lista = document.querySelector("#todo-list");


let tasks = [];

form.addEventListener("submit", (evento) => {
    evento.preventDefault() // impede o recarregamento da página.

    const taskTitle = input.value;
    console.log(taskTitle);

    if(taskTitle.length < 3){
        alert("Coloque pelo menos três caracteres!")
        return;
    }

    // adicionando a tarefa ao array
    tasks.push({
        title: taskTitle,
        done: false
    });

    console.log(tasks);

    const li = document.createElement("li");
    // criando um input no html do tipo checkbox
    const input2 = document.createElement("input");
    input2.setAttribute("type","checkbox") // adicionado a propriedade checkbox

    const span = document.createElement("span");
    span.textContent = taskTitle
    
    const button = document.createElement("button");
    button.textContent = "Remover"

    li.appendChild(input2);
    li.appendChild(span);
    li.appendChild(button);
    
    // adicionando a tarefa ao html
    lista.appendChild(li);

  
})

// Fim da terceira parte, estou com sono.
