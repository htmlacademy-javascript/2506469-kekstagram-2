import { displayComments } from "./render-comment";

const bigPictureElement = document.querySelector('.big-picture__preview');
const image = bigPictureElement.querySelector('img');
const likesCountElement = bigPictureElement.querySelector('.likes-count');
const socialCommentTotalElement = bigPictureElement.querySelector('.social__comment-total-count');
const socialCommentsElement = bigPictureElement.querySelector('.social__comments');
const socialCaptionElement = bigPictureElement.querySelector('.social__caption');
const commentsLoaderElement = bigPictureElement.querySelector('.social__comments-loader');
const socialCommentShownElement = bigPictureElement.querySelector('.social__comment-shown-count');

const createFullSizePhoto = ({ url, description, likes, comment }) => {
  image.setAttribute('src', url);
  likesCountElement.textContent = likes;
  socialCaptionElement.textContent = description;
  socialCommentTotalElement.textContent = comment.length;
  socialCommentShownElement.textContent = comment.length;
  displayComments(comment);
};

export { createFullSizePhoto };
