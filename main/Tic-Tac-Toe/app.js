const squares = document.getElementsByClassName("square");
let turn = "x",
  gameover = false,
  winninComb = [
    [0, 4, 7],
    [2, 4, 6],
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];
for (let square of squares) {
  square.addEventListener("click", () => {
    if (turn == "x" && square.innerText == "") {
      square.innerText = "X";
      turn = "0";
    } else if (square.innerText == "") {
      square.innerText = "0";
      turn = "x";
    }
    console.log(square);
  });
}
setInterval(() => {
  if (!gameover) {
    for (let i = 1; i < squares.length; i += 3) {
      if (squares[i].innerText == "X") {
        console.log("won");
        gameover = true;
      }
    }
    // row
    // for (let i = 0; i < 3; i++) {
    //   if (squares[i].innerText == "X") {
    //     console.log("won");
    //     gameover = true;
    //   }
    // }
    // if(squares[1] && squares[4] && squares[7]){

    // }
  }
}, 1000);
