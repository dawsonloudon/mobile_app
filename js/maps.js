function initializeMap(state){
  console.log('initmap');
  var latlng = new google.maps.LatLng(storage.getItem('lat'),storage.getItem('lng'));
  var myAndroidOptions = {
    zoom: 12,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoomControl: true,
    zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL,
        position: google.maps.ControlPosition.LEFT_CENTER
    }
  };
  var myOptions = {
    zoom: 12,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  if(platform == 'Android'){
    console.log('andy');
    map = new google.maps.Map(document.getElementById("map_canvas"), myAndroidOptions);
  }
  else{
    console.log('other');
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
  }
  //var myIcon = new google.maps.MarkerImage("img/locations/markers/you.png", null, null, null, new google.maps.Size(58,58));
  base = new google.maps.Marker({
    position: latlng,
    map: map,
    title:'You are here!',
    zIndex: 1,
    optimized: 0//,
    //icon: myIcon
  });
  /*if(state){
    if(constate)checkLocationData();
  }*/
}

function relocate(state){
  console.log('in');
  if(!state){var state = false;}
  var onSuccess = function(position) {
    console.log(position);
    updatecenter(position.coords.latitude,position.coords.longitude,state);
  }
  var onError = function(error) {
      nolocation();
  }
  var options = { maximumAge: 3000, timeout: 10000, enableHighAccuracy: true };
  navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
}

function updatecenter(lat,lng,state){
  console.log('here');
  storage.setItem('lat',lat);
  storage.setItem('lng',lng);
  initializeMap(state);
}

function nolocation(){
  alert('location not found');
}

function distance(lat1, lon1, lat2, lon2) {
  var radlat1 = Math.PI * lat1/180
  var radlat2 = Math.PI * lat2/180
  var radlon1 = Math.PI * lon1/180
  var radlon2 = Math.PI * lon2/180
  var theta = lon1-lon2
  var radtheta = Math.PI * theta/180
  var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  dist = Math.acos(dist)
  dist = dist * 180/Math.PI
  dist = dist * 60 * 1.1515
  return dist;
}
