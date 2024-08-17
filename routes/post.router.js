const express = require('express');
const router = express.Router();
const postControllers = require('../controllers/post.controller');


router.post('/create-post', postControllers.createPost);
router.get('/find-post/:id', postControllers.findPost);
router.get('/find-all-post', postControllers.findAllPost);
router.delete('/delete-post/:id', postControllers.deletePost);
router.put('/edit-post/:id', postControllers.editPost);

module.exports = router;