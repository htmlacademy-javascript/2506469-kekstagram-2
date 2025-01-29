import {posts} from './data.js';
import {createRenderPictures} from './render-picture.js';
import { openModal } from './manipulation-modal.js';
import { editPhotoScale } from "./photo-setting";
import { closeMunipilationOverlay, munipulationOverlay, postForm } from './muipulation-overlay.js';

createRenderPictures(posts);
openModal(posts);
munipulationOverlay();
closeMunipilationOverlay();
editPhotoScale();
postForm();
