let cells = document.querySelectorAll(".cell");
cells = Array.from(cells);
const playerTurn = document.querySelector(".playerTurn");
const repeatBtn = document.querySelector(".repeatBtn");
let winner = document.querySelector(".winner");

let currentPlayer = "X";
playerTurn.innerHTML = "X's turn"

const winComb = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let stopGame = false;

cells.forEach(cell => {
    cell.addEventListener("click", function () {
        cell.innerHTML = currentPlayer;
        checkWinner();
        noWinner();
        changePlayer();
    })
})


function changePlayer() {
    if (currentPlayer == "X") {
        currentPlayer = "O";
        playerTurn.innerHTML = "O's turn"
    } else if (currentPlayer = "O") {
        currentPlayer = "X";
        playerTurn.innerHTML = "X's turn"
    }
}

function checkWinner() {
    winComb.forEach(comb => {
        let check = comb.every(i => cells[i].innerHTML.trim() == currentPlayer)
        if (check) {
            winner.innerHTML = `${currentPlayer} has win the game!`
        }
    })
}

function noWinner() {
    let pair = cells.every((cells) => cells.innerHTML.trim() != "");
    if (pair) {
        winner.innerHTML = ` no one win the game!`
    }
}


function refreshPage() {
    window.location.reload()
}

repeatBtn.addEventListener("click", refreshPage)