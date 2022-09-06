new Swiper('.uigur-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	},
	hashNavigation: {
		watchState: true,
	},
	keybord: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	autoHeight: true,
});
new Swiper('.turk-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	},
	hashNavigation: {
		watchState: true,
	},
	keybord: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
});

const burgerHeader = document.querySelector('.header__burger');
if (burgerHeader) {
	const menuHeader = document.querySelector('.header__menu');
	burgerHeader.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		burgerHeader.classList.toggle('_active');
		menuHeader.classList.toggle('_active');
	});
}
