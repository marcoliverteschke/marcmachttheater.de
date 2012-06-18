/* Author: Marc-Oliver Teschke

*/

$(document).ready(function(){
	$('.navigation a').click(function(){
		$('html, body').animate({scrollTop:$('[id="'+$(this).attr("href").substr(1)+'"]').offset().top - ($('#back_to_top').outerHeight() * 1)}, 'slow');
		return false;
	});
});

