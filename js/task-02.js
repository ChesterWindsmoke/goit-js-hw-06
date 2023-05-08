const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Знаходимо список який нам потрібен
const ulList = document.querySelector('#ingredients');
//Створюємо пустий массив elements
const elements = [];
// Перебираємо массив ingredients через цикл for та пушимо результат в пустий массив
for (let i = 0; i < ingredients.length; i += 1) {

  const ingredientsLi = document.createElement('li');

  ingredientsLi.classList.add('item');

  ingredientsLi.textContent = ingredients[i];

  elements.push(ingredientsLi);
}

// Додаємо массив elements до списку в html
ulList.append(...elements);








