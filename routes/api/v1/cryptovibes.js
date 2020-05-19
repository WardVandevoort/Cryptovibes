const express = require("express");
const router = express.Router();
const route = express.Router();

//const userController = require('../../../controllers/api/v1/cryptovibes');
const transactionsController = require("../../../controllers/api/v1/cryptovibes");

router.get('/', transactionsController.getUsers);  //all users

route.get('/:id', transactionsController.getOneTransaction);  //get one transaction

route.post('/', transactionsController.createTransaction);  //new transaction

route.get('/', transactionsController.getTransactions);  //all tranactions

module.exports = router;
module.exports = route;

