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

var b,
Board = {

  settings : {
    size: 9,
    numBombs: 10,
    grid: [],
    blank: ''
  },

  init: function() {
    b = this.settings;
    this.buildGrid();
    this.drawGrid();
    //this.bindUIActions();
  },

  buildGrid: function() {
    for(var i = 0; i < b.size; i++) {
      b.grid.push([]);
    }
    b.grid.forEach(function(row) {
      for(var i = 0; i < b.size; i++) {
        row.push(b.blank);
      }
    });
  },

  drawGrid: function() {
    var myTable = $('<table id="board"></table>').appendTo('#container');
    for(var x = 0; x < b.size; x++) {
      var myRow = $('<tr></tr>').appendTo(myTable);
      for(var y = 0; y < b.size; y++) {
        myRow.append('<td class="cell covered" data-position="[' + x + ',' + y +']"></td>');
      }
    }
  }
};

$(document).ready(function() {
  Board.init();
});
