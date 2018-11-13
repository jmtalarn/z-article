const articlesData = require('../data/articles.json');

var express = require('express');
var router = express.Router();

function find(query) {
	const articles = articlesData.data;
	let result = articles;
	if (query) {
		result = articles.filter(article => {

			if (article.title.toUpperCase().indexOf(query.toUpperCase()) !== -1)
				return true;
			if (article.body.toUpperCase().indexOf(query.toUpperCase()) !== -1)
				return true;
			if (article.authors) {
				return (article.authors.some(author => author.toUpperCase().indexOf(query.toUpperCase()) !== -1));
			}
			return false;
		});
	}
	return result;
}

function get(id) {
	return articlesData.data.find(article => article.id == id);
}

function navigation(id) {
	const limit = articlesData.data.length - 1;
	const articleIndex = articlesData.data.findIndex(article => article.id == id);
	console.log(articleIndex, limit);
	const navigation = {
		next: articleIndex < limit ? articlesData.data[ articleIndex + 1 ].id : null,
		previous: articleIndex > 0 ? articlesData.data[ articleIndex - 1 ].id : null
	};

	return navigation;

}

module.exports = { find, get, navigation };
