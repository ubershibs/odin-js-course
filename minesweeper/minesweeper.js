/* Notes

- 9x9 grid
- 10 mines in random locations, set after the first click potentially
- each cell adjacent to a mine needs to contain the number of mines it touches

- handlers for clearing and flagging

when clearing, if there is an adjacent mine, clear only that cell; if the is no adjacent mine, clear recursively until you hit the grid border or a numbered cell

when flagging, flag only that cell

game over - loss - when player clears a mine
game over - win - when players flags all mines and clears all other cells
*/

/*
Note on structure:
Trying out the module pattern variant explored in these articles:
 - http://www.impressivewebs.com/my-current-javascript-design-pattern/
 - https://css-tricks.com/how-do-you-structure-javascript-the-module-pattern-edition
*/



function Cell(position) {
  this.position = position;
  this.isMine = false;
  this.state = covered;
  this.neighboringMines = 0;
}

Cell.prototype.neighbors = function() {
  var neighborPos,
      validNeighbors = []
      directions = {[1, -1], [1, 0], [1,1], [0, -1], [0, 1], [-1,-1], [-1,0], [-1, 1]};
      for(

var b
Board = {
  options = {
    size: 9,
    mines: 10
  },


  //Check whether a pair of computed coordinates is a valid square



  //Reset all properties to initial values
  init: function() {
    this.rows = options.size;
    this.columns = options.size;
    this.minesLeft = options.mines;
    this.safeSquaresLeft = (options.size * options.size) - options.mines;
    this.minesPositions = [];
    this.grid = [];
    this.moves = 0;

    this.buildGrid();
    this.drawGrid();
  },

    //Build the empty array of arrays to track safe vs. mined squares.
    buildGrid: function() {
      for(var i = 0; i < b.size; i++) {
        for(var j = 0; i < b.size; i++) {
          this.grid.push(new Cell([i,j]);
        }
      }
    },

    //Render the grid on the HTML page
    drawGrid: function() {
      var myTable = $('<table id="board"></table>').appendTo('#container');
      for(var x = 0; x < this.rows; x++) {
        var myRow = $('<tr></tr>').appendTo(myTable);
        for(var y = 0; y < this.columns; y++) {
          myRow.append('<td class="cell covered" data-position="[' + x + ',' + y +']"></td>');
        }
      }
    },

    generateMine: function() {
      var x = Math.floor(Math.random() * options.size);
      var y = Math.floor(Math.random() * options.size);
      if(this.grid[][y] !== ) {
        this.generateMine();x
      } else {
        options.grid[x][y] = state.mine;
        this.minePositions.push([x,y]);
      }
    },

    placeBombs: function() {
      var bombsPending = options.mines;
      while(bombsPending > 0) {
        this.generateBomb();
      }
    },
        bombsPending--;

    handleClick = function(whichClick, $cell)
      var cell = this.cells[$cell.attr("data-position")]
      if(whichClick === 1) {
        handleLeftClick(cell);
      } else if(whichClick === 3) {
        handleRightClick(cell);
      }
    },

    handleLeftClick: function(cell) {
      if(this.moves === 0) {

      }
    }

    flagCell: function(event) {
      $(event.target).addClass('red');
      var coords = $(event.target).data("position");
      console.log(coords);
    },

    clearCell: function(event) {
      $(event.target).removeClass('covered').addClass('cleared');
      var coords = $(event.target).data("position");
      if(b.grid[coords[0]][coords[1]] === b.bomb) {
        console.log("Bomb. Game over.");
      } else if(b.grid[coords[0]][coords[1]] === b.blank) {
        clearAdjacent();
      }
    },

    clearAdjacent: function() {
    }

  };

  function Cell(position) {
    this.position = position;
    this.state = state.blank;
    this.isMine = false;
  }

})();

$(document).ready(function() {
  var setupClickHandler = function() {
    $('#board').on('mousedown', 'td', function(event) {
      Minesweeper.Board.handleClick(event.which, $(this));
    });
  };

  Minesweeper.Board.init();

  $('#container').on('contextmenu', function(event) {
    event.preventDefault();
  });

  setupClickHandler();

});
