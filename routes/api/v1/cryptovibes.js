const express = require("express");
const router = express.Router();
const transactiesController = require("../../../controllers/api/v1/cryptovibes");


router.post("/", transactiesController.transactie);

router.get("/", transactiesController.getAll);

module.exports = router;

