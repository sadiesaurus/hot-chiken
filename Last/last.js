$(document).ready(function() {
	$('.container').mouseenter(function() {
		$(this).addClass('opaque');
	});
	$('.container').mouseleave(function() {
		$(this).removeClass('opaque');
	});
	$('h5').mouseenter(function() {
		$(this).addClass('red');
	});
	$('h5').mouseleave(function() {
		$(this).removeClass('red');
	});
	$('.capital').mouseenter(function() {
		$(this).addClass('highlight');
	});
	$('.capital').mouseleave(function() {
		$(this).removeClass('highlight');
	});
	
}); 