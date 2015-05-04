var art = [
{location:'25.79271504361449,-80.20056379052056'},
{location:'25.787264588513192,-80.20011161725725'},
{location:'25.78439259698021,-80.20000669019902'},
{location:'25.783336416654123,-80.1995243164394'},
{location:'25.782821677156644,-80.19995365024275'},
{location:'25.78194847980955,-80.1989702023754'},
{location:'25.783908677475935,-80.20980597901547'}];


var rendererOptions = {
  draggable: false
};
var directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);;
var directionsService = new google.maps.DirectionsService();
var map;

var miami = new google.maps.LatLng(25.7216, -80.2793);

function initialize() {

  var mapOptions = {
    zoom: 7,
    center: miami
  };
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById('directionsPanel'));

  google.maps.event.addListener(directionsDisplay, 'directions_changed', function() {
    computeTotalDistance(directionsDisplay.getDirections());
  });

  calcRoute();
}

function calcRoute() {

var coordinates2 ;

if (art.length > 1) 
 coordinates2 = art.slice(1,art.length-1);


  var request = {
    origin: art[0].location,
    destination: art[art.length - 1].location,
    waypoints:coordinates2,
    travelMode: google.maps.TravelMode.WALKING
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
}

function computeTotalDistance(result) {
  var total = 0;
  var myroute = result.routes[0];
  for (var i = 0; i < myroute.legs.length; i++) {
    total += myroute.legs[i].distance.value;
  }
  total = total / 1000.0;
  document.getElementById('total').innerHTML = total + ' km';
}



google.maps.event.addDomListener(window, 'load', initialize);
