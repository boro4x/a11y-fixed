window.addEventListener("DOMContentLoaded", () => {
const openButton = document.getElementById('openButton');
const popup = document.getElementById('popup');
const closeButton = document.getElementById('closeButton');
const focusableElements = popup.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
const firstElement = focusableElements[0];
const lastElement = focusableElements[focusableElements.length - 1];

openButton.addEventListener('click', () => {
    popup.style.display = 'block';
    closeButton.focus(); // Установка фокуса на кнопку "Закрыть всплывающее окно"
});

closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
});

popup.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        popup.style.display = 'none';
        openButton.focus(); // Возвращение фокуса на кнопку "Открыть всплывающее окно"
    }

    if (event.key === 'Tab' && !event.shiftKey) {
        if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
        }
    } else if (event.key === 'Tab' && event.shiftKey) {
        if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
        }
    }
});

popup.addEventListener('focusin', (event) => {
    if (!popup.contains(event.target)) {
        firstElement.focus();
    }
});
// Добавляем обработчик событий для закрытия модального окна при клике вне его области.
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal-backdrop')) {
        closeModal();
    }
});

// Функция закрытия модального окна
const closeModal = () => {
    popup.style.display = 'none';
};

  const inputsColor = document.querySelectorAll('input[name=product_color]');
  const formColorLabel = document.getElementById('productColorValue');
formColorLabel.innerText = 'White';

  inputsColor.forEach((input) => {
    input.addEventListener('change', (e) => {
      formColorLabel.innerText = e.target.dataset.nameDisplay;
    });
  });

    const quantityInput = document.getElementById('productQuantity');
    const quantityDisplay = document.getElementById('quantityDisplay');
    const decreaseBtn = document.getElementById('decreaseQuantityBtn');
    const increaseBtn = document.getElementById('increaseQuantityBtn');

    // Функция для обновления содержимого span
    function updateQuantityDisplay() {
      quantityDisplay.textContent = quantityInput.value;

      // Устанавливаем таймер на 3 секунды
      setTimeout(() => {
        quantityDisplay.textContent = ''; // Очищаем значение после 3 секунд
      }, 50);
    }

    // Вызов при загрузке страницы
    updateQuantityDisplay();

    // Обработчик события для уменьшения количества
    decreaseBtn.addEventListener('click', () => {
      decreaseQuantity();
    });

    // Обработчик события для увеличения количества
    increaseBtn.addEventListener('click', () => {
      increaseQuantity();
    });

    // Обработчик события для изменения вручную в поле ввода
    quantityInput.addEventListener('input', () => {
      updateQuantityDisplay();
    });

    function decreaseQuantity() {
      quantityInput.value = Math.max(1, parseInt(quantityInput.value) - 1);
      updateQuantityDisplay();
    }

    function increaseQuantity() {
      quantityInput.value = parseInt(quantityInput.value) + 1;
      updateQuantityDisplay();
    }

  const accordions = document.querySelectorAll('.accordion__item');
  accordions.forEach((accordion) => {
    const accordionTitle = accordion.querySelector('.accordion__item-title');
    accordionTitle.addEventListener('click', () => {
      accordion.classList.toggle('accordion__item_active');
      const title = accordion.querySelector('.accordion__item-title');
      if (accordion.classList.contains('accordion__item_active')) {
        title.setAttribute('aria-expanded', 'true');
      } else {
        title.setAttribute('aria-expanded', 'false');   
      }
    });    
  });
});
