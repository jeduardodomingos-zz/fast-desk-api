'use strict'

const express = require('express');
const controller = require('../controllers/shared-controller.js');
const httpDefaults = require('../config/http-defaults.js');

const router = express.Router();

router.put("/department", httpDefaults.setHttpHeader, controller.putDepartment);
router.get("/department/:id?", httpDefaults.setHttpHeader, controller.getDepartment);

module.exports = router;