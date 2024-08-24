const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const postControllers = require('../controllers/post.controller');


router.post('/create',auth, postControllers.createPost);
router.get('/find/:id',auth, postControllers.findPost);
router.get('/find-all',auth, postControllers.findAllPost);
router.delete('/delete/:id',auth, postControllers.deletePost);
router.put('/edit/:id',auth, postControllers.editPost);

module.exports = router;