function TicTacToe() {
  var x = "X";
  var o = "O";
  var BLANK = ' ';
  var board= {
    cells: [BLANK, BLANK, BLANK, BLANK, BLANK, BLANK, BLANK, BLANK, BLANK],
    turn: 0,
    winner: "none"
  }

  function displayMessage(message, color) {
    $('#message').text(message).css({'background-color': color});
  }

  function checkLine(line) {
    var square1 = board.cells[line[0]];
    var square2 = board.cells[line[1]];
    var square3 = board.cells[line[2]];
    if (square1 !== BLANK && (square1 == square2 == square3)) {
      board.winner = square1;
    }
  }

  function checkForWinner() {
    var winning_lines =  [[0, 1 ,2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    winning_lines.forEach(checkLine);
    if(board.winner !== "none"){
      $('#game-over').text("Congratulations, " + board.winner + "! You won. Click here to play again.").css({'background-color': 'green', display: 'block'});
      $('#game-over').click(initializeGame);
    }
  }

  function spaceTaken() {
    displayMessage("Sorry, " + currentPlayer + ", that space is taken. Try another.", 'red');
    waitForClick();
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
    displayMessage(currentPlayer + "'s turn. Select a square.", 'lightgray');
    waitForClick();
  }

  function currentPlayer() {
    if(board.turn === 0) {
      return x;
    } else if(board.turn % 2 !== 0) {
      return o;
    } else {
      return x;
    }
  }

  function markSquare(event) {
    $(event.target).text(currentPlayer);
    checkForWinner();
    board.turn++;
    checkFullBoard();
    takeTurn();
  }

  function checkSquare(event) {
    var current_square = $(event.target).data('position');
    if(board.cells[current_square] !== BLANK) {
      console.log("Already taken");
      spaceTaken();
    } else {
      markSquare(event);
    }
  }

  function waitForClick() {
    $('.cell').click(checkSquare);
  }

  function startGame(event) {
    $(event.target).css({display: "none"});
    $('#message').text("X's go first. Click a square.");
    waitForClick();
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
}

TicTacToe();
