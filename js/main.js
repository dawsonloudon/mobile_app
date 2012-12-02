  function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
  }

  var platform = '';
  var apiurl = 'http://ediblereno.sterlinghamilton.com';
  var currentPage = '';
  var contentScroller;
  var map = false;
  var markers = [];
  var storage = window.localStorage;
  var user = null;
  var types = null;

  function onDeviceReady(){
    platform = device.platform;
    checkConnection();
  }

  $(document).ready(function(){
    $('.nav').live('touchstart',function(){
      changePage($(this).attr('data-page'));
    });
    $('#loginbtn').live('touchstart',function(){
      authUser();
    });
    $('#signupbtn').live('touchstart',function(){
      createUser();
    });
    $('#gettypesbtn').live('touchstart',function(){
      getTypes();
    });
  });

  function changePage(page){
	  if(currentPage != page) {
		  $('.content_container').animate({opacity:0},500,function(){
			  $('#'+currentPage).html($('.content_container').html());
			  $('.content_container').removeClass(currentPage);
			  currentPage = page;
			  $('.content_container').html($('#'+page).html()).addClass(page);
			  $('.content_container').delay(250).animate({opacity:1},500,function(){
			    if(page == 'home'){	  
			    	$('#loginusername').live('touchstart',function(){
					if($(this).value() == 'username'){
						$(this).value('');
						$(this).blur(function(){
							if($(this).value() == ''){
 								$(this).value('username');
							}
						});
      					}
    				    });
    			    	$('#loginpassword').live('touchstart',function(){
     	 				if($(this).value() == 'password'){
        					$(this).value('');
        					$(this).blur(function(){
          						if($(this).value() == ''){
            							$(this).value('password');
          						}
        					});
      					}
    			    	});
			    }
			    else if(page == 'signupform'){
			    	$('#signupusername').live('touchstart',function(){
					if($(this).value() == 'Enter A Username'){
						$(this).value('');
						$(this).blur(function(){
							if($(this).value() == ''){
 								$(this).value('Enter A Username');
							}
						});
      					}
    				});
			    	$('#signupemail1').live('touchstart',function(){
					if($(this).value() == 'Enter Your Email'){
						$(this).value('');
						$(this).blur(function(){
							if($(this).value() == ''){
 								$(this).value('Enter Your Email');
							}
						});
      					}
    				});
			    	$('#signupemail2').live('touchstart',function(){
					if($(this).value() == 'Confirm Your Email'){
						$(this).value('');
						$(this).blur(function(){
							if($(this).value() == ''){
 								$(this).value('Confirm Your Email');
							}
						});
      					}
    				});
			    	$('#password').live('touchstart',function(){
					if($(this).value() == 'Enter Your Password'){
						$(this).value('');
						$(this).blur(function(){
							if($(this).value() == ''){
 								$(this).value('Enter Your Password');
							}
						});
      					}
    				});
			    	$('#password2').live('touchstart',function(){
					if($(this).value() == 'Confirm Your Password'){
						$(this).value('');
						$(this).blur(function(){
							if($(this).value() == ''){
 								$(this).value('Confirm Your Password');
							}
						});
      					}
    				});
			    }
          else if(page == 'maps'){
            relocate();
          }
			    contentScroller = null;
			    contentScroller = new iScroll('scroller');
			  });
		  });
	  }
  }

  function checkUser(){
    user = storage.getItem('user');
    if(!user){
      changePage('home');
    }
    else{
      changePage('maps');
    }
  }

  function noConnection(){
    $('#loginform').css({'display':'none'});
    $('#noconnection').css({'display':'block'});
    changePage('home');
  }
