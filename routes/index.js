var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/author', function(req, res, next) {
  res.render('author', { title: 'Express' });
});

router.get('/quizes/question', quizController.question);
router.get('/quizes/answer',   quizController.answer);


module.exports = router;
