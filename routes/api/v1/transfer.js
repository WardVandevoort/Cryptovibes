var express = require('express');
var router = express.Router();
const transactionsController = require("../../../controllers/api/v1/transfer");

router.get('/:id', transactionsController.getTransaction);  //krijg één transactie

router.put('/', transactionsController.createTransaction);  //new transaction

router.get('/', transactionsController.getTransactions);  //alle tranacties

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('transfer');
});


module.exports = router;