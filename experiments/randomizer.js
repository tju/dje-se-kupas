function randomizer(shouldPrint) {
    var minLat = 44.7225575;
    var maxLat = 44.8549300;
    var minLong = 20.3616270;
    var maxLong = 20.5518097;
    var randLat = minLat + Math.random() * (maxLat - minLat);
    var randLong = minLong + Math.random() * (maxLong - minLong);
    randLat = randLat.toFixed(6);
    randLong = randLong.toFixed(6);
    window.locLL = randLat + "," + randLong;
    // Do streetview
    var whoamiLocation = new google.maps.LatLng(randLat, randLong);
    var streetViewService = new google.maps.StreetViewService();
    var STREETVIEW_MAX_DISTANCE = 50;
    streetViewService.getPanoramaByLocation(
        whoamiLocation,
        STREETVIEW_MAX_DISTANCE,
        function (data, status) {
            if (status === google.maps.StreetViewStatus.OK) {
                COORDINATES.push(data.location.latLng.k.toFixed(6).toString() + ',' + data.location.latLng.B.toFixed(6).toString());

                if (shouldPrint) {
                    console.log(COORDINATES);
                }
            } else {
                // no street view available in this range, or some error occurred
                //console.log('Streetview is not available.');
            }
        });
}