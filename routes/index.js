const express = require('express');
const userRouter = require('./user.router');
const postRouter = require('./post.router');
const router = express.Router();

// Combine userRouter and postRouter
router.use('/user',userRouter);
router.use('/protected',postRouter);

module.exports = router;