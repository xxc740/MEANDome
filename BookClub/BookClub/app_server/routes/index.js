var express = require('express');
var router = express.Router();
var homeController = require('../controllers/home');

/* GET home page. */
//router.get('/', function (req, res) {
//    res.render('index', { title: 'BookClub' });
//});

router.get('/', homeController.index);
router.get('/about', homeController.about);
router.get('/books',homeController.books);

module.exports = router;