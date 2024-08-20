const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const dashboardControllers = require('../controllers/dashboard.controller');

router.get('/dashboard', auth,dashboardControllers.dashboard);

module.exports = router;
