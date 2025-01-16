import {posts} from './data.js';
import {createRenderPictures} from './render-picture.js';
import { openModal } from './manipulation-modal.js';

createRenderPictures(posts);
openModal(posts);
