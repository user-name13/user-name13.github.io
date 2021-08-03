$(document).ready(function () {
	$('.profiledata__title-f .profiledata__text').click(function () {
		$('.profiledata__title-f .profiledata__text').removeClass("active");
		$(this).addClass("active");
	})

	$('.icon-menu').click(function () {
		$('.icon-menu, .menu').toggleClass("_active");
		$('body').toggleClass("active");
	})

	$('#menu').hover(function () {
		$('.hidein').toggleClass("active");
	})

	// $('.icon-menu').click(function () {

	// 	// $('.icon-menu, .menu').toggleClass("_active");

	// 	// $('.icon-menu, .menu').toggleClass("_active");
	// 	// $('.icon-menu, .menu').toggleClass("_inactive");

	// 	// $('body').toggleClass("active");
	// })

})

// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.getElementById("navbar");


// Get the offset position of the navbar
var sticky = navbar.offsetTop + 5;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky")
	}
	else {
		navbar.classList.remove("sticky");
	}
}
