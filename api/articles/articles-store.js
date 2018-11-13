const articlesData = require('../data/articles.json');
const cheerio = require('cheerio');


const express = require('express');
const router = express.Router();

const prependedHost = 'https://cdn2.audiencemedia.com';

function find(query) {
	const articles = articlesData.data;

	if (query) {
		const result = articles.filter(article => {

			if (article.title.toUpperCase().indexOf(query.toUpperCase()) !== -1)
				return true;
			if (article.body.toUpperCase().indexOf(query.toUpperCase()) !== -1)
				return true;
			if (article.authors) {
				return (article.authors.some(author => author.toUpperCase().indexOf(query.toUpperCase()) !== -1));
			}
			return false;
		}).map(mapArticle);
		return result;
	} else {
		return articles.map(article => article.id);
	}

}

function get(id) {

	return mapArticle(articlesData.data.find(article => article.id == id));
}

function navigation(id) {
	const limit = articlesData.data.length - 1;
	const articleIndex = articlesData.data.findIndex(article => article.id == id);
	const navigation = {
		next: articleIndex < limit ? articlesData.data[ articleIndex + 1 ].id : null,
		previous: articleIndex > 0 ? articlesData.data[ articleIndex - 1 ].id : null
	};

	return navigation;

}
function mapArticle(article) {
	if (article) {
		return (
			{
				id: article.id,
				body: prependHostToImages(article.body),
				title: article.title,
				authors: article.authors
			});
	} else { return null; }
}
function prependHostToImages(body) {
	const $ = cheerio.load(body);

	$('img').each(
		(idx, img) => {
			$(img).attr('src',
				(i, src) => {
					return src = `${prependedHost}${src}`;
				});
		});
	return $.html();
}
module.exports = { find, get, navigation };
