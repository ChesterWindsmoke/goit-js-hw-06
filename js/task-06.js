//Знаходимо input
const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputBlur);


function onInputBlur(event) {
    if (event.currentTarget.value.length === Number(inputRef.getAttribute('data-length'))) {
        inputRef.classList.add('#validation-input.valid')
        inputRef.classList.remove('#validation-input.invalid')
    }
    
    else {
        inputRef.classList.add('#validation-input.invalid')
        inputRef.classList.remove('#validation-input.valid')
    }
}




const inputText = document.getElementById('validation-input');
inputText.addEventListener('blur', addBorderColor);
const dataLength = inputText.getAttribute('data-length');
function addBorderColor(event) {
    const valueLength = event.target.value.trim().length;
    if (Number(dataLength) === valueLength) {
        inputText.classList.add('valid');
        inputText.classList.remove('invalid');
    }
    else {
        inputText.classList.add('invalid');
        inputText.classList.remove('valid');
    }
}




























//Знаходимо input
// const inputRef = document.querySelector('#validation-input');

//Відстежуємо blur інпуту
// inputRef.addEventListener('blur', onInputBlur);
//Задаємо правильний колір border в залежності від умови



// function onInputBlur(event) {
    
//     if (inputRef.dataset.length === 6) {
        
//         const inputValid = event.currentTarget;
//         inputValid.classList.add('#validation-input.valid')
//     }

//     else {
//         inputValid.classList.remove('#validation-input.valid')
//     }


// };



// const inputRef = document.querySelector('#validation-input');

// inputRef.addEventListener('blur', onInputBlur);

// inputRef.addEventListener('blur', offInputBlur);

// function onInputBlur(event) {
//     if (event.currentTarget.value.length === Number(inputRef.getAttribute('data-length'))) {
//         const inputValid = event.currentTarget;

//         inputValid.classList.add('#validation-input.valid')
//         inputValid.classList.remove('#validation-input.valid')
//     }
// }

// function offInputBlur(event) {
//     if (event.currentTarget.value.length !== Number(inputRef.getAttribute('data-length'))) {
//     const inputInvalid = event.currentTarget;

//     inputInvalid.classList.add('#validation-input.invalid')
//     inputInvalid.classList.remove('#validation-input.invalid')
//     }
// }