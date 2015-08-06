//
// Streetview Map
//
function svinitialize() {
    console.log('No peaking!');
    //
    // Get Coords
    //
    // Yeah this is a bit gross, right? Why not do it randomly? Because in geoguessr while it was great having random coords, some of the randomized points it picked sucked. I didn't
    // want that at all, thus the manual lat/longs. It's fairly easy to build the random lat long coords based if the selected coords have a street view available
    // however detection for that is a bit CPU intensive. In the mean time, just throw more coords into this array - it ain't that bad!
    //
    var coordArray = ['42.463429,18.673762,3a,75y,14.74h,63.46t', '42.429789,18.695477,3a,75y,307.42h,90t', '41.866575,19.340609,3a,75y,341.12h,91.99t', '41.879475,19.32155,3a,75y,187.05h,90t', '41.885341,19.310831,3a,75y,299.65h,95.63t', '41.906887,19.249389,3a,75y,100.2h,90t', '41.908322,19.2443,3a,75y,242.82h,90t', '41.922105,19.201564,3a,75y,121.63h,90', '41.951822,19.164517,3a,75y,256.62h,41.02t', '41.993368,19.147046,3a,75y,17.84h,49.79t', '42.010968,19.150068,3a,75y,334.84h,33.42t', '42.034111,19.142833,3a,75y,316.05h,90t', '42.034455,19.142074,3a,75y,215.38h,39.35t', '42.103701,19.088913,3a,75y,0.32h,90t', '42.1351,19.058886,3a,75y,359.84h,90t', '42.135762,19.055185,3a,75y,275.69h,51.38t', '42.159481,18.999341,3a,75y,254.42h,54.6t', '42.16573,18.983624,3a,75y,286.05h,102.03t', '42.203509,18.942952,3a,75y,237.88h,74.56t', '42.20487,18.942516,3a,75y,307h,83.87t', '42.205098,18.937155,3a,75y,91.09h,57.83t', '42.25536,18.895218,3a,75y,192.47h,90t', '42.255261,18.894321,3a,75y,302.56h,44.67t', '42.259568,18.893609,3a,75y,8.83h,82.65t', '42.263517,18.892536,3a,75y,345.03h,90t', '42.272846,18.888439,3a,75y,252.28h,87.69t',
'42.278961,18.8804,3a,75y,252.18h,62t', '42.28077,18.87551,3a,75y,125.07h,90t', '42.281079,18.86612,3a,75y,55.86h,90t', '42.284798,18.849634,3a,75y,236.44h,90t', '42.277166,18.835601,3a,75y,59.29h,51.33t', '42.276997,18.832751,3a,75y,254.22h,90t', '42.282373,18.813553,3a,75y,306.25h,42.95t', '42.28432,18.809398,3a,75y,251.01h,90t', '42.2832,18.804702,3a,75y,265.57h,90t', '42.28256,18.803004,3a,75y,166.83h,90t', '42.279992,18.799936,3a,75y,11.13h,90t'
        ]
        ;
    var randCoord = coordArray[Math.floor(Math.random() * coordArray.length)];
    coordArrayLatLongs = randCoord.replace(/[\])}[{(]/g, '').split(',');
    window.locLL = coordArrayLatLongs[0] + "," + coordArrayLatLongs[1];
    // Do streetview
    var whoamiLocation = new google.maps.LatLng(coordArrayLatLongs[0], coordArrayLatLongs[1]);
    var streetViewService = new google.maps.StreetViewService();
    var STREETVIEW_MAX_DISTANCE = 100;
    streetViewService.getPanoramaByLocation(whoamiLocation, STREETVIEW_MAX_DISTANCE, function (streetViewPanoramaData, status) {
        if (status === google.maps.StreetViewStatus.OK) {
            // We have a streetview pano for this location, so let's roll
            var panoramaOptions = {
                position: whoamiLocation,
                addressControl: false,
                linksControl: false,
                pov: {
                    heading: 270,
                    zoom: 0,
                    pitch: -10
                },
                visible: true
            };
            var panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), panoramaOptions);
        } else {
            // no street view available in this range, or some error occurred
            alert('Streetview is not available for this location :( Mind telling us that you saw this?');
        }
    });

}
