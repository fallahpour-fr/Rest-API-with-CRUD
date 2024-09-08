const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const adminRoleAccess = require('../middleware/adminAccess');
const adminPermissionAccess = require('../middleware/permissionAccess');
const postControllers = require('../controllers/post.controller');
const adminAccessControllers = require('../controllers/admin.controller');


router.post('/post/create', auth, postControllers.createPost);
router.get('/post/find/:id', auth, postControllers.findPost);
router.get('/post/find-all', auth, postControllers.findAllPost);
router.delete('/post/delete/:id', auth, postControllers.deletePost);
router.put('/post/edit/:id', auth, postControllers.editPost);

router.post('/admin/role/create', auth, adminRoleAccess, adminAccessControllers.createAdminRoleAccess);
router.put('/admin/role/edit/:id', auth, adminRoleAccess, adminAccessControllers.editAdminRoleAccess);

router.post('/admin/permission/create', auth, adminPermissionAccess, adminAccessControllers.createAdminPermissionAccess);
router.put('/admin/permission/edit/:id', auth, adminPermissionAccess, adminAccessControllers.editAdminPermissionAccess);

router.get('/user/find/:id', auth, adminRoleAccess, adminAccessControllers.findUser);
router.get('/user/find-all', auth, adminRoleAccess, adminAccessControllers.findAllUser);
router.delete('/user/delete/:id', auth, adminRoleAccess, adminAccessControllers.deleteUser);
router.put('/user/edit/:id', auth, adminRoleAccess, adminAccessControllers.editUser);


module.exports = router;