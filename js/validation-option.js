const formElement = document.querySelector('.img-upload__form');
const hashtagElement = formElement.querySelector('.text__hashtags');
const descriptionElement = formElement.querySelector('.text__description');

const getHashtagErrorMessage = (value) => {
  const hashtags = value.trim().toLowerCase().split(/\s+/);
  if (hashtags.length > 5) {
    return 'Можно указать не более 5 хэштегов';
  }
  if (hashtags.some((hashtag) => hashtag === '#')) {
    return 'Хэштег не может состоять только из одной решетки';
  }
  if (hashtags.some((hashtag) => !/^#[a-zа-яё0-9]{1,19}$/.test(hashtag))) {
    return 'Хэштег должен начинаться с # и содержать только буквы и цифры (до 20 символов)';
  }
  if (new Set(hashtags).size !== hashtags.length) {
    return 'Хэштеги не должны повторяться';
  }

  return '';
};


// eslint-disable-next-line no-undef
const pristine = new Pristine(formElement, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const validateHashtags = (value) => { // хэштеги необязательны
  if (!value.trim()) {
    return true;
  }

  const hashtags = value.trim().toLowerCase().split(/\s+/); // регистр не учитывается, разделяется пробелами
  const uniqueHashtags = [];
  const hashtagPattern = /^#[a-zа-яё0-9]{1,19}$/; // начинается с #, строка состоит из букв и чисел, не может состоять только из решетки, длина 20 символов

  if (hashtags.length > 5) {
    return false;
  }

  for (const hashtag of hashtags) {
    if ((hashtag === '#') || (!hashtagPattern.test(hashtag)) || (uniqueHashtags.includes(hashtag))) {
      return false;
    }

    uniqueHashtags.push(hashtag);
  }

  return true;
};

const preventEscClose = (evt) => {
  if (evt.key === 'Escape' && (hashtagElement === document.activeElement || descriptionElement === document.activeElement)) {
    evt.stopPropagation();
  }
};

const validateDescription = (value) => value.length <= 140;

const validatePhotoEditForm = () => {
  pristine.addValidator(hashtagElement, validateHashtags, getHashtagErrorMessage);
  pristine.addValidator(descriptionElement, validateDescription, 'Комментарий не должен превышать 140 символов');

  hashtagElement.addEventListener('keydown', preventEscClose);
  descriptionElement.addEventListener('keydown', preventEscClose);
};


export { validatePhotoEditForm, pristine };
