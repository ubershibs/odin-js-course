$(document).ready(function tictactoe() {
  var BLANK = '';
  var board = [BLANK, BLANK, BLANK, BLANK, BLANK, BLANK, BLANK, BLANK, BLANK];
  var x = "X";
  var o = "O";
  var current_player = x;
  var winner = "none";
  var move = 0;

  function resetState() {
    board = [BLANK, BLANK, BLANK, BLANK, BLANK, BLANK, BLANK, BLANK, BLANK];
    current_player = x;
    winner = "none";
    move = 0;
    drawBoard();
    displayMessage("Your turn, X",'lightgray');
    $('#game-over').css({display: 'none'});
    $('#board').css({display: 'block'});
  }

  $('.cell').click(play);

  function play(event) {
    if(winner === "none" && move < 9){
      playerTurn(event);
    }
    endGame();
  }

  function playerTurn(event) {
    var position = $(event.target).attr('data-position');
    if(board[position] !== BLANK) {
      displayMessage("This square is taken; please select a free square.", '#ff9999');
    } else if(board[position] === BLANK) {
      board[position] = current_player;
      drawBoard();
      checkForWinner();
      current_player = (current_player === x ? o : x);
      displayMessage("Your turn, " + current_player, 'lightgray');
    }
  }

  function drawBoard() {
    for(var i = 0; i < 9; i++) {
      $('.cell[data-position="' + i + '"]').text(board[i]);
    }
  }

  function displayMessage(message, color) {
    $('#message').text(message).css({'background-color': color});
  }

  function checkForWinner() {
    var winning_lines = [[0, 1 ,2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8],[2, 4, 6]];
    winning_lines.forEach(function(line) {
      var cell1 = line[0];
      var cell2 = line[1];
      var cell3 = line[2];
      if(current_player === board[cell1] && board[cell1] === board[cell2] && board[cell2] === board[cell3]) {
        winner = current_player;
      }
    });
  }

  function endGame() {
    if(board.indexOf(BLANK) === -1 && winner === "none") {
      $('#board').css({display: 'none'});
      $('#game-over').text("Stalemate! All squares were filled without either player getting three in a row. Click here to play again.").css({display: 'block'});
    } else if(winner !== "none") {
      $('#board').css({display: 'none'});
      $('#game-over').text("Congratulations, " + winner + "! You win this time! Click here to play again.").css({display: 'block'});
    }
    $('#game-over').one("click", resetState);
  }
});

