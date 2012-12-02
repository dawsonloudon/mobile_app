  function createUser(){
    $.post(apiurl+'/wp-admin/admin-ajax.php?action=register',$('#signupform').serialize(),function(){
      alert(data);
    });
  }

  function authUser(){
    var uri = apiurl+'/wp-admin/admin-ajax.php?action=login';
    console.log(uri);
    $.post(uri,$('#loginform').serialize(),function(data){
      console.log('afterpost');
      console.log($.parseJSON(data));
    });
  }