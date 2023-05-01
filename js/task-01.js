
const listCategories = document.querySelector('#categories');

const liItem = listCategories.children;

console.log('Number of categories:', liItem.length);


const items = document.querySelectorAll('.item');



items.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`)
    console.log(`Elements: ${item.lastElementChild.children.length}`)

});



