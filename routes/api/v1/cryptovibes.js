const express = require("express");
const router = express.Router();
const userController = require('../../../controllers/api/v1/cryptovibes');

router.get('/getUsers', userController.getUsers);  //all users

module.exports = router;