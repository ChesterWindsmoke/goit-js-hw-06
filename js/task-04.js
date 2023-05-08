let counterValue = 0;
// Знаходимо кнопку декременту
const decrementBtn = document.querySelector('button[data-action = "decrement"]');

// Знаходимо кнопку інкременту
const incrementBtn = document.querySelector('button[data-action = "increment"]');
// Знаходимо span в якому буде відображатись результат
const valueBtn = document.querySelector('#value');


// Додаємо слухача подій на декремент , а також передаємо ф-цію в якій при кліку буде змінюватись counterValue та записуватиссь в span
decrementBtn.addEventListener('click', function () {
    counterValue -= 1;
    console.log(counterValue)

    valueBtn.textContent = counterValue;
});
// Додаємо слухача подій на інкремент , а також передаємо ф-цію в якій при кліку буде змінюватись counterValue та записуватиссь в span
incrementBtn.addEventListener('click', function () {
    counterValue += 1;
    console.log(counterValue)

    valueBtn.textContent = counterValue;
});