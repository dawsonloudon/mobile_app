  api = function(){

    this.createUser = function(){
      $.post(apiurl+'/wp-admin/admin-ajax.php?action=register',$('#loginform').serialize(),function(){
        alert(data);
      });
    }

    this.authUser = function(){
      console.log('inhere');
      $.post(apiurl+'/wp-admin/admin-ajax.php?action=login',$('#signupform').serialize(),function(data){
        console.log('frompost');
      });
    }

  }
