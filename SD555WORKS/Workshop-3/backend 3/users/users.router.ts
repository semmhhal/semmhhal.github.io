import { Router } from 'express'
import multer from 'multer'
import { checkToken } from '../auth/auth.middleware'
import { deletePictureById, getPictureById, getPictures, uploadPicture } from './users.controller';
const router = Router();

router.post('/:user_id/pictures',
    checkToken,
    multer({ dest: 'uploads/' }).single('picture'),
    checkToken,
    uploadPicture);
router.get('/:user_id/pictures', getPictures)
router.get('/:user_id/pictures/:picture_id', getPictureById)
router.delete('/:user_id/pictures/:picture_id', checkToken, deletePictureById)


export default router;