// Знаходимо список який нам потрібен
const listCategories = document.querySelector('#categories');
// Створюємо змінну в якій будемо зберігати дітей цього списку
const liItem = listCategories.children;

console.log('Number of categories:', liItem.length);

// Знаходимо li з классом item та присвоюємо їх в змінну items
const items = document.querySelectorAll('.item');


// Перебиражємо items через метод forEach
items.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`)
    console.log(`Elements: ${item.lastElementChild.children.length}`)

});



