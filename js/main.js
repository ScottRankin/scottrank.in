$('a.back-to-top').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 250);
	return false;
});