
// Знаходимо input та span який нам потрібен

const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');
const defValue = 'Anonymous';

// Додаємо слухача на input, застосовуємо подію input , та передаємо функцію як колбек

inputRef.addEventListener('input', onInputChange);

// Функція 
function onInputChange(event) {
    if (inputRef.value === "") {
        spanRef.textContent = defValue;
    } 
    else {
    spanRef.textContent = event.currentTarget.value;
    }
    }
   

