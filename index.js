var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 32.137, lng: 34.344},
    zoom: 10
  });
}

google.maps.event.addListener(initMap);
