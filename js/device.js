/*check data connection // checkdataversion if connected*/
function checkConnection(){
  console.log('checkConnection');
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
