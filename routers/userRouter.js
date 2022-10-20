const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const path = require("path");
const validation = require("../validations/userValidations");


//register

router.get("/crearCuenta", userController.register);
router.post("/crearCuenta", validation.registerValidation, userController.processRegister);

//login - logout

router.get("/login", userController.login);
router.post("/login", validation.loginValidation, userController.processLogin);
router.post("/logout", userController.logout);

module.exports = router;