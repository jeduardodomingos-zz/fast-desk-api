const express = require('express');
const controller = require('../controllers/security-controller.js');
const httpDefaults = require('../config/http-defaults.js');

const router = express.Router();

router.put("/user", httpDefaults.setHttpHeader, controller.createUser);
router.put("/userLevel", httpDefaults.setHttpHeader, controller.putUserLevel);
router.get("/userLevel/:id?", httpDefaults.setHttpHeader, controller.getUserLevel);

module.exports = router;