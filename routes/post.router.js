const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const postControllers = require('../controllers/post.controller');
const adminAccessControllers = require('../controllers/admin.controller');


router.post('/create', auth, postControllers.createPost);
router.get('/find/:id', auth, postControllers.findPost);
router.get('/find-all', auth, postControllers.findAllPost);
router.delete('/delete/:id', auth, postControllers.deletePost);
router.put('/edit/:id', auth, postControllers.editPost);

router.post('/create', auth, adminAccessControllers.createAdminAccess);
router.get('/find/:id', auth, adminAccessControllers.findAdminAccess);
router.get('/find-all', auth, adminAccessControllers.findAllAdminAccess);
router.delete('/delete/:id', auth, adminAccessControllers.deleteAdminAccess);
router.put('/edit/:id', auth, adminAccessControllers.editAdminAccess);

module.exports = router;

module.exports = router;