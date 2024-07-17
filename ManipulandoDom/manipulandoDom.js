let titulo = document.querySelector("h1")
console.log(titulo);

titulo.textContent = "Dom";


const todosH2 = document.querySelectorAll("h2");
console.log(todosH2);

todosH2[0].textContent = "Alan Lindo"

// indicado usar queryselector ou selectorAll. Por tag, por ID ou por classe

// .textContent acessa o conteúdo da tag e faz alteração. Faz a mesma coisa que o innerHtml
// todosH2[0].textContent = "Alan Lindo"


const logo = document.querySelector(#logotipo);
logo.setAttribute   