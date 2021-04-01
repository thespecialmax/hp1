// First Slider
const prev = document.querySelector('.slider-hero__prev'),
	  next = document.querySelector('.slider-hero__next'),
	  slides = document.querySelectorAll('.slider-hero__slide');
let counter = 0;
let slidesLength = slides.length;

// Default.
slides[0].classList.add('slider-hero__slide--active');

if (counter == 0) {
	// prev.classList.add("slider-hero__next--none");
}


const move = function() {

	for (let i = 0; i < slides.length; i++) {
		slides[i].classList.remove('slider-hero__slide--active');
	}

	slides[counter].classList.add('slider-hero__slide--active');

	console.log(counter);
}

next.addEventListener('click', () => {
	if (counter + 1 == slides.length) {
		next.classList.add("slider-hero__next--none");
	} else {
		next.classList.remove("slider-hero__next--none");
		counter++;
	}
	move();
});

prev.addEventListener('click', () => {
	if (counter === 0) {
		prev.classList.add("slider-hero__next--none");
	} else {
		prev.classList.remove("slider-hero__next--none");
		counter--;
	}

	move();
});


// second slider
// const secondPrev = document.querySelector('.staging__button-prev'),
// 	  secondNext = document.querySelector('.staging__button-next'),
// 	  item = document.querySelectorAll('.staging__item'),
// 	  track = document.querySelector('.staging__track');

// let position = 0;
// let countItems = item.length;
// let width = item[0].clientWidth;


// // Default.
// track.style.width = width * countItems + "px";
// secondPrev.style.pointerEvents = "none";


// let checkSize = () => {
// 	// check, when we need turn on the button(secondNext)
// 	const trackCheck = track.getBoundingClientRect();
// 	const doc = document.documentElement.getBoundingClientRect();
// 	let total = doc.right - trackCheck.right;
// 	return total;
// }

// let moveTrack = () => {
// 	track.style.transform = "translateX(" + position + "px)"; // When we click on the button, we move the "track" using translateX + position.
// }

// let checkBtn = () => { // check buttons - check when the button need stops
// 	position === 0 ? secondPrev.style.pointerEvents = "none" : secondPrev.style.pointerEvents = "auto" ;
// 	position === -width * countItems ? secondNext.style.pointerEvents = "none" : secondNext.style.pointerEvents = "auto" ;
// }

// if (checkSize() !== 0 || checkSize() < 0) {
// 	secondNext.addEventListener('click', () => {
// 		if (checkSize() >= 0) {
// 			secondNext.style.pointerEvents = "none";
// 		} else {
// 			position -= width; // take width the item;
// 			moveTrack();
// 			checkBtn();
// 		}
// 	});
// } else {
// 	secondNext.style.pointerEvents = "none";
// }

// secondPrev.addEventListener('click', () => {
// 	position += width; // take width the item;

// 	moveTrack();
// 	checkBtn();
// });

var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})


// burger
const close = document.querySelector('.close'),
			burger = document.querySelector('.burger'),
			nav = document.querySelector('.header__nav');


burger.addEventListener('click', () => {
	nav.classList.toggle('header__nav--active');
})

close.addEventListener('click', () => {
	nav.classList.toggle('header__nav--active');
})