import { createFullSizePhoto } from "./create-full-size-photo.js";
import { clearComment } from "./render-comment.js";

const modalElement = document.querySelector('.big-picture');
const closeElement = modalElement.querySelector('.big-picture__cancel');
const thumbnailsContainerElement = document.querySelector('.pictures');

function onEscapeDown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeModal();
  }
}

function closeModal() {
  modalElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscapeDown);
  clearComment();
}

const openModal = (photos) => {
  thumbnailsContainerElement.addEventListener('click', (evt) => {
    if (evt.target.matches('.picture__img')) {
      const photo = photos.find((photo) => {
        return photo.id === Number(evt.target.dataset.photoId)
      })
      evt.preventDefault();
      modalElement.classList.remove('hidden');
      document.body.classList.add('modal-open');
      createFullSizePhoto(photo);
     }

     document.addEventListener('keydown', onEscapeDown);
     closeElement.addEventListener('click', closeModal);
  })
}

export {openModal};
