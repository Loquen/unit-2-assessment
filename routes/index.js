var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'To Do List' });
});

router.post('/', function(req, res, next) {
  console.log('todo:', req.body.todo);
  res.redirect('/');
});

module.exports = router;
