const express = require('express');
const router = express.Router();
const { getcomment, postcomment, putcomment, deletecomment } = require('../controllers/commentsC.js');

router.get('/', getcomment);
router.post('/', postcomment);
router.put('/:id', putcomment);
router.delete('/:id', deletecomment);

module.exports = router;