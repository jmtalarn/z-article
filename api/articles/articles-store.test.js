const articlesStore = require('./articles-store');
const cheerio = require('cheerio');

describe('Article API ', () => {
	it('find returns something not null', () => {
		const articlesFound = articlesStore.find();
		expect(articlesFound).not.toBeNull();
	});
	it('find returns an array of numbers', () => {
		const articlesFound = articlesStore.find();
		expect(Array.isArray(articlesFound)).toBe(true);
		articlesFound.every(articleId => {
			expect(articleId).toBeGreaterThan(0);
			expect(typeof articleId === 'number').toBe(true);
		});
	});
	it('find accepts a parameter to filter results', () => {
		const articlesFound = articlesStore.find();
		const articlesFiltered = articlesStore.find("lessons");
		expect(articlesFiltered.length).toBeLessThan(articlesFound.length);
	});
	it('returns title, authors when filter results', () => {
		const articlesFound = articlesStore.find();
		const articlesFiltered = articlesStore.find("company");
		articlesFiltered.every(article => {
			expect(article).toHaveProperty('title');
			expect(article).toHaveProperty('authors');
		});
	});
	it('prepends the string <https://cdn2.audiencemedia.com/> to all images', () => {
		const articlesFound = articlesStore.find();
		const articlesFiltered = articlesStore.find("company");
		articlesFiltered.every(article => {
			const $ = cheerio.load(article.body);
			$('img').each((idx, img) => {
				expect($(img).attr('src')).toMatch(/^https:\/\/cdn2\.audiencemedia\.com/);
			});
		});
	});

	it('find accepts a parameter to filter results (tag <\/figcaption> in body)', () => {
		const articlesFound = articlesStore.find();
		const articlesFiltered = articlesStore.find("<\/figcaption>");
		expect(articlesFiltered.length).toBeLessThan(articlesFound.length);
	});

	it('gets one article by its id', () => {
		const firstArticleId = articlesStore.find()[ 0 ];
		const anArticleById = articlesStore.get(firstArticleId);
		expect(anArticleById.id).toBe(firstArticleId);
	});
	it('returns body, title and authors per article when get', () => {
		const firstArticleId = articlesStore.find()[ 0 ];
		const anArticleById = articlesStore.get(firstArticleId);
		expect(anArticleById).toHaveProperty('body');
		expect(anArticleById).toHaveProperty('title');
		expect(anArticleById).toHaveProperty('authors');
	});

	it('got correct navigation for the first article', () => {
		const firstArticleId = articlesStore.find()[ 0 ];
		const navigation = articlesStore.navigation(firstArticleId);
		expect(navigation.next).toBeTruthy();
		expect(navigation.previous).toBeFalsy();
	});
	it('got correct navigation for the last article', () => {
		const articles = articlesStore.find();
		const lastArticleId = articles[ articles.length - 1 ];
		const navigation = articlesStore.navigation(lastArticleId);
		expect(navigation.next).toBeFalsy();
		expect(navigation.previous).toBeTruthy();
	});
	it('got correct navigation for middle article', () => {
		const articles = articlesStore.find();
		const articleId = articles[ parseInt(articles.length / 2) ];
		const navigation = articlesStore.navigation(articleId);
		expect(navigation.next).toBeTruthy();
		expect(navigation.previous).toBeTruthy();
	});

});
