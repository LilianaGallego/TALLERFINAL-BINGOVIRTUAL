var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users/startGame', function(req, res, next) {
  res.render('startGame');
});

module.exports = router;
