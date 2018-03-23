var map;
var markers = [];

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

  var largeInfoWindow = new google.maps.InfoWindow();

  for (var i = 0; i < locations.length; i++) {
    var position = locations[i].location;
    var title = locations[i].title;

    var marker = new google.maps.Marker({
      position: position,
      title: title,
      animation: google.maps.Animation.DROP,
      id: i
    });

    markers.push(marker);

    marker.addListener('click', function() {
      populateInfoWindow(this, largeInfoWindow);
    });
  }

  document.getElementById('show-listings').addEventListener('click', showListings);
  document.getElementById('hide-listings').addEventListener('click', hideListings);

  document.getElementById('zoom-to area').addEventListener('click', function() {
    zoomToArea();
  });
}

function populateInfoWindow(marker, infowindow) {
  if (infowindow.marker != marker) {
    infowindow.marker = marker;
    infowindow.setContent('<div>' + marker.title + '</div>');
    infowindow.open(map, marker);
    infowindow.addListener('closeclick', function() {
      infowindow.setMarker(null);
    });
  }
}

function showListings() {
  var bounds = new google.maps.LatLngBounds();
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
    bounds.extend(markers[i].position);
  }
  map.fitBounds(bounds);
}

function hideListings() {
  for(var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
}

function zoomToArea() {
  var geocoder = new google.maps.Geocoder();
  var address = document.getElementById('zoom-to-area-text').value;
  if (address == '') {
    window.alert('You must enter an area, or adress');
  } else {
    geocoder.geocode(
      { address: address,
        componentRestrictions: {locality: 'Netanya'}
      }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          map.setCenter(results[0].geometry.location);
          map.setZoom(15);
        } else {
          window.alert('We could not find that location - try entering a more' + ' specific place');
        }
      });
  }
}

google.maps.event.populateInfoWindow(marker, infoWindow);
