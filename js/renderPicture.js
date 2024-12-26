// Заведите модуль, который будет отвечать за отрисовку миниатюр.

// На основе временных данных для разработки и шаблона #picture создайте DOM-элементы,
//  соответствующие фотографиям, и заполните их данными:

// Адрес изображения url подставьте как атрибут src изображения.
// Описание изображения description подставьте в атрибут alt изображения.
// Количество лайков likes выведите в блок .picture__likes.
// Количество комментариев comments выведите в блок .picture__comments.
// Отрисуйте сгенерированные DOM-элементы в блок .pictures. Для вставки элементов
// используйте DocumentFragment.

// Подключите модуль в проект.

// {
//   id: 342,
//   avatar: 'img/avatar-2.svg',
//   message: 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
//   name: 'Элли'
// }


const pictureConteiner = document.querySelector('.pictures');
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const fragment = document.createDocumentFragment();

const renderPicture = function ({ id, url, description, likes, comment }) {
  const pictureElement = pictureTemplate.cloneNode(true);
  const image = pictureElement.querySelector('.picture__img');
  image.src = url;
  image.alt = description;
  const commentElement = pictureElement.querySelector('.picture__comments');
  commentElement.textContent = comment.length;
  const likesElement = pictureElement.querySelector('.picture__likes');
  likesElement.textContent = likes;

  return pictureElement;

}

export const createRenderPictures = function (arrayPhoto) {
  arrayPhoto.forEach(element => {
    fragment.appendChild(renderPicture(element));
  });
  pictureConteiner.appendChild(fragment);

};
