const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const RestartBtn = document.querySelector("#restartBtn");
const windCondtions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let option = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;
initializeGame();
function initializeGame() {
  cells.forEach((cell) => cell.addEventListener("click", cellClicked));
  RestartBtn.addEventListener("click", restartGame);
  statusText.textContent = `${currentPlayer}'s turn`;
}
function cellClicked() {
  const cellIndex = this.getAttribute("cellIndex");
}

function updateCell(cell, index) {}
function changePlyer() {}
function restartGame() {}
