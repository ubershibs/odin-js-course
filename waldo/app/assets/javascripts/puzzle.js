var puzzle = (function($){

  var finderListener = function() {
    $('#puzzle').click(function(event) {
      event.preventDefault();
      var offset = $(this).parent().offset();
      var relX = event.pageX - offset.left;
      var relY = event.pageY - offset.top;

      console.log(relX);
      console.log(relY);

      tagCharacter(relX, relY);

    });
  };

  var tagCharacter = function(relX, relY){
    $('#picker').css({left: relX, top: relY, display: 'block'});

    $('.character').click(function(event) {
      var character = $(event.target).attr('id');

      $.ajax({
        url: '/check_character',
        data: {c: character, x: relX, y: relY
        },
        type: "GET",
        dataType: "json",
      })
      .done(function(json) {
        console.log(json)
      });
    });
  };

  var setupListeners = function() {
    finderListener();
    console.log("ran setupListeners");
  };

  return {
    setupListeners: setupListeners
  };

})(jQuery);

$(puzzle.setupListeners);
