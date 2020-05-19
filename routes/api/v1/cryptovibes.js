const express = require("express");
const router = express.Router();
const userController = require("../../../controllers/auth");
const transactionsController = require("../../../controllers/api/v1/cryptovibes");

router.post('/transfer', transactionsController.createTransaction);  //new transaction

router.get('/transfer', transactionsController.getTransactions);  //all tranactions

router.get('/transfer/:id', transactionsController.getOneTransaction);  //get one transaction

router.get('/users', userController.getallUsers);

module.exports = router;