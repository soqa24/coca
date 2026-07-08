import '/scss/about.scss';
// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { initBeliefsSlider } from './components/about/aboutSlider.js';
import { initEmployeesSlider } from './components/about/ourEmployees.js';

useTheme();
useBurger();
initBeliefsSlider();
initEmployeesSlider();

