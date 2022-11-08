import { galleryItems } from './gallery-items.js';

// console.log(galleryItems);


const gallery = document.querySelector('.gallery');

const modalImageBackdrop = basicLightbox.create(`<img src="" width="800" height="600">`);
const modalImage = modalImageBackdrop.element().querySelector('img');

const createGalleryMarkup = galleryItems
    .map(({ preview, original, description}) => `
    <div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
            <img
                class="gallery__image"
                src= ${preview}
                data-source= ${original}
                alt= ${description};
            />
        </a>
    </div>`)
    .join("");
 

const galleryClickHandler = (e) => {
    modalImage.src = e.target.dataset.source;
    modalImageBackdrop.show();
}

gallery.insertAdjacentHTML('beforeend', createGalleryMarkup);

gallery.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        return
    };
    e.preventDefault();
    galleryClickHandler(e);
})

gallery.addEventListener('keydown', (e) => {
    if (e.code !== 'Escape') {
        return
    }
    modalImageBackdrop.close();
})
