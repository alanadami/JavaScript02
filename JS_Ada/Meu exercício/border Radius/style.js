const form = document.querySelector("#values")

//const imageBackground = document.querySelector("#iimage");

const top2 = document.querySelector("#itop");
const right = document.querySelector("#iright");
const button = document.querySelector("#ibutton");
const left = document.querySelector("#ileft");



const input = document.getElementById('iimage');

input.addEventListener('change', (e) => {
  const file = input.files[0];
  const reader = new FileReader();
  reader.onload = (event) => {
    const imageData = event.target.result;
    const image = new Image();
    image.src = imageData;
    //const imageConst = image; // save the image to a constant
        
  };
  reader.readAsDataURL(file);

  const divBox = document.getElementById("#box");

    reader.onload = (event) => {
        const imageData = event.target.result;
        divBox.style.backgroundImage = `url(${imageData})`;
        divBox.style.backgroundSize = 'cover'; // optional, to scale the image to fit the div
        divBox.style.backgroundRepeat = 'no-repeat'; // optional, to prevent the image from repeating
      };

 
});


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
            input.value = 0;
        });
        
       
}


