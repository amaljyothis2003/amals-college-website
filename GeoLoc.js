document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map').setView([51.505, -0.09], 13);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    document.getElementById('map').style.display = 'none';

    document.getElementById('getLocationBtn').addEventListener('click', function() {
        // Show the map when the button is clicked
        document.getElementById('map').style.display = 'block';

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var lat = position.coords.latitude;
                var lon = position.coords.longitude;

                // Move the map view to the user's location
                map.setView([lat, lon], 13);

                //Marker
                L.marker([lat, lon]).addTo(map)
                    .bindPopup('Latitude: ' + lat + '<br>Longitude: ' + lon)
                    .openPopup();

                // Navigate to Google Maps with the coordinates
                var googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=' + lat + ',' + lon;
                window.open(googleMapsUrl, '_blank');
            }, 
            function(error) {
                // Handle different geolocation errors
                switch(error.code) {
                    case error.PERMISSION_DENIED:
                        alert("User denied the request for Geolocation.");
                        break;
                    case error.POSITION_UNAVAILABLE:
                        alert("Location information is unavailable.");
                        break;
                    case error.TIMEOUT:
                        alert("The request to get user location timed out.");
                        break;
                    default:
                        alert("An unknown error occurred.");
                        break;
                }
            });
        } 
        else {
            alert('Geolocation is not supported by this browser.');
        }
    });
});
