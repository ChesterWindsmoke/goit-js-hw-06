const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
//  Перебираємо об'єкт через map
const imageItems = images
  .map(({url, alt}) => `<li><img class = "img" src ="${url}" alt = "${alt}" width = "350" height = "240"</li>`)
   .join("");

   // Знаходимо список який нам потрібен
const ulList = document.querySelector('.gallery');

// Додаємо об'єкт до html
ulList.insertAdjacentHTML('beforeend', imageItems);
// Прибираємо маркери
ulList.setAttribute('style', 'list-style: none;');






