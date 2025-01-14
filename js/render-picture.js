const pictureConteiner = document.querySelector('.pictures');
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const fragment = document.createDocumentFragment();

const renderPicture = function ({id, url, description, likes, comment}) {
  const pictureElement = pictureTemplate.cloneNode(true);
  const image = pictureElement.querySelector('.picture__img');
  const commentElement = pictureElement.querySelector('.picture__comments');
  const likesElement = pictureElement.querySelector('.picture__likes');
  image.dataset.photoId = id;
  image.src = url;
  image.alt = description;
  commentElement.textContent = comment.length;
  likesElement.textContent = likes;

  return pictureElement;
}

const createRenderPictures = (arrayPhoto) => {
  arrayPhoto.forEach(element => {
    fragment.appendChild(renderPicture(element));
  });
  pictureConteiner.appendChild(fragment);
};

export {createRenderPictures};
