"use strict";



const swiper = new Swiper('.animals__slider', {
	loop: true,
	// Navigation arrows
	navigation: {
		nextEl: '.animals__button-swipe_next',
		prevEl: '.animals__button-swipe_prev',
	},
	spaceBetween: 30,
	freeMode: true,
	autoHeight: true,
});



const swiperTwo = new Swiper('.testimonials__slider', {
	pagination: {
		el: ".swiper-pagination",
		type: "progressbar",
	},
	observer: true,
	observeParents: true,
	spaceBetween: 9,
});


