import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
console.log(galleryItems);
let gallerySubArr = [];
galleryItems.forEach(function (item) {
  let card = `
<li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
   </a>
</li>`;
  gallerySubArr.push(card);
});
gallery.innerHTML = gallerySubArr.join('');
const delegation = event => {
  event.preventDefault();
};
gallery.addEventListener('click', delegation);
