const currentPlayer = document.querySelector(".currentplayer");

let selected;
let player = "x";

let positions = [
    [1,2,3]
    [4,5,6]
    [7,8,9]
    [1,4,7]
    [2,5,8]
    [3,6,9]
    [1,5,9]
    [3,5,7]
];

function init(){
    selected = []

    currentPlayer.innerHTML = `Jogador da vez: ${player}`;

    document.querySelectorAll(".game button").forEach((item) => {
        item.innerHTML = "";
        item.addEventListener("click", newMove);
    });
    }
