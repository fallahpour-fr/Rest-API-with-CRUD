const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/users.controller');


router.post('/create-user', userControllers.createUser);
router.get('/find-user/:id', userControllers.findUser);
router.delete('/delete-user/:id', userControllers.deleteUser);
router.put('/edit-user/:id', userControllers.editUser);

module.exports = router;