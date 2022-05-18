let cells = document.querySelectorAll(".cell");
cells = Array.from(cells);
const playerTurn = document.querySelector(".playerTurn");
const repeatBtn = document.querySelector(".repeatBtn");

let currentPlayer = "x";
playerTurn.innerHTML = "X's turn"

const winComb = [
    [0, 1, 2],
    [2, 4, 5],
    [6, 7, 8],
    [0.3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

cells.forEach(cell => {
    cell.addEventListener("click", function () {
        cell.innerHTML = currentPlayer;
        if (currentPlayer == "x") {
            currentPlayer = "o";
            playerTurn.innerHTML = "O's turn"
        } else if (currentPlayer = "o") {
            currentPlayer = "x";
            playerTurn.innerHTML = "X's turn"
        }
        checkWinner()
    })
})

function checkWinner() {
    winComb.forEach(comb => {
        comb.
    })
}


