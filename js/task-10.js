// Знаходимо всі необхідні нам елементи
const boxes = document.getElementById('boxes');
const amount = document.querySelector('input[type = "number"]');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
// Вішаємо слухачів на кнопки
buttonCreate.addEventListener('click', () => createBoxes(amount.value));
buttonDestroy.addEventListener('click', destroyBoxes);
  
// Ф-ція створення блоків та надання рандомного кольору
function createBoxes(amount) {
  const firstSize = 30;
  const fragment = document.createDocumentFragment();
  
  for (let i = 0; i < amount; i++) {
    const size = firstSize + i * 10;
    const div = document.createElement('div');
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};`;
    fragment.appendChild(div);
  }

  boxes.appendChild(fragment);
}

// Ф-ція знищення блоків
function destroyBoxes() {
  while (boxes.firstChild) {
    boxes.firstChild.remove();
  }
}


// Функція для отримання рандомного кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}















