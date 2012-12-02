var apiurl = 'http://ediblereno.sterlinghamilton.com';
var currentPage = '';

$(document).ready(function(){
	changePage('home');
	$('nav a:eq(0)').addClass('selected');
	$('nav a').bind('touchstart',function(){
		changePage($(this).attr('data-page'));
		$('nav a').removeClass('selected');
		$(this).addClass('selected');
	});
});

function changePage(page){
	if(currentPage != page) {
		$('.content_container').animate({opacity:0},500,function(){
			currentPage = page;
			$('.content_loading_container').html($('#'+page);
			$('.content_container').delay(250).animate({opacity:1},500);
		});
	}
}
