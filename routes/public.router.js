const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/user.controller');


router.post('/signup', userControllers.signupUser);
router.post('/login', userControllers.loginUser);
router.get('/pagination', userControllers.pagination);

module.exports = router;