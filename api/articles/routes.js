var express = require('express');
var router = express.Router();
var articles = require('./articles');


router.get('/', function (req, res, next) {
	const query = req.query.q;
	const result = articles.find(query);
	res.json(result);
});

router.get('/:id', function (req, res, next) {
	const articleId = req.params.id;
	const articleFound = articles.get(articleId);
	if (articleFound) {
		res.json(articleFound);
	} else {
		res.send(404);
	}
});

module.exports = router;
