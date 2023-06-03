import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
console.log(galleryItems);
let gallerySubArr = [];
galleryItems.forEach(function (item) {
  let card = `
<li class="gallery__item">
   <a class="gallery__link" href="${item.original}" data-caption="${item.description}">
      <img
      class="gallery__image"
      src="${item.preview}" 
      alt="${item.description}"
      title="${item.description}" />
   </a>
</li>`;
  gallerySubArr.push(card);
});
gallery.innerHTML = gallerySubArr.join('');
// import SimpleLightbox from 'simplelightbox'; не працює
// import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm'; не працює
var lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captions: true,
  captionDelay: 250,
});
const delegation = event => {
  event.preventDefault();
};
gallery.addEventListener('click', delegation);
