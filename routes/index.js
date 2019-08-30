var express = require('express');
var router = express.Router();
var todosCtrl = require('../controllers/index');


/* GET home page. */
router.get('/', todosCtrl.index);

router.post('/', todosCtrl.create);

router.delete('/:id', todosCtrl.delete);

module.exports = router;
