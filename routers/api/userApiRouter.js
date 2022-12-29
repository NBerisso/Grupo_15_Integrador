const express = require('express');
const router = express.Router();
const userAPIController = require ('../../controllers/api/userAPIController')




router.get('/user', userAPIController.list);


module.exports = router;