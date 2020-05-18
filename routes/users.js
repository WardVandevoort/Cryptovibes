var express = require('express');
var router = express.Router();
const authController = require('../controllers/auth');

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.render('users');
});

router.post('/signup',authController.signup);
router.post('/login',authController.login);

router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

module.exports = router;