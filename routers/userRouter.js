const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const path = require("path");
const validation = require("../validations/userValidations");


//register

router.get("/crearCuenta", userController.register);
router.post("/crearCuenta", validation.registerValidation, userController.processRegister);

//login

router.get("/login", userController.login);
// router.post("/login", userController.processLogin);


module.exports = router;