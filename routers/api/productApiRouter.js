const express = require('express');
const router = express.Router();
const productAPIController = require ('../../controllers/api/productAPIController')




router.get('/product', productAPIController.list);
router.get('/product/:id', productAPIController.detail);






module.exports = router;


