  var api = function(){

    this.createUser = function(){
      $.post(apiurl+'/wp-admin/admin-ajax.php?action=register',$('#loginform').serialize(),function(){
        alert(data);
      });
    }

    this.authUser = function(){
      $.get(apiurl+'/wp-admin/admin-ajax.php?action=login',$('#signupform').serialize(),function(data){
        alert(data);
      });
    }

  }
