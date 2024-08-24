const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/user.controller');


router.post('/create', userControllers.createUser);
router.post('/login', userControllers.loginUser);
router.get('/find/:id', userControllers.findUser);
router.get('/find-all', userControllers.findAllUser);
router.delete('/delete/:id', userControllers.deleteUser);
router.put('/edit/:id', userControllers.editUser);
router.get('/pagination', userControllers.pagination);

module.exports = router;