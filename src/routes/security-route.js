const express = require('express');
const controller = require('../controllers/security-controller.js');
const authController = require('../controllers/authentication-controller.js');
const httpDefaults = require('../config/http-defaults.js');
const jwtValidation = require('../config/jwt-validation.js');

const router = express.Router();

router.put("/user", httpDefaults.setHttpHeader, jwtValidation.validateAuthentication, controller.putUser);
router.put("/userLevel", httpDefaults.setHttpHeader, jwtValidation.validateAuthentication, controller.putUserLevel);
router.put("/userProfile", httpDefaults.setHttpHeader, jwtValidation.validateAuthentication, controller.putUserProfile);
router.get("/userLevel/:id?", httpDefaults.setHttpHeader, jwtValidation.validateAuthentication, controller.getUserLevel);
router.get("/userProfile/:id?", httpDefaults.setHttpHeader, jwtValidation.validateAuthentication, controller.getUserProfile);
router.get("/login/:email/:password", httpDefaults.setHttpHeader, authController.login);

module.exports = router;