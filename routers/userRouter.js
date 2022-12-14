const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const multer = require('multer');
const path = require("path");
const validation = require("../validations/userValidations");


let storage = multer.diskStorage({
	destination: (req, file, cb) => { 
        cb(null, path.join(__dirname,'../public/img' ))
	},

	filename: (req, file, cb) => { 
        const newFilename = file.fieldname + Date.now() + "-" + path.extname(file.originalname);
		cb(null, newFilename);
    }
})

const upload = multer({storage: storage});



router.get("/crearCuenta", userController.register);
router.post("/crearCuenta", upload.single('image'), validation.registerValidation, userController.processRegister);



router.get("/login", userController.login);
router.post("/login", validation.loginValidation, userController.processLogin);
router.post("/logout", userController.logout);

module.exports = router;