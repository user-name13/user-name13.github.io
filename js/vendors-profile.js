$(document).ready(function () {
	$('.profiledata__title-f .profiledata__text').click(function () {
		$('.profiledata__title-f .profiledata__text').removeClass("active");
		$(this).addClass("active");
	})

	$('.icon-menu').click(function () {
		$('.icon-menu, .menu').toggleClass("_active");
		// $('.menu').toggleClass("_active");
	})
})
