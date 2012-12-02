  var api = function(){

    this.createUser = function(){
      $.post(apiurl+'/wp-admin/admin-ajax.php?action=register',$('#').serialize(),function(){
        
      });
    }

    this.authUser = function(){
      $.get(apiurl+'/wp-admin/admin-ajax.php?action=login',$('#').serialize(),function(){
        
      });
    }

  }
