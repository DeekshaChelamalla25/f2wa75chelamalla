var express = require('express');
var router = express.Router();

/* GET computation page. */
router.get('/', function (req, res, next) {
  var x;
  var random = Math.random().toFixed(2);
  console.log(req.query.x);
  x = req.query.x;

  // checking if url has params
  if (x == undefined) {
    x = random;
  }

  res.render('computation', {
    title: 'Computation',
    value1: `Math.asin() applied to ` + x + ` is ${Math.asin(x).toFixed(2)}`,
    value2: `Math.cos() applied to ` + x + ` is ${Math.cos(x)}`,
    value3: `Math.asinh() applied to ` + x + ` is ${Math.asinh(x).toFixed(2)}`,
    
  });
});

module.exports = router;
