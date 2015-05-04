   function initialize() {
        var mapOptions = {
          center: { lat: -64, lng: 300.644},
          zoom: 8
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
      }
      google.maps.event.addDomListener(window, 'load', initialize);