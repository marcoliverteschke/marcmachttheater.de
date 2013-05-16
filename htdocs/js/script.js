$(document).ready(function(){
	preload_images();
	$('.swipebox').swipebox();
});


function preload_images()
{
	var images = Array();
	$('.gallery a').each(function(i, e){
		images[i] = new Image();
		images[i].src = $(e).attr('href');
	});
}