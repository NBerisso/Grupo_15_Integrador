const express = require('express');
const mainController = require('../controllers/mainController.js')

const router = express.Router();


    // Vistas Principales

router.get("/", mainController.home);
router.get("/crearCuenta", mainController.crearCuenta);
router.get("/Producto", mainController.producto);
router.get("/login", mainController.login);
router.get("/carritoFinal", mainController.carritoFinal);


module.exports = router;
