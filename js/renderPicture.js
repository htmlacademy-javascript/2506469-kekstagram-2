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
