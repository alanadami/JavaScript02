const form = document.querySelector("#values")

const top2 = document.querySelector("#itop");
const right = document.querySelector("#iright");
const button = document.querySelector("#ibutton");
const left = document.querySelector("#ileft");

form.addEventListener("submit", (event) =>{
    event.preventDefault()

    const valueBorder = top2.value + "em " + right.value + "em " + button.value + "em " + left.value + "em ";
    document.getElementById("#box").style.borderRadius = valueBorder;
    document.getElementById("csscode").value = valueBorder
  
    
})

function copyFunction(){
    const valorInput = document.getElementById("csscode");
    valorInput.select();
    navigator.clipboard.writeText("border-radius: "+valorInput.value);
    alert("Texto copiado!")
   
}

function clearFunction(){
        const clear = document.querySelectorAll(".inputvalue");
        clear.forEach(input => {
            input.value = "";
        });
        
       
}


console.log(copyFunction());
console.log(clearFunction());