const express = require("express");
const router = express.Router();
const userController = require('../../../controllers/api/v1/cryptovibes');
const transactionsController = require("../../../controllers/api/v1/transactions");

router.get('/getUsers', userController.getUsers);  //all users

router.get('/:id', transactionsController.getOneTransaction);  //get one transaction

router.post('/', transactionsController.createTransaction);  //new transaction

router.get('/', transactionsController.getTransactions);  //all tranactions

module.exports = router;

