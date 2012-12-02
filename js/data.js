  function createUser(){
    $.post(apiurl+'/wp-admin/admin-ajax.php?action=register',$('#loginform').serialize(),function(){
      alert(data);
    });
  }

  function authUser(){
    console.log('inhere');
    $.post(apiurl+'/wp-admin/admin-ajax.php?action=login',$('#signupform').serialize(),function(data){
      console.log('frompost');
    });
  }