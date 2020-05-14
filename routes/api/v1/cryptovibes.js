const express = require("express");
const router = express.Router();
const transactionsController = require("../../../controllers/api/v1/cryptovibes");

router.get('/', transactionsController.getTransactions);
router.get('/:id', transactionsController.getTransaction);
router.post('/', transactionsController.transaction);
router.get('/getUsers', transactionsController.getUsers);
//router.post('/newUser', transactionsController.users);

module.exports = router;
