// Реалізуємо обробку та відправлення форми через подію submit

const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('input[name = "email"]');
const passwordInput = document.querySelector('input[name = "password"');

loginForm.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();

    if (emailInput.value === "" && passwordInput.value === "") {
        alert('Всі поля повинні бути заповнені!');
    }

    const formData = {};

    for (let element of loginForm) {
        if (element.type !== 'submit' && element.value) {
            formData[element.name] = element.value;
        }
    }

    console.log(formData);
    
    event.target.reset();
}