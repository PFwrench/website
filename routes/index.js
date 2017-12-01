var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Peter French',
    description: 'A software engineer and musician based in Austin.'});
});

module.exports = router;
