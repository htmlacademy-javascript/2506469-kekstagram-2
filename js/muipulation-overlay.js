import { validatePhotoEditForm, pristine } from "./validation-option";

const formElement = document.querySelector('.img-upload__form');
const body = document.querySelector('body');
const overlayElement = document.querySelector('.img-upload__overlay');
const inputElement = document.querySelector('#upload-file');
const closeOverlay = document.querySelector('#upload-cancel');
const previewElement = document.querySelector('.img-upload__preview');
const previewImage = previewElement.querySelector('img');

const munipulationOverlay = () => {
  inputElement.addEventListener('change', (evt) => {
    const file = evt.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (evt) {
        previewImage.src = evt.target.result;
      }
    } else {
      previewImage.src = '#';
    }
    body.classList.add('modal-open');
    overlayElement.classList.remove('hidden');
    validatePhotoEditForm();
    pristine.reset();
  });
}

const closeMunipilationOverlay = () => {
  closeOverlay.addEventListener('click', () => {
    body.classList.remove('modal-open');
    overlayElement.classList.add('hidden');
    pristine.reset();
    formElement.reset();
  });
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      body.classList.remove('modal-open');
      overlayElement.classList.add('hidden');
      pristine.reset();
      formElement.reset();
    }
  });
}

const postForm = () => {
  formElement.addEventListener('submit', (evt) => {
    const valid = pristine.validate();
    if (valid) {
      alert('Форма валидна');
    } else {
      alert('Не валидна');
      evt.preventDefault();
    }
  });
}

export { munipulationOverlay, closeMunipilationOverlay, postForm};
