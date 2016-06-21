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
	$('h5').click(function() {
		$(this).hide('slow');
	});
	$('#thank-you-button').click(function() {
		$('#thank-you-p').text(" HURRAY! YOU LOVE IT! ");
	});
	$('#thank-you-button').mouseenter(function() {
		$('#thank-you-button').addClass('highlight');
	});
	$('#thank-you-button').mouseleave(function() {
		$('#thank-you-button').removeClass('highlight');
	});
}); 