const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const adminAccess = require('../middleware/adminAccess');
const postControllers = require('../controllers/post.controller');
const adminAccessControllers = require('../controllers/admin.controller');


router.post('/post/create', auth, postControllers.createPost);
router.get('/post/find/:id', auth, postControllers.findPost);
router.get('/post/find-all', auth, postControllers.findAllPost);
router.delete('/post/delete/:id', auth, postControllers.deletePost);
router.put('/post/edit/:id', auth, postControllers.editPost);

router.post('/admin/role/create', adminAccess, adminAccessControllers.createAdminRoleAccess);
router.get('/admin/role/find/:id', adminAccess, adminAccessControllers.findAdminRoleAccess);
router.delete('/admin/role/delete/:id', adminAccess, adminAccessControllers.deleteAdminRoleAccess);
router.put('/admin/role/edit/:id', adminAccess, adminAccessControllers.editAdminRoleAccess);

router.post('/admin/permission/create', adminAccess, adminAccessControllers.createAdminPermissionAccess);
router.get('/admin/permission/find/:id', adminAccess, adminAccessControllers.findAdminPermissionAccess);
router.delete('/admin/permission/delete/:id', adminAccess, adminAccessControllers.deleteAdminPermissionAccess);
router.put('/admin/permission/edit/:id', adminAccess, adminAccessControllers.editAdminPermissionAccess);


module.exports = router;