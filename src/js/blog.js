import '/scss/blog.scss';
// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { initArcticlesSlider } from './components/blog/arcticles.js';
import { filterBtn } from './components/blog/switchBtn.js';
import { usePublicationsSlider } from './components/blog/publications.js';

useTheme();
useBurger();
initArcticlesSlider();
filterBtn();
usePublicationsSlider();
