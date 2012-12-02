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
  });

  function changePage(page){
    console.log(page);
    if(currentPage != page){
      $('.content_container').animate({opacity:0},500,function(){
        $('#'+currentPage).html($('.content_container').html());
        $('div.content_container').removeClass(currentPage);
        currentPage = page;
        $('div.content_container').html($('#'+page).html()).addClass(page);
        $('.content_container').delay(250).animate({opacity:1},500,function(){
          if(page == 'home'){
            $('#loginbtn').live('touchstart',function(){
              authUser();
            });
            $('#loginusername').focus(function(){
              if($(this).val() == 'username'){
                $(this).val('');
                $(this).blur(function(){
                  if($(this).val() == ''){
                    $(this).val('username');
                  }
                });
              }
            });
          }
          else if(page == 'signupform'){
            $('#signupbtn').live('touchstart',function(){
              createUser();
            });
            $('#signupusername').focus(function(){
              if($(this).val() == 'Enter A Username'){
                $(this).val('');
                $(this).blur(function(){
                  if($(this).val() == ''){
                    $(this).val('Enter A Username');
                  }
                });
              }
            });
            $('#signupemail1').focus(function(){
              if($(this).val() == 'Enter Your Email'){
                $(this).val('');
                $(this).blur(function(){
                  if($(this).val() == ''){
                    $(this).val('Enter Your Email');
                  }
                });
              }
            });
            $('#signupemail2').focus(function(){
              if($(this).val() == 'Confirm Your Email'){
                $(this).val('');
                $(this).blur(function(){
                  if($(this).val() == ''){
                    $(this).val('Confirm Your Email');
                  }
                });
              }
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
      changePage('map');
    }
  }

  function noConnection(){
    $('#loginform').css({'display':'none'});
    $('#noconnection').css({'display':'block'});
    changePage('home');
  }
