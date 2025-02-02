AOS.init();

// swiperAbout
const swiperAbout = new Swiper('.swiperAbout', {
    slidesPerView: 1,
	spaceBetween: 16,
	loop: true,
	grabCursor: false,
	autoplay: {
		delay: 3500,
		disableOnInteraction: false,
	},
	effect: 'fade',
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
});

// swiperResults
const swiperResults = new Swiper('.swiperResults', {
    slidesPerView: 1,
	spaceBetween: 16,
	loop: true,
	grabCursor: false,
	autoplay: {
		delay: 3500,
		disableOnInteraction: false,
	},
	effect: 'fade',
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
});

// swiperReview
const swiperReview = new Swiper('.swiperReview', {
    slidesPerView: 1,
	spaceBetween: 16,
	loop: true,
	grabCursor: false,
	autoplay: {
		delay: 3500,
		disableOnInteraction: false,
	},
	effect: 'fade',
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
});