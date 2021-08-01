$(document).ready(function () {
	// $('.hovych').hover(function () {
	// 	$('.hidein').fadeOut(300);
	// },
	// 	function () {
	// 		$('.hidein').fadeIn(300);
	// 	}
	// );
	$('.right__body-1').hide(0);

	$('.right__option').click(function () {
		let i = $(this).data("answ1");
		// console.log(`${i}`);
		let sex;
		if (i == 1)
			sex = "Male";
		else
			sex = "Female";

		console.log(`You've chosen ${sex}`);

		// $('.right__body').fadeOut(0);
		// $('.right__body-1').fadeIn(300);

		$('.right__body').fadeOut(50);
		$('.right__body-1').fadeIn(500);

		console.log('Hello');
	})
})
