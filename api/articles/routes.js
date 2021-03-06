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
	const articleFound = articlesStore.get(articleId);
	if (articleFound) {
		const navigation = articlesStore.navigation(articleId);
		res.json({
			article: articleFound,
			navigation
		}
		);
	} else {
		res.sendStatus(404);
	}
});

module.exports = router;
