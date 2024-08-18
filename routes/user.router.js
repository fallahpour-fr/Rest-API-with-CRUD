const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/user.controller');


router.post('/create-user', userControllers.createUser);
router.get('/find-user/:id', userControllers.findUser);
router.get('/find-all-user', userControllers.findAllUser);
router.delete('/delete-user/:id', userControllers.deleteUser);
router.put('/edit-user/:id', userControllers.editUser);
router.get('/user-with-post', userControllers.allUserInfo);

module.exports = router;