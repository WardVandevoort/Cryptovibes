const express = require("express");
const router = express.Router();

router.get('/getUsers', transactionsController.getUsers);  //alle users

module.exports = router;

//router.post('/newUser', transactionsController.users);