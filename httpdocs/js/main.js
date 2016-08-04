$(document).ready(function() {
	$('.js-toggleSection').click(function() {
		$(this).toggleClass('is-open');
		$(this).next('.js-section').toggleClass('is-open');
	});
});
