var minesweeper = (function() {

  var options = {
    size: 9,
    mines: 10,
    first_move: true
  },
  cell_state = {
    covered: 0,
    uncovered: 1,
    flagged: 2
  };

  var isValidPosition = function(coords) {
    return (coords[0] >= 0 && coords[0] < options.size && coords[1] >= 0 && coords[1] < options.size);
  };

  var locationToSingleNum = function(position) {
    var linear = position[0] * options.size + position[1];
    return linear;
  };

  var board = {

    init: function() {
      this.sideLength = options.size;
      this.flagsLeft = options.mines;
      this.minesIdents = [];
      this.safeIdents = [];
      this.grid = [];
      this.createGrid();
      this.timePassed = 0;
      this.timerID = 0;
      $('.gameover').css({display: 'none'});
    },

    generateMines: function(position) {
      var minesToMake = options.mines;
      var linear = locationToSingleNum(position);
      while(minesToMake > 0) {
        rand = Math.floor(Math.random() * (options.size*options.size)-1 );
        if(rand === linear) {
          this.generateMines(position);
        } else if(this.minesIdents.indexOf(rand) === -1 && rand !== linear) {
          this.minesIdents.push(rand);
          minesToMake--;
        }
      }
      for(var i=0; i < options.mines; i++) {
        var value = this.minesIdents[i];
        this.grid[value].isMine = true;
      }
    },

    adjacentMines: function() {
      var gridSize = options.size * options.size -1;
      for(var j = 0; j < gridSize; j++) {
        var cell = this.grid[j];
        var positions = cell.neighborPositions();
        for(var i = 0; i < positions.length; i++) {
          var position = positions[i];
          var neighbor = locationToSingleNum(position);
          if(this.grid[neighbor].isMine === true) {
            cell.neighboringMines++;
          }
        }
      }
    },

    createGrid: function() {
      var htmlContent = '<table id="board">';
      for(var i = 0; i < this.sideLength; i++) {
        htmlContent += '<tr class="row clearfix">';
        for(var j = 0; j < this.sideLength; j++) {
          var cell = new Cell([i,j]);
          this.grid.push(cell);
          htmlContent += '<td id="' + cell.linearID + '" data-position="' + cell.position + '" class="cell covered"></td>';
        }
        htmlContent += '</tr>';
      }
      htmlContent += '</table>';
      $('#container').html(htmlContent);
      this.updateMineCounter();
    },

    flagCell: function(event) {
      if($(event.target).is('i')) {
        var parent = $(event.target).parent();
        var id = $(parent).attr('id');
      } else {
        var id = $(event.target).attr('id');
      }
      if(this.grid[id].state === cell_state.flagged) {
        $('#' + id).removeClass('flagged').addClass('covered');
        $('#' + id + '> i').css({display: 'none'});
        this.grid[id].state = cell_state.covered;
        this.flagsLeft++;
        this.updateMineCounter();
      } else if(this.grid[id].state === cell_state.covered) {

        $('#' + id).removeClass('covered').addClass('flagged').html('<i class="fa fa-flag flag"></i>');
        this.grid[id].state = cell_state.flagged;
        this.flagsLeft--;
        this.updateMineCounter();
      }
    },

    updateMineCounter: function() {
      var mines = this.flagsLeft.toString();
      var mine_count = '';
      if(mines.length === 2) {
        mine_count = "0" + mines;
      } else if(mines.length === 1) {
        mine_count = "00" + mines;
      }
      $('#mine-counter').text(mine_count);
      if(this.flagsLeft === 0) {
          this.checkForGameOver();
      }
    },

    uncoverCell: function(id) {
      if($('#' + id).hasClass('covered')) {
        if(this.grid[id].isMine === false) {
          $('#' + id).removeClass('covered').addClass('cleared');
          this.grid[id].state = cell_state.uncovered;
          var adjacent = this.grid[id].neighboringMines;
          if(adjacent !== 0) {
            $('#' + id).text(adjacent);
          } else if(adjacent === 0) {
            this.uncoverNeighbors(id);
          }
        } else if(this.grid[id].isMine === true) {
          $(event.target).removeClass('covered').addClass('exploded').html('<i class="fa fa-bomb"></i>');
          this.gameOver("lose");
        }
      }
    },

    uncoverNeighbors: function(id) {
      var positions = this.grid[id].neighborPositions();
      for(var i = 0; i < positions.length; i++) {
        var position = positions[i];
        var neighbor = locationToSingleNum(position);
        this.uncoverCell(neighbor);
      }
    },

    handleClick: function(event) {
      var position = $(event.target).data("position");
      if(event.which === 1 && options.first_move === true) {
        options.first_move = false;
        this.generateMines(position);
        this.adjacentMines();
        this.timerID = setInterval( this.updateTimer.bind(this), 1000 );
      }
      if($(event.target).hasClass('cleared') === false) {
        if(event.which === 3 || event.which === 1 && event.ctrlKey === true) {
         this.flagCell(event);
        } else if(event.which === 1 && event.ctrlKey === false) {
          var id = $(event.target).attr("id");
          this.uncoverCell(id);
        }
      }
    },

    checkForGameOver: function() {
      var max = this.grid.length;
      var counter = 0;
      for(var i = 0; i < max; i++) {
        if(this.grid[i].state === cell_state.covered) {
          counter++;
        }
      }
      if(counter === 0) {
        this.gameOver("win");
      }
    },

    gameOver: function(condition) {
      $('.cell').off('mousedown');
      window.clearInterval(this.TimerID);
      $(this).unbind();
      if(condition === "lose") {
        $('#lose').css({display: "block"});
      } else if(condition === "win") {
        $('# win').css({display: "block"});
      }
    },

    updateTimer: function() {
      this.timePassed++;
      this.displayTimer();

      if ( this.timePassed >= 999 ) {
        this.timePassed = 999;
        clearInterval( this.timerID );
      }
    },

    displayTimer: function() {
      // Zero pad the time to be displayed
      var displayStr = ('00' + Math.abs(this.timePassed) ).slice(-3);
      $('#timer').text(displayStr);
    }

  };


  function Cell(position) {
    this.position = position;
    this.state = cell_state.covered;
    this.isMine = false;
    this.neighboringMines = 0;
    this.linearID = locationToSingleNum(position);
  }

  Cell.prototype.neighborPositions = function() {
    var newPosition,
        validNeighbors = [],
        directions = [[1,-1],[1,0],[1,1],[-1,-1],[-1,0],[-1,1],[0,-1],[0,1]];
    for(var i=0; i < 8; i++) {
      newPosition = [(this.position[0] + directions[i][0]), (this.position[1] + directions[i][1])];
      if (isValidPosition(newPosition)){
        validNeighbors.push(newPosition);
      }
    }
    return validNeighbors;
  };

  return {
    board: board
  };

})();

$(document).ready(function() {
  var setupClickHandler = function() {
    $('.cell').bind("mousedown", function(event) {
      minesweeper.board.handleClick(event);
    });
  };

  minesweeper.board.init();

  $('#container').contextmenu(function(event) {
    event.preventDefault();
  });

  setupClickHandler();

  $('.gameover').on("mousedown", function(event){
    minesweeper.board.init();
  });

});
