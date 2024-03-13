
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
/*Pour montrer les 3 cartes au chargement de la page : 
 Créer un écouteur simple pour l'événement shown.bs.tab et ensuite appeler update() uniquement si nécessaire. github.com/nolimits4web/swiper/issues/2494*/

$('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
  var paneTarget = $(e.target).attr('href');
  var $thePane = $('.tab-pane' + paneTarget);
  var paneIndex = $thePane.index();
  if ($thePane.find('.swiper-container').length > 0 && 0 === $thePane.find('.swiper-slide-active').length) {
    swiperScreenshots[paneIndex].update();
  }
});