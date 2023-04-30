let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action = "decrement"]');

// console.log(decrementBtn)

const incrementBtn = document.querySelector('button[data-action = "increment"]');

// console.log(incrementBtn)

const valueBtn = document.querySelector('#value');

// console.log(valueBtn)



decrementBtn.addEventListener('click', function () {
    counterValue -= 1;
    console.log(counterValue)

    valueBtn.textContent = counterValue;
});

incrementBtn.addEventListener('click', function () {
    counterValue += 1;
    console.log(counterValue)

    valueBtn.textContent = counterValue;
});