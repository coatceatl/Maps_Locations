var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 32.2750268, lng: 34.8458601 },
    zoom: 12
  });
  var locations = [
    {title: 'Hayarkon Park', location: {lat: 32.0992549, lng: 34.8132114}},
    {title: 'Raanana Park Amphitheater', location: {lat: 32.188737, lng: 34.8527066}},
    {title: 'Caesaria National Park', location: {lat: 32.5086606, lng: 34.9001683}},
    {title: 'Irus Argaman Reserve', location: {lat: 32.283054, lng: 34.839627}},
    {title: 'Carmel Mountain National Park', location: {lat: 32.7290981, lng:34.9992672}},
    {title: 'Bahai Gardens', location: {lat: 32.8119338, lng: 34.9866286}}
  ];
  /*
  var infoWindow = new google.maps.InfoWindow({
    content: 'This is a Irus Argaman Reserve'
  });
  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });
  */
}

google.maps.event.addListener(initMap);
