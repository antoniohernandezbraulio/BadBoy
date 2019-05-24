var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'xBadBoy' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});
router.get('/company', function(req, res, next) {
  res.render('company', { title: 'Company' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Log In' });
});
router.get('/sign', function(req, res, next) {
  res.render('sign', { title: 'Sign up' });
});
router.get('/help', function(req, res, next) {
  res.render('help', { title: 'Help XBadBoy' });
});

module.exports = router;
