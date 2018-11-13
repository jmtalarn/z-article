var express = require('express');
var router = express.Router();
var articlesStore = require('./articles-store');


router.get('/', function (req, res, next) {
	const query = req.query.q;
	const result = articlesStore.find(query);
	res.json(result);
});

router.get('/:id', function (req, res, next) {
	const articleId = req.params.id;
	console.log("****" + articleId);
	const articleFound = articlesStore.get(articleId);
	console.log(articleFound);
	if (articleFound) {
		res.json(articleFound);
	} else {
		res.send(404);
	}
});

module.exports = router;
