var gmaps = (function($) {

  var map, infoWindow;

  var initMap = function() {
    var mapDetails = {
      center: {lat: 43.6532, lng: -79.3832},
      zoom: 8
    };

    map = new google.maps.Map($('#map').get(0), mapDetails);
    infoWindow = new google.maps.InfoWindow({
      maxWidth: 300
    });

    handleUserInput();
  };

  var handleUserInput = function() {
    $('form').validate({
      submitHandler: function(form) {
        addMarker(parseData())
        form.reset();
        return false;
      }
    });
  };

  var parseData = function() {
    var user_lat = parseInt($('#latitude').val());
    var user_lng = parseInt($('#longitude').val());
    var message = $('#message').val();

    return {
      user_lat, user_lng, message: message.trim()
    };
  };

  var addMarker = function(data) {
    console.log(data);
    var marker = new google.maps.Marker({
      position: { lat: data.user_lat, lng: data.user_lng },
      animation: google.maps.Animation.DROP,
      map: map,
      title: data.message
    });

    map.panTo(marker.getPosition());

    setupMessageDisplay(marker);
  };

  var setupMessageDisplay = function(marker) {
    google.maps.event.addListener(marker, 'click', (function(marker) {
      return function() {
        infoWindow.close();

        if(marker.title) {
          infoWindow.setContent(marker.title);
          infoWindow.open(map, marker);
        }
        map.panTo(marker.getPosition());
      };
    })(marker) );
  };

  return {
    initMap: initMap
  };

})(jQuery);

$(gmaps.initMap);
