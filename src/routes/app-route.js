const express = require('express');
const controller = require('../controllers/app-controller.js');
const httpDefaults = require('../config/http-defaults.js');

const router = express.Router();

router.get('/', httpDefaults.setHttpHeader, controller.index);

module.exports = router;