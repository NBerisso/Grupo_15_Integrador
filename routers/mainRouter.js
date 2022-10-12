const express = require('express');
const mainController = require('../controllers/mainController.js')

const router = express.Router();


// Vistas Principales

router.get("/", mainController.home);
router.post("/", mainController.home);
router.get("/carritoFinal", mainController.carritoFinal);



module.exports = router;
