const express = require('express');
const router = express.Router();
const postControllers = require('../controllers/post.controller');


router.post('/create', postControllers.createPost);
router.get('/find/:id', postControllers.findPost);
router.get('/find-all', postControllers.findAllPost);
router.delete('/delete/:id', postControllers.deletePost);
router.put('/edit/:id', postControllers.editPost);

module.exports = router;