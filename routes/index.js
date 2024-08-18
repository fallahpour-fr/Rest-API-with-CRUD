const express = require('express');
const userRouter = require('./user.router');
const postRouter = require('./post.router');

const router = express.Router();

// Combine userRouter and postRouter
router.use(userRouter);
router.use(postRouter);

module.exports = router;