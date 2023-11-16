window.addEventListener("DOMContentLoaded", () => {
const openButton = document.getElementById('openButton');
const popup = document.getElementById('popup');
const closeButton = document.getElementById('closeButton');
const focusableElements = popup.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
const firstElement = focusableElements[0];
const lastElement = focusableElements[focusableElements.length - 1];

openButton.addEventListener('click', () => {
    popup.style.display = 'block';
    popup.focus(); // Установка фокуса на всплывающее окно
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
  inputsColor.forEach((input) => {
    input.addEventListener('change', (e) => {
      formColorLabel.innerText = e.target.dataset.nameDisplay;
    });
  });

  const inputsQuantity = document.querySelectorAll('.input-quantity');
  inputsQuantity.forEach((input) => {
    const inputField = input.querySelector('.input-quantity__field');
    const inputBtnIncrease = input.querySelector('.input-quantity__btn[data-action=increase]');
    const inputBtnDecrease = input.querySelector('.input-quantity__btn[data-action=decrease]');
    inputBtnIncrease.addEventListener('click', () => {
      const initialValue = inputField.value * 1;
      inputField.value = initialValue + 1; 
    });
    inputBtnDecrease.addEventListener('click', () => {
      const initialValue = inputField.value * 1;
      if (initialValue > 1) inputField.value = initialValue - 1;
    });    
  });

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
