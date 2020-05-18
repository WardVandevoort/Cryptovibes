const express = require("express");
const router = express.Router();
const userController = require('../../../controllers/api/v1/cryptovibes')

router.get('/', userController.getUsers);  //alle users

module.exports = router;