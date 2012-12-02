  function createUser(){
    var uri = apiurl+'/wp-admin/admin-ajax.php?action=register';
    $.ajax({
      type:'POST',
      url: uri,
      data: $('#registerform').serialize(),
      success: function(data){
        console.log(data)
      },
      dataType: 'JSON'
    });
  }

  function authUser(){
    var uri = apiurl+'/wp-admin/admin-ajax.php?action=login';
    $.ajax({
      type:'POST',
      url: uri,
      data: $('#loginform').serialize(),
      success: function(data){
        console.log(data)
      },
      dataType: 'JSON'
    });
  }