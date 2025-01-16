const bigPictureElement = document.querySelector('.big-picture__preview');
const image = bigPictureElement.querySelector('img');
const likesCountElement = bigPictureElement.querySelector('.likes-count');
const socialCommentTotalElement = bigPictureElement.querySelector('.social__comment-total-count');
const socialCommentsElement = bigPictureElement.querySelector('.social__comments');
const socialCaptionElement = bigPictureElement.querySelector('.social__caption');
const commentsLoaderElement = bigPictureElement.querySelector('.social__comments-loader');
const socialCommentShownElement = bigPictureElement.querySelector('.social__comment-shown-count');

const  renderComments = (comment) => {
  socialCommentsElement.innerHTML = '';
  comment.forEach(element => {
    socialCommentsElement.innerHTML += `
    <li class="social__comment">
    <img class="social__picture"
      src="${element.avatar}"
      alt="${element.name}"
      width="35" height="35">
   <p class="social__text">${element.message}</p>
   </li>
    `
  });
}

const createFullSizePhoto = ({ url, description, likes, comment }) => {
  image.setAttribute('src', url);
  likesCountElement.textContent = likes;
  socialCaptionElement.textContent = description;
  socialCommentTotalElement.textContent = comment.length;
  socialCommentShownElement.textContent = comment.length;
  renderComments(comment);
};

export { createFullSizePhoto };
