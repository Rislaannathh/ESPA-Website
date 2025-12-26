new Swiper(".eventSwiper", {
  loop: true,
  slidesPerView: 3,        // ✅ Show 3 cards
  slidesPerGroup: 1,       // ✅ Move only 1 card per slide
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  speed: 800,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});
