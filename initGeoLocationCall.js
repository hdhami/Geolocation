(function() {
    //chrome 50 onwards support
    //chrome dev tool emulator supports geolocation testing
    function geoSuccessCb(position) {
        console.log('latitude=' + position.coords.latitude, 'longitude=' + position.coords.longitude);
    }

    function geoErrorCb(error) {
        console.log('Error' + error.code);
        // error.code can be:
        //   0: unknown error
        //   1: permission denied
        //   2: position unavailable (error response from location provider)
        //   3: timed out
    }
    var geoOptions = {
        maximumAge: 24 * 60 * 60 * 1000, //optional parameter.in mili seconds. to get users updated location after some time
        timeout: 10 * 1000,
        enableHighAccuracy: true //uses more battery
    }
    window.addEventListener('load', function() {
        if (('geolocation' in navigator)) {
            navigator.geolocation.getCurrentPosition(geoSuccessCb, geoErrorCb, geoOptions); //one time consent call
            //var watcherId = navigator.geolocation.watchPosition(geoSuccessCb, geoErrorCb); //setting a watcher on user's position.Its consumes more battery
            //clearWatch(watcherId)//this stops watcher. will save batetry
        }
    });

})();
