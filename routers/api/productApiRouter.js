const express = require('express');
const router = express.Router();
const productAPIController = require ('../../controllers/api/productAPIController')




router.get('/product', productAPIController.list);
router.get('/product/:id', productAPIController.detail);
router.get('/products/firstCoffee', productAPIController.FirstCoffee);
router.get('/products/lastProduct', productAPIController.lastProduct);






module.exports = router;


