import Router from 'express';
import { addComment, getComments, editComment, removeComment } from "../controllers/commentsC.js";

const router = Router();



router.get('/', getComments);
router.post('/add-comment/:id', addComment);
router.put('/:id', editComment);
router.delete('/:id', removeComment);

export default router;