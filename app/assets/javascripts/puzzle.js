var puzzle = (function($){

  var finderListener = function() {
    $('#puzzle').click(function(event) {
      event.preventDefault();
      var offset = $(this).parent().offset();
      var relX = event.pageX - offset.left;
      var relY = event.pageY - offset.top;

      console.log("X: " + relX + ", Y: " + relY);

      tagCharacter(relX, relY);

    });
  };

  var tagCharacter = function(relX, relY){
    $('#picker').css({left: relX, top: relY}).show();

    $('.name-button').click(function(event) {
      var title = $('h1').text();
      var character = $(event.target).attr('id');

      $.get({
        url: '/check_character',
        data: {c: character, x: relX, y: relY},
        dataType: "json"
      })
      .done(function(response) {
        if(response.status === "found") {
          $('#cl' + character).animate({height: "20px"}, 1000).find('.name').css({'text-decoration': 'line-through'});
          $('#' + character).fadeOut("slow");
          $('#picker').css({display: 'none'});
        } else if(response.status === "tryagain") {
          $('#picker').css({display: 'none'});
        }
        if(response.solve_time !== 0) {
          displayTime(response.solve_time, response.new_toptime);
        }
      });
    });
  };


  var displayTime = function(time, new_toptime){
    var tooSlow = '<p>The record for quickest solution is <strong> <%= @puzzle.record_time %></strong> set by <strong><%= @puzzle.topholder %></strong>.</p>';

    if (time >= 60) {
      var minutes = time / 60;
      var seconds = time % 60;
      if (seconds !== 0){
        var timeString = minutes + 'm, ' + seconds + 's';
      } else {
        var timeString = minutes + ' minutes';
      }
    } else {
      var timeString = time + ' seconds';
    }
    $('#complete').css({display: "block"}).find($('#time')).text(timeString);
    if(new_toptime === "yes") {
      $('#tooslow').css({display: "none"});
      $('#record').css({display: "block"});
      $('#submit').click(submitHandler);
    } else {
      $('#record').css({display: "none"});
      $('#tooslow').css({display: "block"}).html  (tooSlow);
    }

  };

  var submitHandler = function(event) {
    $('#submit').off("click");
    event.preventDefault();
    var puzzleId = window.location.href.split("/").pop();
    var username = $('#username').val();
    $.get({
      url: '/submit_name',
      data: {id: puzzleId, n: username},
      dataType: "json"
    })
    .done(function(response){
      $('#record').css({display: "none"})
      if(response.status === "saved") {
        $('#tooslow').css({display: "block"}).text("Your record has been saved");
      } else {
        $('#tooslow').css({display: "block"}).text("Sorry, your record could not be saved at this time.");
      }
    });
  };

  return {
    finderListener: finderListener
  };

})(jQuery);

$(puzzle.finderListener);
