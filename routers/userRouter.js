const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const multer = require('multer');
const path = require("path");
const validation = require("../validations/userValidations");


let storage = multer.diskStorage({
	destination: (req, file, cb) => { 
        cb(null, path.join(__dirname,'../public/img/usuarios-register' ))
	},

	filename: (req, file, cb) => { 
        const newFilename = file.fieldname + Date.now() + "-" + path.extname(file.originalname);
		cb(null, newFilename);
    }
})

let upload = multer({storage: storage});


//register

router.get("/crearCuenta", userController.register);
router.post("/crearCuenta", upload.single('image'), validation.registerValidation, userController.processRegister);

//login - logout

router.get("/login", userController.login);
router.post("/login", validation.loginValidation, userController.processLogin);
router.post("/logout", userController.logout);

module.exports = router;