import '/scss/main.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import {
  useInsightSlider,
  useTestimonialsSlider,
} from './components/home/slider.js';

useTheme();
useBurger();
useInsightSlider();
useTestimonialsSlider();

function safeInit() {
  const hasHeader = document.querySelector('[data-theme-switcher], .burger');

  if (hasHeader) {
    useTheme();
    useBurger();
  } else {
    setTimeout(safeInit, 100);
  };
};

safeInit();
