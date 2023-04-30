
const listCategories = document.querySelector('#categories');

const liItem = listCategories.children;

console.log('Number of categories:', liItem.length)


function countedCategories (liItem) {

    let totalElements = 0;

liItem.forEach(function (number) {
    totalElements += number;
});
    console.log(totalElements)
}


// console.log(liItem)

// for (let i = 0; i < liItem.length; i += 1) {
//     console.log('Number of categories' , i)
// }

///////////////////////////////////

// const listCategories = document.querySelector('#categories');

// console.log(listCategories);

// const liItem = listCategories.children;

// console.log(liItem)


////////////////////////////////////////

//  const listCategories = document.querySelector('#categories');

//  console.log(listCategories);

//  const liItem = listCategories.childNodes;

//  console.log(liItem)

// console.log(liItem.classList.contains(".item"));

//  liItem.forEach(function (item, index) {
//      if (liItem.classList.contains('.item') === true) {
//          console.log('Number of categories:', index)
//      }
//  });