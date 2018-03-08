var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 32.2750268, lng: 34.8458601 },
    zoom: 12
  });
}

google.maps.event.addListener(initMap);
