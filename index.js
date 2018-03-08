var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 32.2750268, lng: 34.8458601 },
    zoom: 12
  });
  var opera = { lat: 32.0762634, lng: 34.7849464 };
  var marker = new google.maps.Marker({
    position: opera,
    map: map,
    title: 'The Opera House'
  });
  var infoWindow = new google.maps.InfoWindow({
    content: 'The Opera House'
  });
  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });
}

google.maps.event.addListener(initMap);
