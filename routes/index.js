const express = require('express');
const userRouter = require('./user.router');
const protectedRouter = require('./protected.router');
const router = express.Router();

// Combine userRouter and postRouter
router.use('/user',userRouter);
router.use('/post',protectedRouter);

module.exports = router;