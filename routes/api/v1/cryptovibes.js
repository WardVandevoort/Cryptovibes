const express = require("express");
const router = express.Router();
const transactionsController = require("../../../controllers/api/v1/cryptovibes");


router.post('/transaction', transactionsController.transaction);  //new transaction

router.get('/transaction', transactionsController.getTransactions);  //alle transacties

router.get('/transaction/:id', transactionsController.getTransaction);  //krijg één transactie

router.get('/getUsers', transactionsController.getUsers);  //alle users

module.exports = router;

//router.post('/newUser', transactionsController.users);