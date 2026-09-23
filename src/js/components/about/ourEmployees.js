// src/js/components/about/ourEmployees.js
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

Swiper.use([Navigation, Pagination]);

export function initEmployeesSlider(params = {}) {
  const selector = '.our-employees-slider';
  const el = document.querySelector(selector);
  if (!el) return;

  new Swiper(selector, {
    loop: true,
    slidesPerView: 1, // По умолчанию (до 768px)
    spaceBetween: 10, // Базовый отступ

    breakpoints: {
      // От 480px до 767px
      480: {
        slidesPerView: 1,
        spaceBetween: 10,
      },

      // ОТ 768px ДО 1200px — здесь должно быть 2 слайда!
      768: {
        slidesPerView: 2, // ✅ Исправление: ставим 2 слайда начиная с 768px
        spaceBetween: 20, // Можно оставить 20 или поставить 15, как вам нужно
      },

      // От 1201px до 1439px
      1201: {
        slidesPerView: 2, // Оставляем 2 слайда, если дизайн не требует 3
        spaceBetween: 25, // Чуть увеличиваем отступ
      },

      // От 1440px и выше
      1440: {
        slidesPerView: 3, // Только здесь увеличиваем до 3
        spaceBetween: 32,
      },
    },
  });
}
