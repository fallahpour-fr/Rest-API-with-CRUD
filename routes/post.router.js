const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const postControllers = require('../controllers/post.controller');
const adminAccessControllers = require('../controllers/admin.controller');


router.post('/post/create', auth, postControllers.createPost);
router.get('/post/find/:id', auth, postControllers.findPost);
router.get('/post/find-all', auth, postControllers.findAllPost);
router.delete('/post/delete/:id', auth, postControllers.deletePost);
router.put('/post/edit/:id', auth, postControllers.editPost);

router.post('/admin/role/create', auth, adminAccessControllers.createAdminRoleAccess);
router.get('/admin/role/find/:id', auth, adminAccessControllers.findAdminRoleAccess);
router.get('/admin/role/find-all', auth, adminAccessControllers.findAllAdminRoleAccess);
router.delete('/admin/role/delete/:id', auth, adminAccessControllers.deleteAdminRoleAccess);
router.put('/admin/role/edit/:id', auth, adminAccessControllers.editAdminRoleAccess);

router.post('/admin/permission/create', auth, adminAccessControllers.createAdminPermissionAccess);
router.get('/admin/permission/find/:id', auth, adminAccessControllers.findAdminPermissionAccess);
router.get('/admin/permission/find-all', auth, adminAccessControllers.findAllAdminPermissionAccess);
router.delete('/admin/permission/delete/:id', auth, adminAccessControllers.deleteAdminPermissionAccess);
router.put('/admin/permission/edit/:id', auth, adminAccessControllers.editAdminPermissionAccess);


module.exports = router;