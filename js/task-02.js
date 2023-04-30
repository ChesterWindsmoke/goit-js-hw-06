const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulList = document.querySelector('#ingredients');

const elements = [];

for (let i = 0; i < ingredients.length; i += 1) {

  const ingredientsLi = document.createElement('li');

  ingredientsLi.classList.add('item');

  ingredientsLi.textContent = ingredients[i];

  elements.push(ingredientsLi);
}


ulList.append(...elements);








