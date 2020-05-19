var express = require('express');
var router = express.Router();
const authController = require('../controllers/auth');
const userController = require('../../../controllers/api/v1/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
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

router.get('/', userController.getUsers);  //all users

module.exports = router;