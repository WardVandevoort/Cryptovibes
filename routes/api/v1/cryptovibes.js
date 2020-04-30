const express = require("express");
const router = express.Router();
const transactionsController = require("../../../controllers/api/v1/cryptovibes");


router.post('/', transactionsController.transaction);

router.get('/', transactionsController.getTransactions);

router.get('/:id', transactionsController.getTransaction);

module.exports = router;

