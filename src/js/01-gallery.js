import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
console.log(galleryItems);
let gallerySubArr = [];
galleryItems.forEach(function (item) {
  let card = `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`;
  gallerySubArr.push(card);
});
gallery.innerHTML = gallerySubArr.join('');
// const basicLightbox = require('basiclightbox'); не то
import * as basicLightbox from 'basiclightbox';

const delegation = event => {
  event.preventDefault();
  const instance = basicLightbox.create(
    `
    <div class="modal">
    <img
      class="gallery__image"
      src="${event.target.dataset.source}"
      alt="${event.target.alt}"
    />

    </div>
`,
    {
      onShow: instance => {
        instance.element().querySelector('img').onclick = instance.close;
      },
    }
  );

  instance.show();
};
gallery.addEventListener('click', delegation);
