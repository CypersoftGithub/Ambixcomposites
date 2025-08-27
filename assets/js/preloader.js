$(window).on('load', function() {
	// Ensure logo is visible for ~2 seconds, then fade out mask
	setTimeout(function() {
		$('.loader').fadeOut(300, function() {
			$('.loader-mask').fadeOut(500);
		});
	}, 1500);
});