import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const usePublicationsSlider = () => {
  new Swiper('.publications__slider', {
    modules: [Navigation],
    slidesPerView: '1',
    spaceBetween: 32,
    loop: true,
    breakpoints: {
      993: {
        slidesPerView: 1, // ✅ Исправление: ставим 2 слайда начиная с 768px
        spaceBetween: 20, // Можно оставить 20 или поставить 15, как вам нужно
        centeredSlides:true,
      },

      // От 1201px до 1439px
      1201: {
        slidesPerView: 2, // Оставляем 2 слайда, если дизайн не требует 3
        spaceBetween: 25, // Чуть увеличиваем отступ
        centeredSlides:true,
      },

      // От 1440px и выше
      1441: {
        slidesPerView: 3, // Только здесь увеличиваем до 3
        spaceBetween: 32,
      },
    },
    navigation: {
      prevEl: '.publications__btn--prev',
      nextEl: '.publications__btn--next',
    },
  });
};
