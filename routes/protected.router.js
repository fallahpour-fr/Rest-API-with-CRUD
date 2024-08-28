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

router.post('/admin/role/create', auth, adminAccess);
router.get('/admin/role/find/:id', auth, adminAccess, adminAccessControllers.findAdminRoleAccess);
router.delete('/admin/role/delete/:id', auth, adminAccess, adminAccessControllers.deleteAdminRoleAccess);
router.put('/admin/role/edit/:id', auth, adminAccess, adminAccessControllers.editAdminRoleAccess);

router.post('/admin/permission/create', auth, adminAccess, adminAccessControllers.createAdminPermissionAccess);
router.get('/admin/permission/find/:id', auth, adminAccess, adminAccessControllers.findAdminPermissionAccess);
router.delete('/admin/permission/delete/:id', auth, adminAccess, adminAccessControllers.deleteAdminPermissionAccess);
router.put('/admin/permission/edit/:id', auth, adminAccess, adminAccessControllers.editAdminPermissionAccess);

router.get('/user/find/:id', auth, adminAccess, adminAccessControllers.findUser);
router.get('/user/find-all', auth, adminAccess, adminAccessControllers.findAllUser);
router.delete('/user/delete/:id', auth, adminAccess, adminAccessControllers.deleteUser);
router.put('/user/edit/:id', auth, adminAccess, adminAccessControllers.editUser);


module.exports = router;