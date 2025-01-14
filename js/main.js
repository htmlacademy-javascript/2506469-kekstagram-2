import {posts} from './data.js';
import {createRenderPictures} from './render-picture.js';
import { openModal } from './manipulation-modal.js';

console.log(posts);

createRenderPictures(posts);
openModal(posts);
