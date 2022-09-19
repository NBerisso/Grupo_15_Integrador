const express = require('express');
const mainController = require('../controllers/mainController.js')

const router = express.Router();


    // Vistas Principales

router.get("/", mainController.home);
router.get("/crearCuenta", mainController.crearCuenta);
router.get("/Producto", mainController.producto);
router.get("/login", mainController.login);
router.get("/carritoFinal", mainController.carritoFinal);
router.get("/agregar-Productos", mainController.agregarProductos);
router.get("/editar-Productos", mainController.editarProductos);


module.exports = router;
