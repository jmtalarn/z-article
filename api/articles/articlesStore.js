const articlesStore = require('../data/articles.json');

var express = require('express');
var router = express.Router();

function find(query) {
	const articles = articlesStore.data;
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
	return articlesStore.data.find(article => article.id === id);
}


module.exports = { find, get };