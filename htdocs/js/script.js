$(document).ready(function(){
	preload_images();
	$('.swipebox').swipebox();
	
	$('a').click(function(){
		
		if(typeof ga == "function" && typeof $(this).attr('href') == "string") {
			
			if($(this).attr('href').search(/#/) === 0) {
				ga('send', 'event', 'link', 'click', {'page': '/' + $(this).attr('href').substr(1)});
			}
		}
		
	});
	
});


function preload_images()
{
	var images = Array();
	$('.gallery a').each(function(i, e){
		images[i] = new Image();
		images[i].src = $(e).attr('href');
	});
}