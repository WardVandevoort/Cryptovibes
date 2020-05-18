var express = require('express');
var router = express.Router();
//const transferController = require('../controllers/api/v1/cryptovibes');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('transfer');
});


module.exports = router;