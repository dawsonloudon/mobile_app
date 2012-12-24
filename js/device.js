/*check data connection // checkdataversion if connected*/
function checkConnection(){
  var networkState = navigator.network.connection.type;
  var states = {};
  states[Connection.UNKNOWN]  = false;
  states[Connection.NONE]     = false;
  states['null']              = false;
  states[Connection.ETHERNET] = true;
  states[Connection.WIFI]     = true;
  states[Connection.CELL_2G]  = true;
  states[Connection.CELL_3G]  = true;
  states[Connection.CELL_4G]  = true;
  constate = states[networkState];
  if(constate){
    checkUser();
    getTypes();
  }
  else{
    noConnection();
  }
}

function alertCallback(){
  //null
}

function onPhotoDataSuccess(imageData) {
  var smallImage = document.getElementById('locpic');
  smallImage.src = "data:image/jpeg;base64," + imageData;
}

function onFail(message) {
  alert('Failed because: ' + message);
}

function capturePhoto() {
  // Take picture using device camera and retrieve image as base64-encoded string
  navigator.camera.getPicture(onPhotoDataSuccess,
                              onFail,
                              {
                                quality: 40,
                                destinationType: destinationType.DATA_URL,
                                sourceType : Camera.PictureSourceType.CAMERA,
                                encodingType: Camera.EncodingType.JPEG,
                                targetWidth: 320,
                                targetHeight: 240,
                                saveToPhotoAlbum: false
                              }
  );
}
