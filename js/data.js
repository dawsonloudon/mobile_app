  function createUser(){
    console.log('createUser()');
    var uri = apiurl+'/wp-admin/admin-ajax.php?action=register';
    $.ajax({
      type:'POST',
      url: uri,
      data: $('#signupform').serialize(),
      success: function(data){
        console.log(data);
        storage.setItem('user',data);
        changePage('maps');
      },
      dataType: 'JSON'
    });
  }

  function authUser(){
    console.log('authUser()');
    var uri = apiurl+'/wp-admin/admin-ajax.php?action=login';
    $.ajax({
      type:'POST',
      url: uri,
      data: $('#loginform').serialize(),
      success: function(data){
        console.log(data);
        storage.setItem('user',data);
        changePage('maps');
      },
      dataType: 'JSON'
    });
  }

  function getTypes(){
    console.log('getTypes()');
    var uri = apiurl+'/wp-admin/admin-ajax.php?action=get_types';
    $.ajax({
      type:'GET',
      url: uri,
      data: false,
      success: function(data){
        console.log(data);
        storage.setItem('types',data);
        types = storage.getItem('types');
      },
      dataType: 'JSON'
    });
  }
