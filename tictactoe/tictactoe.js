var board= {
  taken: [],
  turn: 0,
  winner: "none",
  symbol: "X"
}

function checkLine(line) {
  console.log("checking line: " + line);
  var square1 = $('.cell').data('position', line[0]).text();
  var square2 = $('.cell').data('position', line[1]).text();
  var square3 = $('.cell').data('position', line[2]).text();
  if(board.symbol === square1 === square2 === square3) {
    board.winner = square1;
    console.log("values: " + square1 + square2 + square3 + ". ");
  }
}

function checkForWinner() {
  const winning_lines =  [[0, 1 ,2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  winning_lines.forEach(checkLine);
  if(board.winner !== "none"){
    $('#game-over').text("Congratulations, " + board.winner + "! You won. Click here to play again.").css({'background-color': 'green', display: 'block'});
    $('#game-over').click(initializeGame);
  }
}

function spaceTaken() {
  $('#message').text("Sorry, " + board.symbol + ", that space is taken. Try another.").css('background-color', 'red');
  $('.cell').click(checkSquare);
}

function checkFullBoard() {
  if(board.turn >= 9) {
    if(board.winner==='') {
      $('#game-over').text("Stalemate - all cells filled before either player made a line. Click here to play again.").css({'background-color': '#ff9999', display: 'block'});
      $('#game-over').click(initializeGame);
    }
  }
}

function takeTurn() {
  $('#message').text(board.symbol + "'s turn. Select a square.").css('background-color', 'lightgray');
  $('.cell').click(checkSquare);
}

function symbolSwitch() {
  if(board.symbol === "X") {
    board.symbol = "O";
    console.log("Symbol swtiched to O")
  } else {
    board.symbol = "X";
    console.log("Symbol switched to X")
  }
}

function markSquare(event) {
  $(event.target).text(board.symbol);
  checkForWinner();
  board.turn += 1;
  symbolSwitch();
  checkFullBoard();
  takeTurn();
}

function checkSquare(event) {
  console.log(board.symbol + " clicked " + $(event.target).data('position'));
  var current_square = $(event.target).data('position');
  if(board.taken.indexOf(current_square) != -1) {
    console.log("Already taken");
    spaceTaken();
  } else {
    markSquare(event);
  }
}

function startGame(event) {
  $(event.target).css({display: "none"});
  $('#message').text("X's go first. Click a square.");
  $('.cell').click(checkSquare);
}

function clearBoard() {
  $('.cell').empty();
  $('#message').empty().css({'background-color': 'lightgray'});
  $('#game-over').css({display: 'none'});
}

function initializeGame() {
  clearBoard();
  $('#start').css({display: 'block'});
  $('#start').click(startGame);
}

$(document).ready(initializeGame);
