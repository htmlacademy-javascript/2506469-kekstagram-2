const bigPictureElement = document.querySelector('.big-picture__preview');
const socialCommentsElement = bigPictureElement.querySelector('.social__comments');
const commentsLoaderElement = bigPictureElement.querySelector('.social__comments-loader');
const socialCommentTotalElement = bigPictureElement.querySelector('.social__comment-total-count');
const socialCommentShownElement = bigPictureElement.querySelector('.social__comment-shown-count');
const socialComments = document.querySelector('.social__comments');
  const commentTemplate = document.querySelector('.social__comment');
  const fragment = document.createDocumentFragment();

let countComment = 1;
let minComments = 5;
let arrayComment = [];

const changeSocialComment = (count, comments) => {
  socialCommentTotalElement.textContent = comments.length;
  socialCommentShownElement.textContent = count > comments.length? comments.length: count;
}

const returnComments = ({comment}) => {
  arrayComment = [...comment];
}

commentsLoaderElement.addEventListener('click', () => {
  countComment += 1;
  displayComments(arrayComment);
});

const renderComments = (avatar, name, message) => {
  const socialCommentsClone = commentTemplate.cloneNode(true);
  console.log(socialCommentsClone);
  const image = socialCommentsClone.querySelector('.social__picture');
  const paragraphComment = socialCommentsClone.querySelector('.social__text');
  image.setAttribute('src', avatar);
  image.setAttribute('alt', name);
  paragraphComment.textContent = message;
  return socialCommentsClone;
}

const displayComments = (comments) => {
  socialCommentsElement.innerHTML = '';
  comments.forEach((element, index) => {
    if (index < minComments*countComment) {
      fragment.appendChild(renderComments(element.avatar, element.name, element.message));
      socialComments.appendChild(fragment);
    }
  })
  changeSocialComment(minComments*countComment, comments);
}

const clearComment = () => {
  countComment = 1;
  arrayComment = [];
}

export {displayComments, returnComments, clearComment};
