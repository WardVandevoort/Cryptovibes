const express = require("express");
const router = express.Router();
const userController = require('../../../controllers/api/v1/cryptovibes')
const transactionsController = require("../../../controllers/api/v1/cryptovibes");

router.get('/:id', transactionsController.getTransaction);  //krijg één transactie

router.post('/', transactionsController.createTransaction);  //new transaction

router.get('/', transactionsController.getTransactions);  //alle tranacties

router.get('/', userController.getUsers);  //alle users

module.exports = router;