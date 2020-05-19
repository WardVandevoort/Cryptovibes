const express = require("express");
const router = express.Router();
const transactionsController = require("../../../controllers/api/v1/transactions");
const userController = require('../../../controllers/api/v1/cryptovibes');

router.get('/:id', transactionsController.getOneTransaction);  //get one transaction

router.post('/', transactionsController.createTransaction);  //new transaction

router.get('/', transactionsController.getTransactions);  //all tranactions

router.get('/getUsers', userController.getUsers);  //all users

module.exports = router;