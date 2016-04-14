var ArrestDevelopment = (function($) {
  var counter = 1;
  var loading = false;

  function initiateScroll() {
    window.onload = function() {
      // short timeout
      setTimeout(function() {
        $(document.body).scrollTop(0);
      }, 15);
    };
    moreEpisodes();
  }

  var episodeList = ["tt0515236","tt0515256","tt0515212","tt0515223","tt0515214","tt0515257","tt0515221","tt0515231","tt0515247","tt0515235","tt0515238","tt0515226","tt0515210","tt0515244","tt0515246","tt0515208","tt0515222","tt0515228","tt0515211","tt0515258","tt0515232","tt0515224","tt0515253","tt0515254","tt0515209","tt0515219","tt0515243","tt0515207","tt0515248","tt0515239","tt0515213","tt0515240","tt0515234","tt0515220","tt0515229","tt0515251","tt0515255","tt0515227","tt0515245","tt0515241","tt0515250","tt0515249","tt0515218","tt0515233","tt0515230","tt0515252","tt0515237","tt0515225","tt0515242","tt0515216","tt0515217","tt0515215","tt0757386"];

  function moreEpisodes(number) {
    if(loading) return;
    number = number || 5;

    for(var i = counter; i < number; i++) {
      rand = Math.floor(Math.random() * episodeList.length);
      loadEpisode(episodeList[rand]);
    }
  }

  function loadEpisode(episodeId) {
    $.ajax({
      method: "GET",
      url: 'http://www.omdbapi.com/?',
      data: {
        i: episodeId
      },
      dataType: "json"
    })

    .done(function(json) {
      displayEpisode(json);
    });
  }

  function displayEpisode(episode) {
    console.log(episode);
    var readyData = templateEpisode(episode);
    var poster = '<div class="poster"><img src="' + episode.Poster + '"></div>';
    $('#container').append($('<div class="episode">' + poster +
      '<div class="content">' + readyData + '</div>'));
  }

  function templateEpisode(episode){

    var title = '<h2>' + episode.Episode + '. ' + episode.Title + ', ' + episode.Year + '</h2>';
    var rating = '<p><strong>Rating:</strong> ' + episode.imdbRating + ' (' + episode.imdbVotes + ' votes)';
    var director = standardStyling('Director', episode.Director);
    var writer = standardStyling('Writer', episode.Writer);
    var actors = standardStyling('Actors', episode.Actors);
    var plot = standardStyling('Plot', episode.Plot);
    return title + rating + director + writer + actors + plot;
  }

  function standardStyling(role, data) {
    return '<p><strong>' + role + ':</strong> ' + data + '</p>';
  }

  $( document ).on('ajaxStart', function(){
    loading = true;
    $('.loading').show();
  }).on("ajaxStop", function(){
    $('.loading').hide();
    loading = false;
  });

  $( document ).on( 'scroll', function() {
    if( $( document ).scrollTop() + $( window ).height() ===
        $( document ).height() ) {
      moreEpisodes();
    }
  });

  return { initiateScroll: initiateScroll };
})(jQuery);

$(ArrestDevelopment.initiateScroll);
