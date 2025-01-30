import {posts} from './data.js';
import {createRenderPictures} from './render-picture.js';
import { openModal } from './manipulation-modal.js';
import { closePhotoModal, editPhotoModal, postForm } from './edit-photo-modal.js';
import { addUserPhoto } from './add-user-photo.js';

addUserPhoto();
createRenderPictures(posts);
openModal(posts);
editPhotoModal();
closePhotoModal();
postForm();
