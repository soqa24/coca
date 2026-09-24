export const filterBtn = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const tabsContainer = document.querySelector('.articles-list');

    if (tabsContainer) {
      tabsContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.articles-list-item');

        if (btn) {
          // 1. Находим все кнопки внутри контейнера
          const allBtns = tabsContainer.querySelectorAll('.articles-list-item');

          // 2. Убираем класс active у всех
          allBtns.forEach((b) => b.classList.remove('active'));

          // 3. Добавляем класс active нажатой кнопке
          btn.classList.add('active');

          // --- ЗДЕСЬ МОЖНО ДОБАВИТЬ ЛОГИКУ ФИЛЬТРАЦИИ ---
          // Например, вызвать функцию filterContent(btn.textContent);
          console.log('Выбран фильтр:', btn.textContent);
        }
      });
    }
  });
};
