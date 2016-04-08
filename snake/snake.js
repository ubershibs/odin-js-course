var board = {
  width: 40,
  height: 40
}

var snake = {
  direction: [1,0],
  body: [[20,20]]
};


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

function renderSnake(x, y) {
  $('#board div[data-position="' + x + ',' + y + '"]').addClass("snake-head")
}

function newDirection(event) {
  event.preventDefault();
  console.log("Pressed " + event.which);
  /*
  switch(event.which) {
    case 37:
      left()
      break;
    case 38:
      up();
      break;
    case 39:
      right();
      break;
    case 40:
      down();
      break;
  }
  */
}

$(document).ready( function() {
  renderBoard();
  renderSnake(20,20);

  $(document).on('keydown', newDirection);

});


