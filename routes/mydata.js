var express = require('express');
var router = express.Router();

/* GET my data page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Deeksha Chelamalla' });
});

module.exports = router;