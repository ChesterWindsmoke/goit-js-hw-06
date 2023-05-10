const changeColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color')
const body = document.querySelector('body');

changeColor.addEventListener('click', changeColorFunction);

function changeColorFunction() {
  body.style.backgroundColor = getRandomHexColor();   
  spanColor.textContent = getRandomHexColor();
};


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};