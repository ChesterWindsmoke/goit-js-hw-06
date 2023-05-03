
const inputRef = document.getElementById('validation-input');

inputRef.addEventListener('blur', onInputBlur);

const dataLength = inputRef.getAttribute('data-length');

function onInputBlur(event) {
    const valueLength = event.target.value.trim().length;
    if ( Number(dataLength) === valueLength) {
        inputRef.classList.add('valid')
        inputRef.classList.remove('invalid')
    }
    
    else {
        inputRef.classList.add('invalid')
        inputRef.classList.remove('valid')
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