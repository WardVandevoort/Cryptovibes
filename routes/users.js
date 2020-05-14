var express = require('express');
var router = express.Router();
const authController = require('../controllers/auth');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/userSignup',authController.signup);
router.post('/userLogin',authController.login);

router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

module.exports = router;