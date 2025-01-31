import {posts} from './data.js';
import { getData } from './api.js';
import {createRenderPictures} from './render-picture.js';
import { openModal } from './manipulation-modal.js';
import { editPhotoModal, configureFormSubmit} from './edit-photo-modal.js';
import { addUserPhoto } from './add-user-photo.js';
import { showLoadErrorMessage } from './util.js';

addUserPhoto();
editPhotoModal();
configureFormSubmit();

getData()
  .then(() => {
    createRenderPictures(posts);
    openModal(posts);
  })
  .catch(() => {
    showLoadErrorMessage();
  });


