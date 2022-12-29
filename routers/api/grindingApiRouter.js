const express = require('express');
const router = express.Router();
const grindingAPIController = require ('../../controllers/api/grindingAPIController')




router.get('/grinding', grindingAPIController.list);


module.exports = router;