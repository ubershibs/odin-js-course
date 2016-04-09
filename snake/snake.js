var board = {
  width: 40,
  height: 40
}

var snake = {
  direction: [1,0],
  body: [[20,20]]
}

function renderBoard() {
  for (var row = 0; row < board.height; row++) {
    $('#board').append($('<div class="row">'));
    for (var column = 0; column < board.width; column++) {
      var cell = '<div class="cell"></div>';
      $('#board').find('.row').last().append(cell)
      $('#board').find('.cell').last().attr('data-position', [column, row]);
    }
    $('#board').append($('</div>'));
  }
}

function renderSnake() {
  var x = snake.body[0][0];
  var y = snake.body[0][1];
  $('#board div[data-position="' + x + ',' + y + '"]').addClass("snake-head");
  if(snake.body.length > 1) {
    for(var i = 1; i < snake.body.length; i++) {
        var xx = snake.body[i][0];
        var yy = snake.body[i][1];
        $('#board div[data-position="' + xx + ',' + yy + '"]').addClass("snake-body");
    }
  }
}

function resetBoard() {
  $('#board .cell').removeClass('snake-head');
  $('#board .cell').removeClass('snake-body');
  $('#board .cell').removeClass('food');
}

function resetSnake() {
  $('#board .cell').removeClass('snake-head');
  $('#board .cell').removeClass('snake-body');
}

function randomCoord() {
  return Math.round(Math.random() * (40-0) + 0);
}

function addFood() {
  var y = randomCoord();
  var x = randomCoord();
  $('#board').find('div[data-position="' + x + ',' + y + '"]').addClass('food');
}

function checkFood() {
  if($('#board .snake-head').hasClass('food')) {
    $('#board .snake-head').removeClass('food');
    return "ate";
  } else {
    return "uneaten";
  }
}

function moveSnake() {
  var x = snake.body[0][0];
  var y = snake.body[0][1];
  snake.body.unshift([x + snake.direction[0], y + snake.direction[1]]);
  var foodStatus = checkFood();
  if (foodStatus !== "ate") {
    snake.body.pop();
  } else {
    addFood();
  }
  resetSnake();
  renderSnake();
}

function newDirection(event) {
  event.preventDefault();
  switch(event.which) {
    case 37:
      snake.direction = [-1,0];
      break;
    case 38:
      snake.direction = [0,-1];
      break;
    case 39:
      snake.direction = [1,0];
      break;
    case 40:
      snake.direction = [0,1];
      break;
  }
}

function playGame() {
  setTimeout(function() {
    moveSnake();
    var x = snake.body[0][0];
    var y = snake.body[0][1];
    if(x > 39 || x < 0 || y > 39 || y < 0) {
      console.log("game over - hit wall");
    } else {
      playGame();
    }
  }, 450);
}

function startGame() {
  resetBoard();
  addFood();
  playGame();
}

$(document).ready( function() {
  renderBoard();
  renderSnake(20,20);

  $(document).on('keydown', newDirection);
  $('#board').one('click', startGame);

});


