const express = require("express");
const router = express.Router();
const transactionsController = require("../../../controllers/transfer");

router.post('/', transactionsController.transaction);  //new transaction

router.get('/', transactionsController.getTransactions);  //alle transacties

router.get('/:id', transactionsController.getTransaction);  //krijg één transactie

router.get('/getUsers', transactionsController.getUsers);  //alle users

module.exports = router;

//router.post('/newUser', transactionsController.users);