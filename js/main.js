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
  var user = storage.getItem('user');
  var types = null;

  function onDeviceReady(){
    platform = device.platform;
    checkConnection();
  }

  $(document).ready(function(){
    $('.nav').live('touchstart',function(){
      changePage($(this).attr('data-page'));
    });
    $('#locpic').live('click',function(){
      capturePhoto();
    });
  });

  function changePage(page){
    console.log(page);
    if(currentPage == ''){
        currentPage = page;
	$('#'+page).css({'display':'block'}).animate({opacity:1},500,function(){
          if(page == 'home'){
            $('#loginbtn').live('touchstart',function(){
              authUser();
            });
          }
        });
    }
    else if(currentPage != page){
      $('#'+currentPage).animate({opacity:0},500,function(){
        $('#'+currentPage).css({'display':'none'});
        currentPage = page;
        $('#'+page).delay(250).css({'display':'block'}).animate({opacity:1},500,function(){
          if(page == 'home'){
            $('#loginbtn').live('touchstart',function(){
              authUser();
            });
          }
          else if(page == 'signupform'){
            $('#signupbtn').live('touchstart',function(){
              createUser();
            });
          }
          else if(page == 'map'){
            relocate();
          }
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
      changePage('list');
    }
  }

  function noConnection(){
    $('#loginform').css({'display':'none'});
    $('#noconnection').css({'display':'block'});
    changePage('home');
  }
