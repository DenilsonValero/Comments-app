import Router from 'express';
import { addComment } from "../controllers/commentsC.js";

const router = Router();



router.get('/', (req, res) => {});
router.post('/add-comment/:id', addComment);
router.put('/:id', (req, res) => {});
router.delete('/:id', (req, res) => {});

export default router;