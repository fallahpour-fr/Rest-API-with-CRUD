const express = require('express');
const publicRouter = require('./public.router');
const protectedRouter = require('./protected.router');
const router = express.Router();

router.use('/public', publicRouter);
router.use('/protected', protectedRouter);

module.exports = router;