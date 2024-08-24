const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const adminAccessControllers = require('../controllers/admin.controller');

router.post('/create', auth, adminAccessControllers.createAdminAccess);
router.get('/find/:id', auth, adminAccessControllers.findAdminAccess);
router.get('/find-all', auth, adminAccessControllers.findAllAdminAccess);
router.delete('/delete/:id', auth, adminAccessControllers.deleteAdminAccess);
router.put('/edit/:id', auth, adminAccessControllers.editAdminAccess);

module.exports = router;