  var apiurl = 'http://ediblereno.sterlinghamilton.com';
  var currentPage = '';
  var contentScroller;
  var map = false;
  var markers = [];

  $(document).ready(function(){
	  changePage('home');
	  $('nav a:eq(0)').addClass('selected');
	  $('nav a').bind('touchstart',function(){
		  changePage($(this).attr('data-page'));
		  $('nav a').removeClass('selected');
		  $(this).addClass('selected');
	  });
    $('#loginbtn').live('touchstart',function(){
      console.log('touch');
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
			  currentPage = page;
			  $('.content_container').html($('#'+page).html());
			  $('.content_container').delay(250).animate({opacity:1},500,function(){
				  contentScroller = null;
				  contentScroller = new iScroll('scroller');
			  });
		  });
	  }
  }
