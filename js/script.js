var swiper = new Swiper(".swiper-filters", {
  slidesPerView: 'auto',
  freeMode: true,
});

var swiperArtworks = new Swiper(".swiper-featured-artworks", {
  slidesPerView: 'auto',
  spaceBetween: 8,
  freeMode: true,
});

var swiperScreenshots = new Swiper(".swiper-screenshots", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  breakpoints: {

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

