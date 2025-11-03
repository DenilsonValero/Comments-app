import Router from 'express';
import { toggleReaction,getReactionsByComment } from '../controllers/reactionsControllers.js';

const router = Router();

router.post('/toggle-reaction', toggleReaction);
router.get('/comment/:comment_id', getReactionsByComment);


export default router;