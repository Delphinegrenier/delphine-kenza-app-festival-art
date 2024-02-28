var swiper = new Swiper(".swiper-filters", {
  slidesPerView: 'auto',
  freeMode: true,
});

var swiperScreenshots = new Swiper(".swiper-screenshots", {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    1200: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});