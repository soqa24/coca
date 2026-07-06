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
// export function initBeliefsSlider() {
//   const sliderEl = document.querySelector('.beliefs-slider');

//   const slides = sliderEl.querySelectorAll('.beliefs-slider-wrapper-slide');
//   const totalSlides = slides.length;

//   const shouldLoop = totalSlides >= 2.5;

//   new Swiper(sliderEl, {
//     loop: shouldLoop,
//     slidesPerView: 1,
//     spaceBetween: 32,

//     breakpoints: {
//       640: {
//         slidesPerView: 1,
//         spaceBetween: 20,
//       },
//       991: {
//         slidesPerView: 2,
//         spaceBetween: 32,
//       },
//       1201: {
//         slidesPerView: 2,
//         spaceBetween: 32,
//       },
//       1441: {
//         slidesPerView: 2.5,
//         spaceBetween: 32,
//       },
//     },
//   });
// }
