// src/js/components/about/aboutSlider.js
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

export function initBeliefsSlider() {
  const sliderEl = document.querySelector('.beliefs-slider');
  if (!sliderEl) return;

  new Swiper('.beliefs-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 15,
    centeredSlides: false,

    breakpoints: {
      768: {
        centeredSlides: true,
        slidesPerView: 'auto',
        slidesPerView: 2,
        spaceBetween: 25,
      },
      1000: {
        slidesPerView: 'auto',
        spaceBetween: 25,
      },
    },
  });
}
