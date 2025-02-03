import { validatePhotoEditForm, pristine } from './validation-option.js';
import { resetPhotoSettings, editPhotoEffect, editPhotoScale } from './photo-setting.js';
import { loadUserPhoto } from './add-user-photo.js';
import { sendData } from './api.js';
import { showSendErrorMessage, showSendSuccessMessage } from './util.js';


const formElement = document.querySelector('.img-upload__form');
const photoUploadInputElement = formElement.querySelector('.img-upload__input');
const modalElement = formElement.querySelector('.img-upload__overlay');
const closeElement = formElement.querySelector('.img-upload__cancel');
const submitButtonElement = formElement.querySelector('.img-upload__submit');


// Обработчик события нажатия клавиши Escape
function onEscapeDown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    onModalClose();
  }
}

// Закрытие модального окна
function onModalClose() {
  modalElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscapeDown);
  formElement.reset();
  resetPhotoSettings('');
  pristine.reset();
}

// Открытие модального окна редактирования фотографии
const editPhotoModal = () => {
  loadUserPhoto();

  photoUploadInputElement.addEventListener('change', () => {
    modalElement.classList.remove('hidden');
    document.body.classList.add('modal-open');
  });


  document.addEventListener('keydown', onEscapeDown);
  closeElement.addEventListener('click', onModalClose);
  validatePhotoEditForm();
  editPhotoScale();
  editPhotoEffect();
};

// Настройка отправки формы
const configureFormSubmit = () => {
  formElement.addEventListener('submit', async (evt) => {
    evt.preventDefault();

    if (pristine.validate()) {
      const formData = new FormData(evt.target);
      submitButtonElement.setAttribute('disabled', 'true');

      sendData(formData)
        .then(() => {
          onModalClose();
          showSendSuccessMessage();
        })
        .catch(() => {
          showSendErrorMessage();
        })
        .finally(() => {
          submitButtonElement.removeAttribute('disabled');
        });
    }
  });
};

export { editPhotoModal, onEscapeDown, configureFormSubmit };
