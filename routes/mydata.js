var data = require('express');
var router = data.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Deeksha Chelamalla' });
});

module.exports = router;
