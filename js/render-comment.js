const bigPictureElement = document.querySelector('.big-picture__preview');
const socialCommentsElement = bigPictureElement.querySelector('.social__comments');
const commentsLoaderElement = bigPictureElement.querySelector('.social__comments-loader');
const socialCommentTotalElement = bigPictureElement.querySelector('.social__comment-total-count');
const socialCommentShownElement = bigPictureElement.querySelector('.social__comment-shown-count');
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

const displayComments = (comments) => {
  socialCommentsElement.innerHTML = '';
  comments.forEach((element, index) => {
    if (index < minComments*countComment) {
      socialCommentsElement.innerHTML += `
      <li class="social__comment">
      <img class="social__picture"
        src="${element.avatar}"
        alt="${element.name}"
        width="35" height="35">
     <p class="social__text">${element.message}</p>
     </li>`
    }
  })
  changeSocialComment(minComments*countComment, comments);
}

const clearComment = () => {
  countComment = 1;
  arrayComment = [];
}

export {displayComments, returnComments, clearComment};
